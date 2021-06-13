const { HOOKS_DATA } = require("../../util/symbols");

const useManager = (instance) => () => {
    return instance[HOOKS_DATA].manager;
};

module.exports = useManager;
