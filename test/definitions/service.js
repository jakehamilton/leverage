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
 * Instance of a Service
 */
let instance

/*
 * Start by describing the file we are testing
 */
describe('definitions/service', function () {
  /*
   * Testing the `Service` class
   */
  describe('Service', function () {

    /*
     * Get a clean copy of the unit before each test
     */
    beforeEach(function () {
      /*
       * Require the unit
       */
      unit = require('../../src/definitions/service').default
    })

    /*
     * Expect extending the base Service definition using
     *  es2015 class syntax to work.
     */
    it('Should extendable', function () {
      /*
       * Create a Service definition
       */
      class S extends unit {
        constructor () {
          super()
        }
      }

      /*
       * Create an instance of the custom service
       */
      instance = new S()

      /*
       * The instance should exist
       */
      should.exist(instance)

      /*
       * Should be an instance of both S and unit
       */
      instance.should.be.an.instanceof(S)
      instance.should.be.an.instanceof(unit)
    })
  })
})
