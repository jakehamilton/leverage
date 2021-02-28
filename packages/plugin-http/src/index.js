const plugin = require("./plugin");
const hooks = require("./hooks");

module.exports = {
    http: plugin,
    ...hooks,
};
