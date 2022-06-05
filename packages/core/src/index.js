const { default: manager, Manager } = require("./manager");
const { hooks } = require("./hooks/hooksSystem");
const { HOOKS_DATA } = require("./util/symbols");

module.exports = {
    Manager,
    add: manager.add.bind(manager),
    remove: manager.remove.bind(manager),
    reset: manager.reset.bind(manager),
    on: manager.on,
    off: manager.off,
    once: manager.once,
    emit: manager.emit,
    emitter: manager.emitter,
    HOOKS_DATA,
    ...hooks,
};
