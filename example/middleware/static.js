/*
 * Import the path module to resolve a path to
 *  another directory
 */
import path from 'path'

/*
 * Import express so we can use its `static` file
 *  routing feature.
 */
import express from 'express'

/*
 * Import the base middleware definition
 */
import Middleware from '../../src/definitions/middleware'

/*
 * Create our middleware
 */
class M extends Middleware {
  constructor () {
    super()

    this.config = {
      type: 'http',
      http: {
        express: this.express.bind(this)
      }
    }
  }

  express () {
    return ['/static', express.static(path.resolve(__dirname, '..', 'public'))]
  }
}

/*
 * Export a new instance of our middleware
 */
export default new M()
