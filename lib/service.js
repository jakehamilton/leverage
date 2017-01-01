/**
 * @class Service
 * @description The base service class
 */
class Service {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @member {String} name The name of the service
     */
    this.name = 'Service'

    /**
     * @member {Object} module The module that this service is for
     */
    this.module = {}
  }

  /**
   * @method use
   * @param {...<Any>} args All arguments are applied to the underlying module
   * 
   * @example
   * import passport from 'passport-service'
   * 
   * passport.use(...)
   * 
   * @return {Any} value The return value of the module being used
   */
  use (...args) {
    return this.module.apply(this.module, args)
  }
}

export default Service
