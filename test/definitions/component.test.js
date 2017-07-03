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
 * Instance of a Component
 */
let instance

/*
 * Start by describing the file we are testing
 */
describe('definitions/component', function () {
  /*
   * Testing the `Component` class
   */
  describe('Component', function () {

    /*
     * Get a clean copy of the unit before each test
     */
    beforeEach(function () {
      /*
       * Require the unit
       */
      unit = require('../../src/definitions/component').default
    })

    /*
     * Expect extending the base Route definition using
     *  es2015 class syntax to work.
     */
    it('Should extendable', function () {
      /*
       * Create a Component definition
       */
      class C extends unit {
        constructor () {
          super()
        }
      }

      /*
       * Create an instance of the custom component
       */
      instance = new C()

      /*
       * The instance should exist
       */
      should.exist(instance)

      /*
       * Should be an instance of both C and unit
       */
      instance.should.be.an.instanceof(C)
      instance.should.be.an.instanceof(unit)
    })

    /*
     * The base component definition should provide a basic
     *  configuration out of the box.
     */
    it('Should come with a default config', function () {
      /*
       * Create a Component definition
       */
      class C extends unit {
        constructor () {
          super()
        }
      }

      /*
       * Create an instance of the custom route
       */
      instance = new C()

      /*
       * A default config should exist
       */
      should.exist(instance.__config__)

      /*
       * Should default to a HTTP component type
       */
      instance.__config__.type.should.deep.equal(['http'])
    })

    it('Should allow setting component type as a string', function () {
      /*
       * Create a Component definition
       */
      class C extends unit {
        constructor () {
          super()

          this.config = {
            type: 'http'
          }
        }
      }

      /*
       * Create an instance of the custom component
       */
      instance = new C()

      /*
       * Make sure the config is updated to match the
       *  following route type array.
       */
      instance.__config__.type.should.deep.equal(['http'])
    })

    it('Should allow setting component type as an array of strings', function () {
      /*
       * Create a Route definition
       */
      class C extends unit {
        constructor () {
          super()

          this.config = {
            type: ['http', 'socket']
          }
        }
      }

      /*
       * Create an instance of the custom component
       */
      instance = new C()

      /*
       * Make sure the config is updated to match the
       *  following component type array.
       */
      instance.__config__.type.should.deep.equal(['http', 'socket'])
    })

    it('Should allow setting dependencies', function () {
      /*
       * Create a Component definition
       */
      class C extends unit {
        constructor () {
          super()

          this.config = {
            dependencies: {
              services: ['a']
            }
          }
        }
      }

      /*
       * Create an instance of the custom component
       */
      instance = new C()

      /*
       * The dependency map should be copied over to
       *  the internal config object.
       */
      should.exist(instance.__config__.dependencies)

      /*
       * Dependencies should be the same as what the
       *  user wrote.
       */
      instance.__config__.dependencies.should.deep.equal({
        services: ['a']
      })
    })
  })
})
