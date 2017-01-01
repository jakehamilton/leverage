/**
 * @class Route
 * @description The base route class for constructing routes
 */
class Route {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @member {String} name The name of the route
     */
    this.name = 'Route'

    /**
     * @member {String} path The path of the route
     */
    this.path = '/' // Default to root

    /**
     * @member {String} method The HTTP method to use
     */
    this.method = 'get' // Default to most common

    /**
     * @member {Array<String>} dependencies An array of dependencies for the route
     */
    this.dependencies = []
  }

  /**
   * @method load
   * @description Loads a dependency if it isn't already
   * @param {Object} dependency The dependency to load
   * @param {String} name The name of the dependency
   * 
   * @void
   * 
   * @TODO: Reconfigure dependency loading to use a map of dependencies
   */
  load (dependency) {
    if (!this.hasOwnProperty(dependency.name)) {
      console.log(`[Leverage Route] Route ${this.name} loading ${dependency.name} service`)
      this[dependency.name] = dependency
    } else {
      console.log(`[Leverage Route] Conflict! Route ${this.name} already loaded ${dependency.name}!`)
    }
  }

  /**
   * @method callback
   * @description The server callback for the request
   * @param {Object} request The request object from Express/HTTP server
   * @param {Object} response The response object provided by Express/HTTP server
   * 
   * @void
   */
  callback () {
    console.log(`[Leverage Route] Callback for "${this.name}" called`)
  }
}

export default Route
