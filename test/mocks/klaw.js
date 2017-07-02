/*
 * We need chai and chai-spies to watch function calls
 */
const chai = require('chai')
const spies = require('chai-spies')

/*
 * This time we need the path library to resolve a
 *  mock route file.
 */
const path = require('path')

/*
 * Plugin for chai to watch function calls
 */
chai.use(spies)

/*
 * Ceate our mock
 */
const mock = chai.spy(function () {
  /*
   * Return a constant value
   */
  return mock.prototype.__return_value__
})

/*
 * Create a constant return value that we can use
 *  to ensure that things have worked correctly.
 */
mock.prototype.__return_value__ = {
  /*
   * Proxy a stream interface
   */
  on (type, callback) {
    /*
     * For the data event, just return a simple, fake
     *  stats object.
     */
    if (type === 'data') {
      callback(mock.prototype.__mock_stats__)
    }

    /*
     * For the end event, just call the callback right
     *  away.
     */
    else if (type === 'end') {
      callback()
    }

    /*
     * Return another mocked return value
     */
    return mock.prototype.__return_value__
  }
}
/*
 * Create a constant return value that we can use
 *  to ensure that things have worked correctly.
 */
mock.prototype.__mock_stats__ = {
  path: 'MOCK_KLAW_PATH.js'
}

/*
 * Attach spies
 */
mock.prototype.__return_value__.on = chai.spy(mock.prototype.__return_value__.on.bind(mock))

/*
 *
 * Klaw uses a plain function so we'll wrap it to
 *  keep our nice `new Mock` syntax.
 */
export default function () {
  return mock
}
