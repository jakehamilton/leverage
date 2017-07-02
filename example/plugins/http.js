/*
 * Import Leverage's bundled server
 */
import { server } from '../../src'

/*
 * Import the base plugin definition
 */
import Plugin from '../../src/definitions/plugin'

/*
 * Create our plugin
 */
class P extends Plugin {
  constructor () {
    super()

    this.config = {
      type: 'http',
      identifier: 'path'
    }
  }

  http (route) {
    server.extend(instance => {
      instance.verb(route.__config__.http.method, route.__config__.http.path, route.http)
    })
  }

  middleware (middleware) {
    if (middleware.__config__.http.express) {
      server.extend((instance, app) => {
        app.use.apply(app, middleware.__config__.http.express())
      })
    }

    if (middleware.__config__.http.custom) {
      server.extend((instance, app, http) => {
        middleware.__config__.http.custom(app, http)
      })
    }
  }

  listen (port) {
    server.listen(port)
  }
}

/*
 * Export a new instance of our plugin
 */
export default new P()
