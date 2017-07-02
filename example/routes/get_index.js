/*
 * Import the base route definition
 */
import Route from '../../src/definitions/route'

/*
 * Create our route
 */
class R extends Route {
  constructor () {
    super()

    this.config = {
      type: 'http',
      http: {
        path: '/',
        method: 'get'
      }
    }
  }

  http (req, res) {
    res.send('hello world')
  }
}

/*
 * Export a new instance of our route
 */
export default new R()
