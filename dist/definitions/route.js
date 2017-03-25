'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function Route() {
    _classCallCheck(this, Route);

    this.name = 'unnamed-route';
    this.path = '';
    this.method = '';
    this.dependencies = null;
    this.services = {};
};

exports.default = Route;