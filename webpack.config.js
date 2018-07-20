// @ts-check

const node = require('./webpack.node.config');
const browser = require('./webpack.browser.config');

module.exports = [
    node,
    browser,
];
