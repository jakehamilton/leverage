/*
 * Import dependencies
 */
const chai = require('chai')
const spies = require('chai-spies')
const proxyquire = require('proxyquire').noCallThru()

const path = require('path')

/*
 * Use the spies plugin for chai
 */
chai.use(spies)

/*
 * We're using chai's `should` syntax
 */
const should = chai.should()

/*
 * The unit we will be testing
 */
let unit

/*
 * Mocks we are using in the test
 */
let klaw

class DummyPlugin {
  constructor () {
    this.__is_dummy__ = true
  }
}

class DummyService {
  constructor () {
    this.__is_dummy__ = true
  }
}

class DummyComponent {
  constructor () {
    this.__is_dummy__ = true
  }
}

class DummyMiddleware {
  constructor () {
    this.__is_dummy__ = true
  }
}

/*
 * A plain component object
 */
let component = {
  __config__: {
    type: ['http'],
    http: {
      path: '/'
    }
  },
  http () {

  }
}

/*
 * Start by describing the file we are testing
 */
describe('lib/manager', function () {
  /*
   * Testing the `manager` object
   */
  describe('manager', function () {

    /*
     * Get a clean copy of the unit before each test
     */
    beforeEach(function () {
      /*
       * Retrieve new, clean mocks for each test
       */
      klaw = new (require('../mocks/klaw').default)()

      /*
       * Require the unit
       */
      unit = proxyquire('../../src/lib/manager', {
        'klaw': klaw,
        '../definitions/plugin': DummyPlugin,
        '../definitions/service': DummyService,
        '../definitions/component': DummyComponent,
        '../definitions/middleware': DummyMiddleware,
        'MOCK_KLAW_PATH.js': component
      }).default
    })

    /*
     * The manager manages components by storing them in
     *  a private `components` object.
     */
    it('Should initialize with an empty components map', function () {
      /*
       * The object should exist
       */
      should.exist(unit.__components__)

      /*
       * The object should start as an empty object
       */
      unit.__components__.should.deep.equal({})
    })

    it('Should load plugins', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          identifier: 'path'
        },
        http (component) {

        }
      }

      /*
       * Spy on the plugin's callback
       */
      plugin.http = chai.spy(plugin.http.bind(plugin))

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * The plugin type should be mapped now
       */
      should.exist(unit.__plugins__.http)
    })

    it('Should load components once a plugin is available', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          http: {
            identifier: 'path'
          }
        },
        http (component) {

        }
      }

      /*
       * Create a basic component object to test with
       */
      const component = {
        __config__: {
          type: ['http'],
          http: {
            path: '/'
          }
        },
        http () {

        }
      }

      /*
       * Spy on the plugin and component callbacks
       */
      plugin.http = chai.spy(plugin.http.bind(plugin))
      component.http = chai.spy(component.http.bind(component))

      /*
       * Load the component
       */
      unit.component(component)

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * The component should now exist in the loaded components map
       */
      should.exist(unit.__components__.http['/'])
    })

    it('Should allow adding a component object', function () {
      /*
       * Configure a barebones plugin object so the component is loaded
       */
      unit.__plugins__.http = {
        __config__: {
          type: ['http'],
          http: {
            identifier: 'path'
          }
        },
        http () {

        }
      }

      /*
       * Add a simple, mock component
       */
      unit.component(component)

      /*
       * Ensure the mock component was added to the map of components
       */

      /*
       * The component's type should now have a map
       */
      should.exist(unit.__components__.http)

      /*
       * The component should exist in the map
       */
      should.exist(unit.__components__.http['/'])
    })

    it('Should support identifier callbacks', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          http: {
            identifier (component) {
              return `${component.__config__.http.method}@${component.__config__.http.path}`
            }
          }
        },
        http (component) {

        }
      }

      /*
       * Create a basic component object to test with
       */
      const component = {
        __config__: {
          type: ['http'],
          http: {
            path: '/',
            method: 'get'
          }
        }
      }

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * Load the component
       */
      unit.component(component)

      /*
       * The loaded component should be located at the custom identifier
       */
      should.exist(unit.__components__.http['get@/'])
    })

    it('Should allow adding a component directory', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          http: {
            identifier: 'path'
          }
        },
        http (component) {

        }
      }

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * Load our mock "directory"
       */
      unit.component('/a/b/c')

      /*
       * Our mock component should have been loaded in
       */
      unit.__components__.http[component.__config__.http.path].should.deep.equal(component)
    })

    it('Should allow adding a component file', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          http: {
            identifier: 'path'
          }
        },
        http (component) {

        }
      }

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * Load a mock component file
       */
      unit.component('/a/b/c.js')

      /*
       * Our mock component should have been loaded in
       */
      unit.__components__.http[component.__config__.http.path].should.deep.equal(component)
    })

    it('Should allow creating a service', function () {
      /*
       * Create a basic service object to test with
       */
      const service = {
        __config__: {
          name: 'a'
        }
      }

      /*
       * Load the service
       */
      unit.service(service)
    })

    it('Should patch services with services', function () {
      /*
       * Create a basic service object to test with
       */
      const a = {
        __config__: {
          name: 'a',
          dependencies: {
            services: ['b']
          }
        }
      }

      /*
       * Create another service that will be patched in
       */
      const b = {
        __config__: {
          name: 'b'
        }
      }

      /*
       * Load the services
       */
      unit.service(a)
      unit.service(b)

      /*
       * Service 'a' should have had service 'b' patched in
       */
      should.exist(unit.__services__.a.services.b)
      unit.__services__.a.services.b.should.deep.equal(b)
    })

    it('Should patch components with services', function () {
      /*
       * Create a basic component object to test with
       */
      const component = {
        __config__: {
          type: ['http'],
          http: {
            path: '/'
          },
          dependencies: {
            services: ['a']
          }
        }
      }

      /*
       * Create a basic service object to test with
       */
      const service = {
        __config__: {
          name: 'a'
        }
      }

      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          http: {
            identifier: 'path'
          }
        },
        http (component) {

        }
      }

      /*
       * The following should work in any order
       */

      /*
       * Add the component
       */
      unit.component(component)

      /*
       * Add the service
       */
      unit.service(service)

      /*
       * Add the plugin
       */
      unit.plugin(plugin)

      /*
       * The services map should have been created
       */
      should.exist(unit.__components__.http['/'].services)

      /*
       * Our service should exist
       */
      should.exist(unit.__components__.http['/'].services.a)

      /*
       * The component's service should be the same service
       *  object we passed in earlier.
       */
      unit.__components__.http['/'].services.a.should.deep.equal(service)
    })

    describe('plugin', function () {
      it('Should allow plugins to have dependencies', function () {
        /*
         * Create a dummy plugin
         */
        class A extends DummyPlugin {
          constructor () {
            super()

            this.__config__ = {
              type: ['a'],
              test: {
                identifier: () => 1
              },
              dependencies: {
                plugins: ['b']
              }
            }
          }

          a () {

          }
        }

        /*
         * Create a dummy plugin
         */
        class B extends DummyPlugin {
          constructor () {
            super()

            this.__config__ = {
              type: ['b'],
              test: {
                identifier: () => 1
              }
            }
          }

          b () {

          }
        }

        const a = new A()
        const b = new B()

        unit.plugin(a)

        should.exist(unit.__plugins__.__waiting__)

        unit.plugin(b)

        should.exist(unit.__plugins__['a'])
        should.exist(unit.__plugins__['b'])

        should.exist(a.plugins.b)
      })
    })

    describe('add', function () {
      it('Should allow dynamically adding plugins', function () {
        /*
         * Create a plugin, extending the dummy definition
         */
        class Plugin extends DummyPlugin {
          constructor () {
            super()

            this.__config__ = {
              type: ['test'],
              test: {
                identifier: () => ''
              }
            }
          }

          test () {

          }
        }

        /*
         * Add a new instance of the plugin
         */
        const plugin = new Plugin()
        unit.add(plugin)

        /*
         * The plugin should have been added to the manager
         */
        should.exist(unit.__plugins__.test)
        unit.__plugins__.test.should.deep.equal(plugin)
      })

      it('Should allow dynamically adding services', function () {
        /*
         * Create a service, extending the dummy definition
         */
        class Service extends DummyService {
          constructor () {
            super()

            this.__config__ = {
              name: 'test'
            }
          }
        }

        /*
         * Add a new instance of the service
         */
        const service = new Service()
        unit.add(service)

        /*
         * The plugin should have been added to the manager
         */
        should.exist(unit.__services__.test)
        unit.__services__.test.should.deep.equal(service)
      })

      it('Should allow dynamically adding components', function () {
        /*
         * Create a component, extending the dummy definition
         */
        class Component extends DummyComponent {
          constructor () {
            super()

            this.__config__ = {
              type: ['test'],
              test: {}
            }
          }

          test () {}
        }

        /*
         * Add a new instance of the component
         */
        const component = new Component()
        unit.add(component)

        /*
         * The plugin should have been added to the manager
         */
        should.exist(unit.__components__.test)
        should.exist(unit.__components__.test.__uninitialized__)
        should.exist(unit.__components__.test.__uninitialized__[0])
        unit.__components__.test.__uninitialized__[0].should.deep.equal(component)
      })

      it('Should allow dynamically adding middleware', function () {
        /*
         * Create a middleware, extending the dummy definition
         */
        class Middleware extends DummyMiddleware {
          constructor () {
            super()

            this.__config__ = {
              type: ['test'],
              test: {}
            }
          }

          test () {}
        }

        /*
         * Add a new instance of the middleware
         */
        const middleware = new Middleware()
        unit.add(middleware)
      })
    })
  })
})
