const manager = require("./manager");
const hooks = require("./hooks-system").hooksSystem.hooks;

module.exports = {
    add: manager.add.bind(manager),
    signal: manager.signal.bind(manager),
    remove: manager.remove.bind(manager),
    reset: manager.reset.bind(manager),
    ...hooks,
};
