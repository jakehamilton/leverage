/*
 * @TODO: Create documentation for ExpressInstance and HTTPServerInstance
 */

/*
 * Import dependencies
 */
import http from 'http'
import express from 'express'

/**
 * @class Server
 * @description The Leverage server
 */
class Server {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @private {ExpressInstance} __app__ Our express app instance
     */
    this.__app__ = express()

    /**
     * @private {HTTPServerInstance} __http_server__ Our http server instance
     */
    this.__http_server__ = http.createServer(this.__app__)
  }

  /**
   * @method verb
   * @description Add a handler to the server on http request
   *
   * @param {String} method The http method to use
   * @param {String} path The path to add a handler to
   * @param {Function} callback The callback for the handler
   *
   * @void
   */
  verb (method, path, callback) {
    if (this.__app__[method]) {
      this.__app__[method.toLowerCase()](path, callback)
    }
  }

  /**
   * @method listen
   * @description Have the server listen on a port
   *
   * @param {Number} port The port to listen on
   *
   * @void
   */
  listen (port) {
    /*
     * Ensure the port is a number
     */
    if (typeof port !== 'number') {
      /*
       * Throw an error so our user knows
       */
      throw new Error(`[Leverage/lib/server] Error setting port, expected a number but got ${typeof port}`)

      /*
       * Get out of here before things really break
       */
      return
    }

    /*
     * If we've gotten here, everything must be okay so we
     *  can have the server listen on the given port.
     */
    this.__http_server__.listen(port)

    /*
     * Add a handler to stop the server when our process
     *  is closed.
     */
    process.on('exit', () => {
      if (this.__http_server__.close) {
        this.__http_server__.close()
      }
    })

    process.on('SIGINT', () => {
      if (this.__http_server__.close) {
        this.__http_server__.close()
      }
    })
  }

  /**
   * @method extend
   * @description Extend the server with a plugin
   *
   * @param {Function|Object} plugin The plugin function or object to use
   * @param {Function} plugin.extend The extend method if you used a plugin object
   *
   * @void
   */
  extend (plugin) {
    /*
     * If we were given a function, call that function with the
     *  express app and http server instances.
     */
    if (typeof plugin === 'function') {
      plugin(this, this.__app__, this.__http_server__)
    }

    /*
     * If we were given an object, call its `extend method`
     */
    else if (typeof plugin === 'object') {
      /*
       * Check that the object has an `extend` method
       */
      if (plugin.extend && typeof plugin.extend === 'function') {
        /*
         * Call the extend method with the express app and http
         *  server instances.
         */
        plugin.extend(this, this.__app__, this.__http_server__)
      }

      /*
       * If it doesn't, then we can't use it
       */
      else {
        /*
         * Throw an error so the user knows
         */
        throw new Error(`[Leverage/lib/server] Error extending server, was given an object but it has no method "extend"`)

        /*
         * Get out of here before things really break
         */
        return
      }
    }

    /*
     * Otherwise, we're not sure what we have
     */
    else {
      /*
       * Throw an error to let our user know
       */
      throw new Error(`[Leverage/lib/server] Error extending server, expected a function or object bug got ${typeof plugin}`)

      /*
       * Get out of here before things really break
       */
      return
    }
  }
}

/*
 * Export a new instance of the server
 */
export default new Server()
