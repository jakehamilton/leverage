Creating A Route
================

A simple route definition has three important parts:

1. The class declaration extending the base Route
2. The `config` object for your route
3. The endpoint callback

Here is an example of a simple route:

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
       * We will react to http requests
       */
      type: 'http',

      /*
       * Configuration for our http listening
       */
      http: {
        /*
         * We will listen at the root url for this example
         */
        path: '/',

        /*
         * We will listen for get requests
         */
        method: 'get'
      }
    }
  }

  /*
   * The callback for our http requests
   */
  http (request, response) {
    /*
     * HTTP routes are supported by default and use Express to
     *  manage the server. The `request` and `response` arguments
     *  are directly from Express. We will respond with a "Hello World"
     */
    response.send('Hello World')
  }
}

/*
 * Export an instance of our route
 */
export default new R()
```
