'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Middleware = exports.Service = exports.Route = exports.services = exports.router = exports.server = undefined;

var _server = require('./lib/server');

var _server2 = _interopRequireDefault(_server);

var _router = require('./lib/router');

var _router2 = _interopRequireDefault(_router);

var _services = require('./lib/services');

var _services2 = _interopRequireDefault(_services);

var _route = require('./definitions/route');

var _route2 = _interopRequireDefault(_route);

var _service = require('./definitions/service');

var _service2 = _interopRequireDefault(_service);

var _middleware = require('./definitions/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.server = _server2.default;
exports.router = _router2.default;
exports.services = _services2.default;
exports.Route = _route2.default;
exports.Service = _service2.default;
exports.Middleware = _middleware2.default;
exports.default = {
    server: _server2.default,
    router: _router2.default,
    services: _services2.default,
    Route: _route2.default,
    Service: _service2.default,
    Middleware: _middleware2.default
};