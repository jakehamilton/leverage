const { HOOKS_DATA } = require("../util/symbols");

const useInstallEffect = (instance) => (callback) => {
    if (instance[HOOKS_DATA].initialized) {
        // prettier-ignore
        throw new Error("Cannot use useInstallEffect after a unit has been initialized.");
    }

    instance[HOOKS_DATA].installEffects.push(callback);
};

module.exports = useInstallEffect;
