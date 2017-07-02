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
 *
 * Express uses the old prototype enhancement, so
 *  we have to extend a function here instead of
 *  a class.
 */
function mock () {
  this.appInstance = {}
}

/*
 * Apply spies to functions
 */
mock = chai.spy(mock)

/*
 * Retain the `new mock` interface by wrapping
 *  in a function.
 */
export default function () {
  return mock
}
