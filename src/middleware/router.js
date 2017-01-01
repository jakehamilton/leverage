import fs from 'fs'
import path from 'path'

/**
 * @class Router
 * @description Handles routing of the application
 * @TODO: Migrate this to an internal module
 */
class Router {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @member {Array} routes All of the routes in the application
     */
    this.routes = []

    /**
     * @member {Object} server The server instance this router is connected to
     */
    this.server = null

    /**
     * @member {Object} dependencies Dependencies for the routes
     */
    this.dependencies = {}
  }

  /**
   * @method connect
   * @description Connects this router instance to a server instance
   * @param {Object} server The server to connect to
   * 
   * @void
   */
  connect (server) {
    this.server = server

    // If we were given routes before we connected to a server, set them
    if (this.routes.length > 0) {
      this.routes.forEach(route => this.addRoute(route))
    }
  }

  /**
   * @method addRoute
   * @description Add/load a route
   * @param {String|Object} route The route to add/load
   * 
   * @example
   * import router from 'Router'
   * 
   * router.addRoute('routes/index')
   * 
   * @void
   */
  addRoute (route) {
    if (typeof route === 'string') {
      // Path to a route file
      route = require(route)
    }

    // Use the route object
    if (this.routes.indexOf(route) < 0) {
      this.routes.push(route)
    }

    if (this.server) {
      console.log(`[Leverage Router] Adding ${route.name} to server at ${route.path}`)
      this.server.verb(route.method, route.path, ::route.callback)
    }

    route.dependencies.forEach(dependency => {
      if (this.dependencies.hasOwnProperty(dependency)) {
        route.load(dependency)
      }
    })

    console.log(`[Leverage Router] Added route: ${route.name}`)
  }

  /**
   * @method addRoutes
   * @description Adds/loads multiple routes or a whole directory of routes
   * @param {String|Array} routes The routes or directory of routes to load
   * 
   * @promise
   * @resolve {null} _ No value is returned
   * @reject {null} _ No value is returned
   * 
   * @TODO: Allow for nested directories
   */
  addRoutes (routes) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(routes)) {
        // Array of route objects
        routes.forEach(route => this.addRoute(route))

        resolve()
      } else if (typeof routes === 'string') {
        fs.readdir(routes, (err, files) => {
          if (err) {
            console.error('[Leverage Router] Error reading directory')
            reject()
          }

          files.forEach(file => {
            this.addRoute(path.join(routes, file))
          })

          resolve()
        })
      }
    })
  }
}

export default new Router()
