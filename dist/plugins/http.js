'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = require('../lib/server');

var _server2 = _interopRequireDefault(_server);

var _plugin = require('../definitions/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P = function (_Plugin) {
  _inherits(P, _Plugin);

  function P() {
    _classCallCheck(this, P);

    var _this = _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this));

    _this.config = {
      type: 'http',
      identifier: 'path'
    };
    return _this;
  }

  _createClass(P, [{
    key: 'http',
    value: function http(route) {
      _server2.default.extend(function (instance) {
        instance.verb(route.__config__.http.method, route.__config__.http.path, route.http);
      });
    }
  }, {
    key: 'middleware',
    value: function middleware(_middleware) {
      if (_middleware.__config__.http.express) {
        _server2.default.extend(function (instance, app) {
          app.use.apply(app, _middleware.__config__.http.express());
        });
      }

      if (_middleware.__config__.http.custom) {
        _server2.default.extend(function (instance, app, http) {
          _middleware.__config__.http.custom(app, http);
        });
      }
    }
  }, {
    key: 'listen',
    value: function listen(port) {
      _server2.default.listen(port);
    }
  }]);

  return P;
}(_plugin2.default);

exports.default = new P();