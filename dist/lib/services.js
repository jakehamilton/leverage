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

var Services = function () {
    function Services() {
        _classCallCheck(this, Services);

        this.services = {};
    }

    _createClass(Services, [{
        key: 'load',
        value: function load(service) {
            if (this.services.hasOwnProperty(service.name)) {
                console.log('[Services] Error, already loaded service ' + service);
                return;
            }

            this.services[service.name] = service;
        }
    }, {
        key: 'add',
        value: function add(services) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (typeof services === 'string') {
                    if (/\.js$/.exec(services)) {
                        console.log('[Services] Requiring service ' + services);

                        var service = require(services);

                        resolve(_this.load.call(_this, service.__esModule ? service.default : service));
                    } else {
                        _fs2.default.lstat(services, function (err, stats) {
                            if (err) {
                                console.log('[Services] Error statting directory ' + services);
                                reject();
                            }

                            if (stats.isDirectory()) {
                                console.log('[Services] Reading directory ' + services);
                                _fs2.default.readdir(services, function (err, files) {
                                    if (err) {
                                        console.log('[Services] Error reading directory ' + services);
                                        reject();
                                    }

                                    resolve(Promise.all(files.map(function (file) {
                                        return _this.add.call(_this, _path2.default.join(services, file));
                                    })));
                                });
                            } else {
                                console.log('[Services] Failed loading ' + services + ', not a directory or JavaScript file');
                                resolve();
                            }
                        });
                    }
                } else if (Array.isArray(services)) {
                    resolve(Promise.all(services.map(_this.add.bind(_this))));
                } else {
                    resolve(_this.load.call(_this, services));
                }
            });
        }
    }, {
        key: 'patch',
        value: function patch(router) {
            var _this2 = this;

            console.log('[Services] Patching router...');
            router.routes.forEach(function (route) {
                if (route.dependencies.services) {
                    console.log('[Services] Patching route ' + route.name);

                    route.dependencies.services.forEach(function (service) {
                        if (_this2.services.hasOwnProperty(service)) {
                            Object.defineProperty(route.services, service, {
                                get: function get(_) {
                                    return _this2.services[service];
                                },
                                set: function set(_) {
                                    return null;
                                },
                                configurable: false
                            });
                        } else {
                            console.log('[Services] Could not load service "' + service + '" for route "' + route.name + '"');
                        }
                    });
                } else {
                    console.log('[Services] Skipping route ' + route.name + ', no services required');
                }
            });
        }
    }]);

    return Services;
}();

exports.default = new Services();