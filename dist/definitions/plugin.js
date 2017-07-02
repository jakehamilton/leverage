'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
  function Plugin() {
    _classCallCheck(this, Plugin);

    this.__config__ = {};
  }

  _createClass(Plugin, [{
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

  return Plugin;
}();

exports.default = Plugin;