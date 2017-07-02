/*
 * Import dependencies
 */
const chai = require('chai')

/*
 * We're using chai's `should` syntax
 */
const should = chai.should()

/*
 * The unit we will be testing
 */
let unit

/*
 * Instance of a Plugin
 */
let instance

/*
 * Start by describing the file we are testing
 */
describe('definitions/plugin', function () {
  /*
   * Testing the `Plugin` class
   */
  describe('Plugin', function () {

    /*
     * Get a clean copy of the unit before each test
     */
    beforeEach(function () {
      /*
       * Require the unit
       */
      unit = require('../../src/definitions/plugin').default
    })

    /*
     * Expect extending the base Plugin definition using
     *  es2015 class syntax to work.
     */
    it('Should extendable', function () {
      /*
       * Create a Plugin definition
       */
      class P extends unit {
        constructor () {
          super()
        }
      }

      /*
       * Create an instance of the custom plugin
       */
      instance = new P()

      /*
       * The instance should exist
       */
      should.exist(instance)

      /*
       * Should be an instance of both P and unit
       */
      instance.should.be.an.instanceof(P)
      instance.should.be.an.instanceof(unit)
    })

    it('Should support setting the plugin type', function () {
      /*
       * Create a Plugin definition
       */
      class P extends unit {
        constructor () {
          super()

          this.config = {
            type: 'route'
          }
        }
      }

      /*
       * Create an instance of the custom plugin
       */
      instance = new P()

      /*
       * The type of the plugin should be what the user
       *  writes.
       */
      instance.__config__.type.should.deep.equal(['route'])
    })
  })
})
