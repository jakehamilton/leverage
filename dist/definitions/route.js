'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function () {
  function Route() {
    _classCallCheck(this, Route);

    this.__config__ = {
      type: ['http']
    };
  }

  _createClass(Route, [{
    key: 'config',
    set: function set(config) {
      for (var key in config) {
        if (key === 'type') {
          this.__config__[key] = [].concat(config[key]);
        } else if (key === 'dependencies') {
            for (var type in config[key]) {
              if (!Array.isArray(config[key][type])) {
                throw new Error('[Leverage/definitions/route] Error updating route configuration, expected an Array but got ' + _typeof(config[key][type]));

                return;
              }

              if (!this.__config__[key]) {
                this.__config__[key] = {};
              }

              this.__config__[key][type] = config[key][type];
            }
          } else {
              this.__config__[key] = config[key];
            }
      }
    }
  }]);

  return Route;
}();

exports.default = Route;