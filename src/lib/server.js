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
         * @private
         * @member {Object} __app__ The super secret express app instance
         */
        this.__app__ = express()

        /**
         * @private
         * @member {Object} __server__ The super secret http server instance
         */
        this.__server__ = http.createServer(this.__app__)

        // curry common verbs
        /**
         * @method get
         * @description The equivalent of `server.verb('get', ...)`
         */
        this.get = this.verb.bind(this, 'get')

        /**
         * @method put
         * @description The equivalent of `server.verb('put', ...)`
         */
        this.put = this.verb.bind(this, 'put')

        /**
         * @method post
         * @description The equivalent of `server.verb('post', ...)`
         */
        this.post = this.verb.bind(this, 'post')

        /**
         * @method delete
         * @description The equivalent of `server.verb('delete', ...)`
         */
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
        this.__app__[method.toLowerCase()](path, callback)
    }

    /**
     * @method listen
     * @description Set the server to listen on a specific port
     * @param {Number} port The port to listen on
     */
    listen (port) {
        this.__server__.listen(port)
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
        if (args.length > 0 || typeof middleware === 'function') {
            // load an express middleware
            this.__app__.use.apply(this.__app__, [middleware, ...args])
        } else {
            // load a middleware object
            
            if (middleware.middleware && typeof middleware.middleware === 'function') {
                // load express middleware
                this.__app__.use.apply(this.__app__, middleware.middleware())
            }

            if (middleware.custom && typeof middleware.custom === 'function') {
                // load custom middleware
                middleware.custom(this.__app__, this.__server__)
            }
        }
    }
}

// export a server instance
export default new Server()
