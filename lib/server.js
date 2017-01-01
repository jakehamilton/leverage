import http from 'http'
import express from 'express'

/**
 * @class Server
 * @description The HTTP server driver based on Express
 */
class Server {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @member {Object} app An Express app instance
     */
    this.app = express()

    /**
     * @private
     * @member {Object} __server__ The super secret HTTP server instance
     */
    this.__server__ = http.createServer(this.app)

    // Curried verbs
    this.get = this.verb.bind(this, 'get')
    this.put = this.verb.bind(this, 'put')
    this.post = this.verb.bind(this, 'post')
    this.patch = this.verb.bind(this, 'patch')
    this.delete = this.verb.bind(this, 'delete')
  }

  /**
   * @method verb
   * @description Listen for an HTTP request on a path and run a callback when it happens
   * @param {String} method The HTTP method to use
   * @param {String} path The path to use
   * @param {Function} callback A callback function ready to accept the request
   * 
   * @example
   * // The callback function takes two args, request and response
   * verb('get', '/users', (request, response) => {
   *  response.json({ users: [ { name: 'John' } ] })
   * })
   * 
   * @void
   */
  verb (method, path, callback) {
    this.app[method.toLowerCase()](path, callback)
  }

  /**
   * @method listen
   * @description Set the server to listen on a specific port
   * @param [Number=process.env.PORT|3000] port The port to use
   */
  listen (port = (process.env.PORT || 3000)) {
    this.__server__.listen(port)
    console.log(`[Leverage Server]: Listening on port ${port}`)
  }

  /**
   * @method load
   * @description Load a custom or Express middleware
   * @param {Object} middleware The middleware to load
   * @param [...<Any>] args All other arguments are passed to the Express middleware function
   * 
   * @example
   * // Using Express middleware
   * import parser from 'body-parser'
   * 
   * server.load(parser.json())
   * 
   * @example
   * // Using custom middleware
   * import middleware from 'my-middleware'
   * 
   * server.load(middleware)
   * 
   * @void
   */
  load (middleware, ...args) {
    if (args.length > 0
      || typeof middleware === 'function') {
      // If you're trying to use the express api
      console.log('[Leverage Server] Loading express middleware')
      this.app.use.apply(this.app, [middleware, ...args])
    } else {
      // Otherwise, it's assumed you're using a middleware object
      if (middleware.middleware
        && typeof middleware.middleware === 'function') {
        console.log(`[Leverage Server] Loading ${middleware.name} express middleware`)
        this.app.use.apply(this.app, middleware.middleware())
        console.log(`[Leverage Server] Finished loading ${middleware.name} express middleware`)
      }
      if (middleware.custom
        && typeof middleware.custom === 'function') {
        console.log(`[Leverage Server] Loading ${middleware.name} custom middleware`)
        middleware.custom(this.app, this.__server__)
        console.log(`[Leverage Server] Finished loading ${middleware.name} custom middleware`)
      }
    }
  }
}

export default new Server()
