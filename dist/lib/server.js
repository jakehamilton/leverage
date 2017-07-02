'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

    this.__http_server__ = _http2.default.createServer(this.__app__);
  }

  _createClass(Server, [{
    key: 'verb',
    value: function verb(method, path, callback) {
      if (this.__app__[method]) {
        this.__app__[method.toLowerCase()](path, callback);
      }
    }
  }, {
    key: 'listen',
    value: function listen(port) {
      var _this = this;

      if (typeof port !== 'number') {
        throw new Error('[Leverage/lib/server] Error setting port, expected a number but got ' + (typeof port === 'undefined' ? 'undefined' : _typeof(port)));

        return;
      }

      this.__http_server__.listen(port);

      process.on('exit', function () {
        if (_this.__http_server__.close) {
          _this.__http_server__.close();
        }
      });

      process.on('SIGINT', function () {
        if (_this.__http_server__.close) {
          _this.__http_server__.close();
        }
      });
    }
  }, {
    key: 'extend',
    value: function extend(plugin) {
      if (typeof plugin === 'function') {
        plugin(this, this.__app__, this.__http_server__);
      } else if ((typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)) === 'object') {
          if (plugin.extend && typeof plugin.extend === 'function') {
            plugin.extend(this, this.__app__, this.__http_server__);
          } else {
              throw new Error('[Leverage/lib/server] Error extending server, was given an object but it has no method "extend"');

              return;
            }
        } else {
            throw new Error('[Leverage/lib/server] Error extending server, expected a function or object bug got ' + (typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)));

            return;
          }
    }
  }]);

  return Server;
}();

exports.default = new Server();