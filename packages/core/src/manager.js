const { hooksSystem, createDefaultData } = require("./hooks-system");
const { HOOKS_DATA } = require("./util/symbols");

class Manager {
    services = {
        installed: new Map(),
        waiting: new Map(),
    };

    plugins = {
        installed: new Map(),
        waiting: new Map(),
    };

    components = {
        installed: new Map(),
        waiting: new Map(),
    };

    getService(type) {
        if (this.services.installed.has(type)) {
            return this.services.installed.get(type);
        } else if (this.services.waiting.has(type)) {
            return this.services.waiting.get(type);
        } else {
            throw new Error(`Could not get service for type "${type}".`);
        }
    }

    getPlugin(type) {
        if (this.plugins.installed.has(type)) {
            return this.plugins.installed.get(type);
        } else if (this.plugins.waiting.has(type)) {
            return this.plugins.waiting.get(type);
        } else {
            throw new Error(`Could not get plugin for type "${type}".`);
        }
    }

    init(unit) {
        unit[HOOKS_DATA] = createDefaultData();
        unit[HOOKS_DATA].manager = this;

        hooksSystem.withInstance(unit, () => {
            unit.init();
        });

        unit[HOOKS_DATA].initialized = true;

        this.validate(unit);
    }

    validate(unit) {
        const config = unit[HOOKS_DATA].config;

        if (config.is === null) {
            throw new Error(
                `Expected config.is to be a string but got "${is}".`
            );
        }

        if (config.type === null) {
            throw new Error(
                `Expected config.type to be a string but got "${type}".`
            );
        }

        if (
            config.is !== "service" &&
            config.is !== "plugin" &&
            config.is !== "component"
        ) {
            throw new Error(
                `Expected config.is to be "service", "plugin", or "component", but got "${config.is}".`
            );
        }
    }

    add(...units) {
        for (const unit of units) {
            if (typeof unit.init !== "function") {
                throw new Error(
                    `Expected unit.init to be a function but got "${typeof unit.init}".`
                );
            }

            this.init(unit);

            const { is, type, dependencies } = unit[HOOKS_DATA].config;

            if (is === "component" && !dependencies.plugins.includes(type)) {
                dependencies.plugins.push(type);
            }

            for (const key in unit) {
                if (key !== "__hooks__" && typeof unit[key] === "function") {
                    const callback = unit[key];
                    unit[key] = (...args) => {
                        const result = hooksSystem.withInstance(unit, () => {
                            const result = callback(...args);
                            return result;
                        });

                        return result;
                    };
                }
            }

            switch (is) {
                case "service":
                    if (
                        this.services.waiting.has(type) ||
                        this.services.installed.has(type)
                    ) {
                        throw new Error(
                            `A service already exists for type "${type}".`
                        );
                    } else {
                        this.services.waiting.set(type, unit);
                    }
                    break;
                case "plugin":
                    if (
                        this.plugins.waiting.has(type) ||
                        this.plugins.installed.has(type)
                    ) {
                        throw new Error(
                            `A plugin already exists for type "${type}".`
                        );
                    } else {
                        this.plugins.waiting.set(type, unit);
                    }
                    break;
                case "component": {
                    if (!this.components.waiting.get(type)) {
                        this.components.waiting.set(type, new Set());
                    }

                    if (!this.components.installed.get(type)) {
                        this.components.installed.set(type, new Set());
                    }

                    const waiting = this.components.waiting.get(type);
                    const installed = this.components.installed.get(type);

                    if (waiting.has(unit) || installed.has(unit)) {
                        throw new Error(
                            `A component already exists for type "${type}".`
                        );
                    } else {
                        waiting.add(unit);
                    }
                    break;
                }
                default:
                    // prettier-ignore
                    throw new Error(`Expected config.is to be either "service", "plugin", or "component", but got "${type}".`);
            }
        }

        for (const unit of this.plugins.waiting.values()) {
            this.install(unit);
        }

        for (const unit of this.services.waiting.values()) {
            this.install(unit);
        }

        for (const set of this.components.waiting.values()) {
            for (const unit of set) {
                this.install(unit);
            }
        }

        return this;
    }

    isInstallable(unit, known = new Set()) {
        const config = unit[HOOKS_DATA].config;

        if (known.has(unit)) {
            return true;
        } else {
            known.add(unit);
        }

        for (const type of config.dependencies.plugins) {
            const isInstalled = this.plugins.installed.has(type);
            const isWaiting = this.plugins.waiting.has(type);

            if (isWaiting) {
                if (
                    !this.isInstallable(this.plugins.waiting.get(type), known)
                ) {
                    return false;
                }
            } else if (!isInstalled) {
                return false;
            }
        }

        for (const type of config.dependencies.services) {
            const isInstalled = this.services.installed.has(type);
            const isWaiting = this.services.waiting.has(type);

            if (isWaiting) {
                if (
                    !this.isInstallable(this.services.waiting.get(type), known)
                ) {
                    return false;
                }
            } else if (!isInstalled) {
                return false;
            }
        }

        return true;
    }

