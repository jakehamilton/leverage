'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
  function Server() {
    _classCallCheck(this, Server);

    this.__app__ = (0, _express2.default)();

    this.__server__ = _http2.default.createServer(this.__app__);

    this.get = this.verb.bind(this, 'get');

    this.put = this.verb.bind(this, 'put');

    this.post = this.verb.bind(this, 'post');

    this.delete = this.verb.bind(this, 'delete');
  }

  _createClass(Server, [{
    key: 'verb',
    value: function verb(method, path, callback) {
      this.__app__[method.toLowerCase()](path, callback);
    }
  }, {
    key: 'listen',
    value: function listen(port) {
      this.__server__.listen(port);
    }
  }, {
    key: 'load',
    value: function load(middleware) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (args.length > 0 || typeof middleware === 'function') {
        this.__app__.use.apply(this.__app__, [middleware].concat(args));
      } else {

        if (middleware.middleware && typeof middleware.middleware === 'function') {
          this.__app__.use.apply(this.__app__, middleware.middleware());
        }

        if (middleware.custom && typeof middleware.custom === 'function') {
          middleware.custom(this.__app__, this.__server__);
        }
      }
    }
  }]);

  return Server;
}();

exports.default = new Server();