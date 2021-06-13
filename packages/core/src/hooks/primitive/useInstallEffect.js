const { HOOKS_DATA } = require("../../util/symbols");

const useInstallEffect = (instance) => (effect) => {
    if (instance[HOOKS_DATA].initialized) {
        // Already initialized units run effects immediately
        const cleanup = effect();

        if (typeof cleanup === "function") {
            instance[HOOKS_DATA].installEffectCleanups.push(cleanup);
        }
    }

    instance[HOOKS_DATA].installEffects.push(effect);
};

module.exports = useInstallEffect;
