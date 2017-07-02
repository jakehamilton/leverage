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
 * Instance of a Middleware
 */
let instance

/*
 * Start by describing the file we are testing
 */
describe('definitions/middleware', function () {
  /*
   * Testing the `Middleware` class
   */
  describe('Middleware', function () {

    /*
     * Get a clean copy of the unit before each test
     */
    beforeEach(function () {
      /*
       * Require the unit
       */
      unit = require('../../src/definitions/middleware').default
    })

    /*
     * Expect extending the base Middleware definition using
     *  es2015 class syntax to work.
     */
    it('Should extendable', function () {
      /*
       * Create a Middleware definition
       */
      class M extends unit {
        constructor () {
          super()
        }
      }

      /*
       * Create an instance of the custom middleware
       */
      instance = new M()

      /*
       * The instance should exist
       */
      should.exist(instance)

      /*
       * Should be an instance of both M and unit
       */
      instance.should.be.an.instanceof(M)
      instance.should.be.an.instanceof(unit)
    })

    it('Should support setting the middleware type', function () {
      /*
       * Create a Middleware definition
       */
      class M extends unit {
        constructor () {
          super()

          this.config = {
            type: 'http'
          }
        }
      }

      /*
       * Create an instance of the custom middleware
       */
      instance = new M()

      /*
       * The type of the middleware should be what the user
       *  writes.
       */
      instance.__config__.type.should.deep.equal(['http'])
    })
  })
})
