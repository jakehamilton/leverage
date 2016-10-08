import http from 'http'
import express from 'express'

class Server {
  constructor () {
    this.app = express()
    this.__server__ = http.createServer(this.app)

    // Curried verbs
    this.get = this.verb.bind(this, 'get')
    this.put = this.verb.bind(this, 'put')
    this.post = this.verb.bind(this, 'post')
    this.patch = this.verb.bind(this, 'patch')
    this.delete = this.verb.bind(this, 'delete')
  }

  verb (method, path, callback) {
    this.app[method.toLowerCase()](path, callback)
  }

  listen (port = (process.env.PORT || 3000)) {
    this.__server__.listen(port)
    console.log(`[Leverage Server]: Listening on port ${port}`)
  }

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
