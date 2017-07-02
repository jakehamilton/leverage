/*
 * Import dependencies
 */
const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()

/*
 * We're using chai's `should` syntax
 */
const should = chai.should()

/*
 * The unit we will be testing
 */
let unit

/*
 * Mocks we are using in the test
 */
let http
let express

/*
 * Start by describing the file we are testing
 */
describe('lib/server', function () {
  /*
   * Testing the `server` object
   */
  describe('server', function () {

    /*
     * Get a clean copy of the unit before each test
     */
    beforeEach(function () {
      /*
       * Retrieve new, clean mocks for each test
       */
      http = new (require('../mocks/http').default)()
      express = new (require('../mocks/express').default)()

      /*
       * Require the unit
       */
      unit = proxyquire('../../src/lib/server', {
        'http': http,
        'express': express
      }).default
    })

    /*
     * We should have created a new http server instance
     */
    it('Should create a private instance of a http server', function () {
      /*
       * The http server should be a very private member on our main
       *  server instance.
       */
      should.exist(unit.__http_server__)

      /*
       * The value on our main server instance should be an instance
       *  of a http server.
       */
      unit.__http_server__.should.deep.equal(http.serverInstance)

      /*
       * The server should have called `http.createServer`
       */
      http.createServer.should.have.been.called()

      /*
       * The server should have created a new express app instance
       */
      express.should.have.been.called()

      /*
       * The server should have called `http.createServer` with an
       *  express app instance
       */
      http.createServer.should.have.been.called.with(express.appInstance)
    })

    /*
     * The server should allow a way for us to have it listen on a port
     */
    it('Should allow listening on a port', function () {
      /*
       * A `listen` method should exist
       */
      should.exist(unit.listen)

      /*
       * Should throw an error on bad input
       */
      should.throw(unit.listen.bind(unit.listen, 'a'))
      should.throw(unit.listen.bind(unit.listen, {}))
      should.throw(unit.listen.bind(unit.listen, function () {}))

      /*
       * Should have the http server listen on valid input
       */
      unit.listen(1)

      http.serverInstance.listen.should.have.been.called.with(1)
    })
  })
})
