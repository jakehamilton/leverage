'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Middleware = function () {
  function Middleware() {
    _classCallCheck(this, Middleware);

    this.__config__ = {
      type: ['http']
    };
  }

  _createClass(Middleware, [{
    key: 'config',
    set: function set(config) {
      for (var key in config) {
        if (key === 'type') {
          this.__config__[key] = [].concat(config[key]);
        } else {
            this.__config__[key] = config[key];
          }
      }
    }
  }]);

  return Middleware;
}();

exports.default = Middleware;