    isInstalled(unit) {
        const config = unit[HOOKS_DATA].config;

        switch (config.is) {
            case "service":
                return this.services.installed.has(config.type);
            case "plugin":
                return this.plugins.installed.has(config.type);
            case "component": {
                if (this.components.installed.has(config.type)) {
                    const installed = this.components.installed.get(
                        config.type
                    );

                    return installed.has(unit);
                } else {
                    return false;
                }
            }
            default:
                // prettier-ignore
                throw new Error(`Expect config.is to be "service", "plugin", or "component", but got "${config.is}".`);
        }
    }

    markInstalled(unit) {
        if (unit[HOOKS_DATA].installed) {
            return;
        } else {
            unit[HOOKS_DATA].installed = true;

            const config = unit[HOOKS_DATA].config;

            for (const type of config.dependencies.plugins) {
                this.markInstalled(this.getPlugin(type));
            }

            for (const type of config.dependencies.services) {
                this.markInstalled(this.getService(type));
            }
        }
    }

    install(unit, forceInstall = false) {
        const config = unit[HOOKS_DATA].config;
        if (this.isInstalled(unit)) {
            return;
        } else if (forceInstall || this.isInstallable(unit)) {
            this.markInstalled(unit);
            switch (config.is) {
                case "service":
                    this.services.waiting.delete(config.type);
                    this.services.installed.set(config.type, unit);
                    break;
                case "plugin":
                    this.plugins.waiting.delete(config.type);
                    this.plugins.installed.set(config.type, unit);
                    break;
                case "component": {
                    const waiting = this.components.waiting.get(config.type);

                    waiting.delete(unit);

                    if (!this.components.installed.has(config.type)) {
                        this.components.installed.set(config.type, new Set());
                    }

                    const installed = this.components.installed.get(
                        config.type
                    );
                    installed.add(unit);

                    const plugin = this.getPlugin(config.type);

                    if (typeof plugin.install === "function") {
                        plugin.install(unit);
                    }
                    break;
                }
                default:
                    return;
            }

            this.runInstallEffects(unit);

            for (const type of config.dependencies.plugins) {
                if (!this.plugins.installed.has(type)) {
                    this.install(this.plugins.waiting.get(type), true);
                }
            }

            for (const type of config.dependencies.services) {
                if (!this.services.installed.has(type)) {
                    this.install(this.services.waiting.get(type), true);
                }
            }
        }
    }

    runInstallEffects(unit) {
        for (const effect of unit[HOOKS_DATA].installEffects) {
            hooksSystem.withInstance(unit, () => {
                const callback = effect();

                if (typeof callback === "function") {
                    unit[HOOKS_DATA].installEffectCleanups.push(callback);
                }
            });
        }
    }

    runSignalHandlers(unit, message) {
        for (const handler of unit[HOOKS_DATA].signalHandlers) {
            hooksSystem.withInstance(unit, () => {
                handler(message);
            });
        }
    }

    signal(target, value) {
        if (typeof target.is !== "string") {
            throw new Error(
                `Expected target.is to be a string but got "${target.is}".`
            );
        }

        if (typeof target.type !== "string") {
            throw new Error(
                `Expected target.type to be a string but got "${target.type}".`
            );
        }

        switch (target.is) {
            case "plugin":
                if (this.plugins.installed.has(target.type)) {
                    const plugin = this.plugins.installed.get(target.type);

                    this.runSignalHandlers(plugin, value);
                } else {
                    throw new Error(
                        `No plugin for target: is="${target.is}" type="${target.type}"`
                    );
                }
                break;
            case "service":
                if (this.services.installed.has(target.type)) {
                    const service = this.services.installed.get(target.type);

                    this.runSignalHandlers(service, value);
                } else {
                    throw new Error(
                        `No service for target: is="${target.is}" type="${target.type}"`
                    );
                }
                break;
            case "component":
                // prettier-ignore
                throw new Error("Signals are not currently implemented for components.");
        }
    }

    runCleanup(unit) {
        for (const effect of unit[HOOKS_DATA].effectSlots.values()) {
            hooksSystem.withInstance(unit, () => {
                effect.cleanup();
            });
        }

        for (const cleanup of unit[HOOKS_DATA].installEffectCleanups) {
            hooksSystem.withInstance(unit, () => {
                cleanup();
            });
        }
    }

