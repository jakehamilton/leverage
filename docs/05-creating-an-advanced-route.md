Creating An Advanced Route
==========================

Here is an example of how you can add dependencies and
support different kinds of requests when defining a route.
As this example is only concerned with writing a route,
you can assume all other work to setup plugins and services
has been done.

##### get_index.js
```js
/*
 * Get the base Route definition from Leverage
 */
import { Route } from 'leverage-js'

/*
 * Extend the base Route definition to create our own
 */
class R extends Route {
  constructor () {
    /*
     * Required
     */
    super()

    /*
     * Create our route's config
     */
    this.config = {
      /*
       * We will react to http requests and socket.io events
       */
      type: ['http', 'socket'],

      /*
       * Specify a dependency on a service
       */
      dependencies: {
        services: ['store']
      }

      /*
       * Configuration for our http listening
       */
      http: {
        /*
         * We will handle get requests to the `/messages` path
         */
        path: '/messages',
        method: 'get'
      },

      /*
       * Configuration for our http listening
       */
      socket: {
        /*
         * We will listen for the `new-message` event
         */
        name: 'new-message'
      }
    }
  }

  /*
   * The callback for our http requests
   */
  http (req, res) {
    /*
     * Let's send back all the messages we have
     */
    response.json({
      /*
       * Send the messages we have in our store
       */
      messages: this.services.store.messages
    })
  }

  /*
   * The callback for socket.io events
   */
  socket (data, socket, io) {
    /*
     * Here, `socket` is the individual client and `io` is
     *  the main socket.io instance.
     */

    /*
     * Let's update our store with the new data we have
     */
    this.services.store.messages.push(data.message)
  }
}

/*
 * Export an instance of our route
 */
export default new R()
```
