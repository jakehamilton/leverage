/*
 * We need chai and chai-spies to watch function calls
 */
const chai = require('chai')
const spies = require('chai-spies')

/*
 * Plugin for chai to watch function calls
 */
chai.use(spies)

/*
 * Ceate our mock
 */
export default class Mock {
  constructor () {
    /*
     * A static value for a server instance
     */
    this.serverInstance = {
      listen: chai.spy(function () {})
    }

    /*
     * Apply spies to methods
     */
    this.createServer = chai.spy(this.createServer.bind(this))
  }

  createServer () {
    return this.serverInstance
  }
}
