const { makeHooksSystem } = require("concubine");

const primitiveHooks = require("./primitive");
const nonPrimitiveHooks = require("./non-primitive");
const { HOOKS_DATA } = require("../util/symbols");

const createDefaultData = () => ({
    manager: null,
    config: {
        is: "",
        type: "",
        dependencies: {
            plugins: [],
            services: [],
        },
    },
    installed: false,
    initialized: false,
    removing: false,
    stateSlots: new Map(),
    currentStateSlot: 0,
    refSlots: new Map(),
    currentRefSlot: 0,
    keyRefs: new Map(),
    effectSlots: new Map(),
    currentEffectSlot: 0,
    installEffects: [],
    installEffectCleanups: [],
});

const hooksSystem = makeHooksSystem()(primitiveHooks, {
    prepareInstance: (instance) => {
        instance[HOOKS_DATA].currentStateSlot = 0;
        instance[HOOKS_DATA].currentRefSlot = 0;
        instance[HOOKS_DATA].currentEffectSlot = 0;
    },
});

const withHooks = (callback) => {
    const unit = hooks.useUnit();

    return (...args) => {
        hooksSystem.withInstance(unit, () => {
            callback(...args);
        });
    };
};

const { hooks } = hooksSystem;

const hookThunkConfig = {
    ...hooks,
    withHooks,
};

for (const [name, hookThunk] of Object.entries(nonPrimitiveHooks)) {
    hooks[name] = hookThunk(hookThunkConfig);
}

module.exports = { hooksSystem, createDefaultData, withHooks, hooks };
