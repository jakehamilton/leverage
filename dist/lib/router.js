'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = [];

        this.server = null;

        this.dependencies = {
            services: {}
        };
    }

    _createClass(Router, [{
        key: 'connect',
        value: function connect(server) {
            this.server = server;

            if (this.routes.length > 0) {
                this.routes.forEach(this.addRoute.bind(this));
            }
        }
    }, {
        key: 'load',
        value: function load(route) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (_this.routes.indexOf(route) < 0) {
                    _this.routes.push(route);
                }

                if (_this.server) {
                    console.log('[Router] Loading route ' + route.name + ' at ' + route.path);

                    _this.server.verb(route.method, route.path, route.callback.bind(route));
                }

                if (route.dependencies && route.dependencies.services) {
                    route.dependencies.services.forEach(function (service) {
                        if (_this.dependencies.services.hasOwnProperty(service)) {
                            Object.defineProperty(route.services, service, {
                                get: function get(_) {
                                    return _this.dependencies.services[service];
                                },
                                set: function set(_) {
                                    return null;
                                },
                                writable: false,
                                enumerable: true,
                                configurable: false
                            });
                        }
                    });
                }

                console.log('[Router] Added route: ' + route.name);

                resolve();
            });
        }
    }, {
        key: 'add',
        value: function add(routes) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (typeof routes === 'string') {
                    if (/\.js$/.exec(routes)) {
                        console.log('[Router] Requiring route ' + routes);

                        var route = require(routes);

                        resolve(_this2.load.call(_this2, route.__esModule ? route.default : route));
                    } else {
                        _fs2.default.lstat(routes, function (err, stats) {
                            if (err) {
                                console.log('[Router] Error statting directory ' + routes, err);
                                reject();
                            }

                            if (stats.isDirectory()) {
                                _fs2.default.readdir(routes, function (err, files) {
                                    if (err) {
                                        console.log('[Router] Error reading directory ' + routes + ': ', err);
                                        reject();
                                    }

                                    resolve(Promise.all(files.map(function (file) {
                                        return _this2.add.call(_this2, _path2.default.join(routes, file));
                                    })));
                                });
                            } else {
                                console.log('[Router] Failed loading ' + routes + ', not a directory or JavaScript file');
                                resolve();
                            }
                        });
                    }
                } else if (Array.isArray(routes)) {
                    resolve(Promise.all(routes.map(_this2.add.bind(_this2))));
                } else {
                    resolve(_this2.load.call(_this2, routes));
                }
            });
        }
    }]);

    return Router;
}();

exports.default = new Router();