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
 * A plain route object
 */
let route = {
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
describe('lib/router', function () {
  /*
   * Testing the `router` object
   */
  describe('router', function () {

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
      unit = proxyquire('../../src/lib/router', {
        'klaw': klaw,
        'MOCK_KLAW_PATH.js': route
      }).default
    })

    /*
     * The router manages routes by storing them in
     *  a private `routes` object.
     */
    it('Should initialize with an empty routes map', function () {
      /*
       * The object should exist
       */
      should.exist(unit.__routes__)

      /*
       * The object should start as an empty object
       */
      unit.__routes__.should.deep.equal({})
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
        http (route) {

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

    it('Should load routes once a plugin is available', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          identifier: 'path'
        },
        http (route) {

        }
      }

      /*
       * Create a basic route object to test with
       */
      const route = {
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
       * Spy on the plugin and route callbacks
       */
      plugin.http = chai.spy(plugin.http.bind(plugin))
      route.http = chai.spy(route.http.bind(route))

      /*
       * Load the route
       */
      unit.add(route)

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * The route should now exist in the loaded routes map
       */
      should.exist(unit.__routes__.http['/'])
    })

    it('Should allow adding a route object', function () {
      /*
       * Configure a barebones plugin object so the route is loaded
       */
      unit.__plugins__.http = {
        __config__: {
          type: ['http'],
          identifier: 'path'
        },
        http () {

        }
      }

      /*
       * Add a simple, mock route
       */
      unit.add(route)

      /*
       * Ensure the mock route was added to the map of routes
       */

      /*
       * The route's type should now have a map
       */
      should.exist(unit.__routes__.http)

      /*
       * The route should exist in the map
       */
      should.exist(unit.__routes__.http['/'])
    })

    it('Should allow adding a route directory', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          identifier: 'path'
        },
        http (route) {

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
       * Our mock route should have been loaded in
       */
      unit.__routes__.http[route.__config__.http.path].should.deep.equal(route)
    })

    it('Should allow adding a route file', function () {
      /*
       * Create a basic plugin object to test with
       */
      const plugin = {
        __config__: {
          type: ['http'],
          identifier: 'path'
        },
        http (route) {

        }
      }

      /*
       * Load the plugin
       */
      unit.plugin(plugin)

      /*
       * Load a mock route file
       */
      unit.add('/a/b/c.js')

      /*
       * Our mock route should have been loaded in
       */
      unit.__routes__.http[route.__config__.http.path].should.deep.equal(route)
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

    it('Should patch routes with services', function () {
      /*
       * Create a basic route object to test with
       */
      const route = {
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
          identifier: 'path'
        },
        http (route) {

        }
      }

      /*
       * The following should work in any order
       */

      /*
       * Add the route
       */
      unit.add(route)

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
      should.exist(unit.__routes__.http['/'].services)

      /*
       * Our service should exist
       */
      should.exist(unit.__routes__.http['/'].services.a)

      /*
       * The route's service should be the same service
       *  object we passed in earlier.
       */
      unit.__routes__.http['/'].services.a.should.deep.equal(service)
    })
  })
})
