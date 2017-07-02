'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _klaw = require('klaw');

var _klaw2 = _interopRequireDefault(_klaw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);

    this.__routes__ = {};
    this.__plugins__ = {};
    this.__services__ = {};
    this.__middleware__ = {};
  }

  _createClass(Router, [{
    key: 'add',
    value: function add(route) {
      var _this = this;

      if (typeof route === 'string') {
        var files = [];

        (0, _klaw2.default)(route).on('data', function (file) {
          files.push(file);
        }).on('end', function () {
          files.filter(function (file) {
            var basename = _path2.default.basename(file.path);

            return (/\.js$/.exec(basename)
            );
          }).forEach(function (file) {
            var route = require(file.path);

            _this.add(route);
          });
        });
      } else if ((typeof route === 'undefined' ? 'undefined' : _typeof(route)) === 'object') {
          if (!route.__config__ && route.default) {
            route = route.default;
          }

          if (!route.__config__) {
            throw new Error('[Leverage/lib/router] Error adding route, expected route object to have an "__config__" property');

            return;
          }

          if (route.__config__ && !route.__config__.type) {
            throw new Error('[Leverage/lib/router] Error adding route, expected route object to a type');

            return;
          }

          if (route.__config__ && route.__config__.type && route.__config__.type.length === 0) {
            throw new Error('[Leverage/lib/router] Error adding route, expected route object to a type');

            return;
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = route.__config__.type[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var type = _step.value;

              if (!this.__plugins__[type]) {
                if (!this.__routes__[type]) {
                  this.__routes__[type] = {};
                }

                if (!this.__routes__[type].__unitialized__) {
                  this.__routes__[type].__unitialized__ = [];
                }

                this.__routes__[type].__unitialized__.push(route);
              } else {
                  var plugin = this.__plugins__[type];

                  var identifier = plugin.__config__.identifier;

                  if (this.__routes__[type] && this.__routes__[type][identifier]) {
                    throw new Error('[Leverage/lib/router] Error adding route, route already exists: ' + type + '@' + identifier);

                    return;
                  }

                  if (!this.__routes__[type]) {
                    this.__routes__[type] = {};
                  }

                  this.__routes__[type][route.__config__[type][identifier]] = route;

                  plugin[type](route);
                }

              if (route.__config__.dependencies && route.__config__.dependencies.services) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = route.__config__.dependencies.services[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var service = _step2.value;

                    if (this.__services__[service]) {
                      if (!route.services) {
                        route.services = {};
                      }

                      route.services[service] = this.__services__[service];
                    } else {
                        if (!this.__routes__.__waiting__) {
                          this.__routes__.__waiting__ = {};
                        }

                        if (!this.__routes__.__waiting__[service]) {
                          this.__routes__.__waiting__[service] = [];
                        }

                        this.__routes__.__waiting__[service].push(route);
                      }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
    }
  }, {
    key: 'plugin',
    value: function plugin(_plugin) {
      var _this2 = this;

      if (typeof _plugin === 'string') {
        var files = [];

        (0, _klaw2.default)(_plugin).on('data', function (file) {
          files.push(file);
        }).on('end', function () {
          files.filter(function (file) {
            var basename = _path2.default.basename(file.path);

            return (/\.js$/.exec(basename)
            );
          }).forEach(function (file) {
            var plugin = require(file.path);

            _this2.plugin(plugin);
          });
        });
      } else if ((typeof _plugin === 'undefined' ? 'undefined' : _typeof(_plugin)) === 'object') {
          if (!_plugin.__config__ && _plugin.default) {
            _plugin = _plugin.default;
          }

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _plugin.__config__.type[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var type = _step3.value;

              if (this.__plugins__[type]) {
                console.log(this.__plugins__);

                throw new Error('[Leverage/lib/router] Error loading plugin, a plugin is already defined for type ' + type);

                return;
              }

              this.__plugins__[type] = _plugin;

              if (this.__routes__[type] && this.__routes__[type].__unitialized__ && this.__routes__[type].__unitialized__.length > 0) {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = this.__routes__[type].__unitialized__[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _route = _step4.value;

                    this.__routes__[type][_route.__config__[type][_plugin.__config__.identifier]] = _route;

                    this.__plugins__[type][type](_route);
                  }
                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                      _iterator4.return();
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }

                this.__routes__[type].__unitialized__.length = 0;
              }

              if (this.__middleware__.__waiting__ && this.__middleware__.__waiting__[type] && this.__middleware__.__waiting__[type].length > 0) {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = this.__middleware__.__waiting__[type][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var middleware = _step5.value;

                    if (_plugin.middleware) {
                      _plugin.middleware(middleware);
                    }
                  }
                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                      _iterator5.return();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        } else {
            throw new Error('[Leverage/lib/router] Error loading plugin, expected string or object but got ' + (typeof _plugin === 'undefined' ? 'undefined' : _typeof(_plugin)));
          }
    }
  }, {
    key: 'service',
    value: function service(_service) {
      var _this3 = this;

      if (typeof _service === 'string') {
        var files = [];

        (0, _klaw2.default)(_service).on('data', function (file) {
          files.push(file);
        }).on('end', function () {
          files.filter(function (file) {
            var basename = _path2.default.basename(file.path);

            return (/\.js$/.exec(basename)
            );
          }).forEach(function (file) {
            var service = require(file.path);

            _this3.service(service);
          });
        });
      } else if ((typeof _service === 'undefined' ? 'undefined' : _typeof(_service)) === 'object') {
          if (!_service.__config__ && route.default) {
            _service = route.default;
          }

          if (this.__services__[_service.__config__.name]) {
            throw new Error('[Leverage/lib/router] Error adding service, service ' + _service.name + ' already exists');

            return;
          }

          this.__services__[_service.__config__.name] = _service;

          if (!this.__routes__.__waiting__) {
            this.__routes__.__waiting__ = {};
          }

          if (this.__routes__.__waiting__[_service.__config__.name]) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = this.__routes__.__waiting__[_service.__config__.name][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var _route2 = _step6.value;

                if (!_route2.services) {
                  _route2.services = {};
                }

                _route2.services[_service.__config__.name] = _service;
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }

            delete this.__routes__.__waiting__[_service.__config__.name];
          }
        } else {
            throw new Error('[Leverage/lib/router] Error loading service, expected a string or object but got ' + (typeof _service === 'undefined' ? 'undefined' : _typeof(_service)));

            return;
          }
    }
  }, {
    key: 'middleware',
    value: function middleware(_middleware) {
      var _this4 = this;

      if (typeof _middleware === 'string') {
        var files = [];

        (0, _klaw2.default)(_middleware).on('data', function (file) {
          files.push(file);
        }).on('end', function () {
          files.filter(function (file) {
            var basename = _path2.default.basename(file.path);

            return (/\.js$/.exec(basename)
            );
          }).forEach(function (file) {
            var middleware = require(file.path);

            _this4.middleware(middleware);
          });
        });
      } else if ((typeof _middleware === 'undefined' ? 'undefined' : _typeof(_middleware)) === 'object') {
          if (!_middleware.__config__ && _middleware.default) {
            _middleware = _middleware.default;
          }

          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = _middleware.__config__.type[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var type = _step7.value;

              if (this.__plugins__[type]) {
                if (this.__plugins__[type].middleware) {
                  this.__plugins__[type].middleware(_middleware);
                }
              } else {
                  if (!this.__middleware__.__waiting__) {
                    this.__middleware__.__waiting__ = {};
                  }

                  if (!this.__middleware__.__waiting__[type]) {
                    this.__middleware__.__waiting__[type] = [];
                  }

                  this.__middleware__.__waiting__[type].push(_middleware);
                }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        } else {
            throw new Error('[Leverage/lib/router] Error loading middleware, expected string or object but got ' + (typeof _middleware === 'undefined' ? 'undefined' : _typeof(_middleware)));

            return;
          }
    }
  }]);

  return Router;
}();

exports.default = new Router();