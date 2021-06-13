const { HOOKS_DATA } = require("../../util/symbols");

const useEmitter = (instance) => () => {
    return instance[HOOKS_DATA].manager.emitter;
};

module.exports = useEmitter;
