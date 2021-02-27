const { HOOKS_DATA } = require("../util/symbols");

const useSignal = (instance) => (callback) => {
    instance[HOOKS_DATA].signalHandlers.push(callback);
};

module.exports = useSignal;
