/*
 * Import the base component definition
 */
import { Component } from '../../src'

/*
 * Create our component
 */
class C extends Component {
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
 * Export a new instance of our component
 */
export default new C()
