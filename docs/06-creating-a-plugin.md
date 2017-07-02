Creating A Plugin
=================

A Leverage plugin allows you to write routes for a
server. The plugin can extend Leverage's built-in
HTTP server or include its own. The point of a plugin
is so that you can write generic routes against
entirely different kinds of servers/programs.

Here, we will create a HTTP plugin that lets us write
routes with the type `http`.

##### plugins/http.js
```js
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

    /*
     * Create our plugin's config
     */
    this.config = {
      /*
       * This plugin manages http routes
       */
      type: 'http',

      /*
       * We also specify some kind of key we can
       *  use to refer to a route later on. This
       *  value is used on a route's config. In
       *  this case, the route's identifier would
       *  be located at `route.__config__.http.path`.
       */
      identifier: 'path'
    }
  }

  /*
   * Using the same name as our plugin's type, we
   *  can define a method to load each http route in
   *  our application.
   */
  http (route) {
    /*
     * We'll extend leverage's base server
     */
    server.extend(instance => {
      /*
       * And listen at the configured endpoint
       */
      instance.verb(route.__config__.http.method, route.__config__.http.path, route.http)
    })
  }

  /*
   * To allow middleware to be applied, we just add
   *  a `middleware` method.
   */
  middleware (middleware) {
    /*
     * This middleware is expected to return an array
     *  of arguments..
     */
    if (middleware.__config__.http.express) {
      server.extend((instance, app) => {
        app.use.apply(app, middleware.__config__.http.express())
      })
    }

    /*
     * This middleware is expected to do all the work
     *  itself.
     */
    if (middleware.__config__.http.custom) {
      server.extend((instance, app, http) => {
        middleware.__config__.http.custom(app, http)
      })
    }
  }

  /*
   * Here we create a custom method to enable the
   *  server to listen on a port.
   */
  listen (port) {
    server.listen(port)
  }
}

/*
 * Export a new instance of our plugin
 */
export default new P()
```
