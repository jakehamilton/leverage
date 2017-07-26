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
      unit.add(component)

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
      unit.add(component)

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
      unit.add(component)

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
      unit.add('/a/b/c')

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
      unit.add('/a/b/c.js')

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
      unit.add(component)

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
  })
})
