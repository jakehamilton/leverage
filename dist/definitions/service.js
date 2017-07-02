'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service() {
    _classCallCheck(this, Service);

    this.__config__ = {};
  }

  _createClass(Service, [{
    key: 'config',
    set: function set(config) {
      for (var key in config) {
        if (key === 'name') {
          if (typeof config[key] !== 'string') {
            throw new Error('[Leverage definitions/service] Error updating service configuration, expected a String but got ' + _typeof(config[key]));

            return;
          }

          this.__config__[key] = config[key];
        } else {
            this.__config__[key] = config[key];
          }
      }
    }
  }]);

  return Service;
}();

exports.default = Service;