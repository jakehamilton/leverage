const manager = require("./manager");
const hooks = require("./hooks-system").hooksSystem;
const {
    useConfig,
    useDependencies,
    useEffect,
    useInstallEffect,
    useIs,
    useKeyRef,
    usePlugin,
    useRef,
    useService,
    useSignal,
    useState,
    useType,
    useUnit,
} = hooks.hooks;

module.exports = {
    add: manager.add.bind(manager),
    signal: manager.signal.bind(manager),
    remove: manager.remove.bind(manager),
    reset: manager.reset.bind(manager),
    useConfig,
    useDependencies,
    useEffect,
    useInstallEffect,
    useIs,
    useKeyRef,
    usePlugin,
    useRef,
    useService,
    useSignal,
    useState,
    useType,
    useUnit,
    hooks,
};
