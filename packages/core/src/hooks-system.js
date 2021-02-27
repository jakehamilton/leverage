const { makeHooksSystem } = require("concubine");
const deepmerge = require("deepmerge");
const hooks = require("./hooks");

const { HOOKS_DATA } = require("./util/symbols");

const createDefaultData = () => ({
    manager: null,
    config: {
        is: null,
        type: null,
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
    signalHandlers: [],
});

const hooksSystem = makeHooksSystem()(hooks, {
    prepareInstance: (instance) => {
        instance[HOOKS_DATA].currentStateSlot = 0;
        instance[HOOKS_DATA].currentRefSlot = 0;
        instance[HOOKS_DATA].currentEffectSlot = 0;
    },
});

module.exports = { hooksSystem, createDefaultData };
