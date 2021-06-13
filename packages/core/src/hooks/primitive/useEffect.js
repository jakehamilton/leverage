const { HOOKS_DATA } = require("../../util/symbols");

const useEffect = (instance) => (callback, dependencies) => {
    if (!instance[HOOKS_DATA].installed) {
        throw new Error(
            "Cannot use useEffect in a unit before it's installed."
        );
    }

    const slot = instance[HOOKS_DATA].currentEffectSlot;

    instance[HOOKS_DATA].currentEffectSlot++;

    if (instance[HOOKS_DATA].effectSlots.has(slot)) {
        const effect = instance[HOOKS_DATA].effectSlots.get(slot);

        let dependenciesChanged = false;

        if (dependencies === undefined) {
            dependenciesChanged = true;
        } else {
            for (let i = 0; i < dependencies.length; i++) {
                /* istanbul ignore else */
                if (dependencies[i] !== effect.dependencies[i]) {
                    dependenciesChanged = true;
                    break;
                }
            }
        }

        if (dependenciesChanged) {
            if (effect.cleanup !== undefined) {
                effect.cleanup();
            }

            const cleanup = callback();

            instance[HOOKS_DATA].effectSlots.set(slot, {
                cleanup,
                dependencies,
            });
        }
    } else {
        const cleanup = callback();

        instance[HOOKS_DATA].effectSlots.set(slot, {
            cleanup,
            dependencies,
        });
    }
};

module.exports = useEffect;
