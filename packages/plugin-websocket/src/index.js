const plugin = require("./plugin");
const hooks = require("./hooks");

module.exports = {
    websocket: plugin,
    ...hooks,
};