    uninstallComponents(config, known) {
        if (config.is === "plugin") {
            if (this.components.installed.has(config.type)) {
                const installed = this.components.installed.get(config.type);

                for (const component of installed) {
                    this.uninstall(component, false, known);
                }
            }
        } else {
            for (const components of this.components.installed.values()) {
                for (const component of components) {
                    if (
                        component[
                            HOOKS_DATA
                        ].config.dependencies.services.includes(config.type)
                    ) {
                        this.uninstall(component, false, known);
                    }
                }
            }
        }
    }

    uninstallPlugins(config, known) {
        if (config.is === "plugin") {
            for (const plugin of this.plugins.installed.values()) {
                if (
                    plugin[HOOKS_DATA].config.dependencies.plugins.includes(
                        config.type
                    )
                ) {
                    this.uninstall(plugin, false, known);
                }
            }
        } else {
            for (const plugin of this.plugins.installed.values()) {
                if (
                    plugin[HOOKS_DATA].config.dependencies.services.includes(
                        config.type
                    )
                ) {
                    this.uninstall(plugin, false, known);
                }
            }
        }
    }

    uninstallServices(config, known) {
        if (config.is === "plugin") {
            for (const service of this.services.installed.values()) {
                if (
                    service[HOOKS_DATA].config.dependencies.plugins.includes(
                        config.type
                    )
                ) {
                    this.uninstall(service, false, known);
                }
            }
        } else {
            for (const service of this.services.installed.values()) {
                if (
                    service[HOOKS_DATA].config.dependencies.services.includes(
                        config.type
                    )
                ) {
                    this.uninstall(service, false, known);
                }
            }
        }
    }

    uninstall(unit, init = true, known = new Set()) {
        if (known.has(unit)) {
            return;
        } else {
            known.add(unit);
        }

        const config = unit[HOOKS_DATA].config;

        switch (config.is) {
            case "service": {
                this.uninstallComponents(config, known);
                this.uninstallPlugins(config, known);
                this.uninstallServices(config, known);

                this.runCleanup(unit);

                if (this.services.installed.has(config.type)) {
                    this.services.installed.delete(config.type);
                    this.services.waiting.set(config.type, unit);
                }
                break;
            }
            case "plugin": {
                this.uninstallComponents(config, known);
                this.uninstallPlugins(config, known);
                this.uninstallServices(config, known);

                this.runCleanup(unit);

                if (this.plugins.installed.has(config.type)) {
                    this.plugins.installed.delete(config.type);
                    this.plugins.waiting.set(config.type, unit);
                }

                break;
            }
            case "component": {
                this.runCleanup(unit);

                if (this.components.installed.has(config.type)) {
                    const installed = this.components.installed.get(
                        config.type
                    );

                    if (installed.has(unit)) {
                        installed.delete(unit);

                        if (!this.components.waiting.has(config.type)) {
                            this.components.waiting.set(config.type, new Set());
                        }

                        const waiting = this.components.waiting.get(
                            config.type
                        );
                        waiting.add(unit);
                    }
                }
                break;
            }
        }

        if (init) {
            this.init(unit);
        }
    }

    remove(...units) {
        for (const unit of units) {
            if (unit[HOOKS_DATA].removing) {
                continue;
            } else {
                unit[HOOKS_DATA].removing = true;

                const config = unit[HOOKS_DATA].config;

                switch (config.is) {
                    case "service": {
                        this.uninstall(unit, false);

                        if (this.services.waiting.has(config.type)) {
                            this.services.waiting.delete(config.type);
                        }
                        break;
                    }
                    case "plugin": {
                        this.uninstall(unit, false);

                        if (this.plugins.waiting.has(config.type)) {
                            this.plugins.waiting.delete(config.type);
                        }
                        break;
                    }
                    case "component": {
                        this.uninstall(unit, false);

                        if (this.components.waiting.has(config.type)) {
                            const waiting = this.components.waiting.get(
                                config.type
                            );

                            if (waiting.has(unit)) {
                                waiting.delete(unit);
                            }
                        }
                        break;
                    }
                    default:
                        throw new Error(
                            `Expected config.is to be "service", "plugin", or "component", but got "${config.is}".`
                        );
                }

                unit[HOOKS_DATA].removing = false;
            }
        }
    }

    reset() {
        for (const components of this.components.installed.values()) {
            for (const component of components) {
                this.remove(component);
            }
        }

        for (const components of this.components.waiting.values()) {
            for (const component of components) {
                this.remove(component);
            }
        }

        for (const plugin of this.plugins.installed.values()) {
            this.remove(plugin);
        }

        for (const plugin of this.plugins.waiting.values()) {
            this.remove(plugin);
        }

        for (const service of this.services.installed.values()) {
            this.remove(service);
        }

        for (const service of this.services.waiting.values()) {
            this.remove(service);
        }
    }
}

module.exports = new Manager();
