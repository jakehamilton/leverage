Creating A Middleware
=====================

A simple middleware definition has three important parts:

1. The class declaration extending the base Middleware
2. The `config` object for your middleware
3. Any callbacks associated with your middleware object

Here is an example of a simple middleware:

##### static-assets.js
```js
/*
 * Get the base Middleware definition from Leverage
 */
import { Middleware } from 'leverage-js'

/*
 * Our example will use express
 */
import express from 'express'

/*
 * Extend the base Route definition to create our own
 */
class M extends Middleware {
  constructor () {
    /*
     * Required
     */
    super()

    /*
     * Create our middleware's config
     */
    this.config = {
      /*
       * We will create an http middleware
       */
      type: 'http',

      /*
       * Configuration for our http middleware
       */
      http: {
        /*
         * Leverage's http server supports two kinds of middleware:
         *
         * 1. Arguments for `express.use`
         * 2. A function that is given the server instance to use
         *
         * Here we will use both, but only one is required
         */

        /*
         * An express middleware
         */
        express: this.expressMiddleware,

        /*
         * A custom middleware function
         */
        custom: this.customMiddleware
      }
    }
  }

  /*
   * Our express middleware
   */
  expressMiddleware () {
    /*
     * This kind of middleware function returns the arguments
     *  for a call to `express.use`.
     *
     * In our example, this looks like:
     *  `express.use('/static', express.static('/some/absolute/path'))`
     */
    return ['/static', express.static('/some/absolute/path')]
  }

  /*
   * Our custom middleware
   */
  customMiddleware (app, server) {
    /*
     * A custom middleware takes in arguments from a server, these
     *  are the express app instance and the server instance. You
     *  can use whatever you need from them. Here we'll manually
     *  apply `express.static`.
     */
    app.use('/static', express.static('/some/absolute/path'))
  }
}

/*
 * Export an instance of our middleware
 */
export default new M()
```
