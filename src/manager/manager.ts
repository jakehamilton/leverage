import { PluginInstance } from '../plugin';
import { ServiceInstance } from '../service';
import { ComponentInstance } from '../component';
import { MiddlewareInstance } from '../middleware';

import { Unit, Instance, EmptyUnit, Config } from '..';

export interface LeverageManager {
    add: (...units: Unit[]) => void;

    addPlugin: (plugin: PluginInstance) => boolean;
    addService: (service: ServiceInstance) => boolean;
    addComponent: (component: ComponentInstance) => boolean;
    addMiddleware: (middleware: MiddlewareInstance) => boolean;
}

export interface UnitMap<T> {
    waiting: {
        plugins: {
            [type: string]: T[];
        };
        services: {
            [name: string]: T[];
        };
    };

    installed: {
        [key: string]: T;
    };
}

export interface UnitMapMultiple<T> {
    waiting: {
        plugins: {
            [type: string]: T[];
        };
        services: {
            [name: string]: T[];
        };
    };

    installed: {
        [key: string]: T[];
    };
}

export class Manager implements LeverageManager {
    private plugins: UnitMap<PluginInstance>;
    private services: UnitMap<ServiceInstance>;
    private middleware: UnitMapMultiple<MiddlewareInstance>;
    private components: UnitMapMultiple<ComponentInstance>;

    constructor () {
        this.plugins = {
            waiting: {
                plugins: {},
                services: {},
            },
            installed: {},
        };

        this.services = {
            waiting: {
                plugins: {},
                services: {},
            },
            installed: {},
        };

        this.components = {
            waiting: {
                plugins: {},
                services: {},
            },
            installed: {},
        };

        this.middleware = {
            waiting: {
                plugins: {},
                services: {},
            },
            installed: {},
        };
    }

    add (...units: Array<Unit | EmptyUnit>): void {
        for (const unit of units) {
            /*
             * Only accept objects or functions
             */
            if (typeof unit !== 'object' && typeof unit !== 'function') {
                throw new Error(
                    `[Manager] A Leverage unit must be either an object or constructor function`,
                );
            }

            if ('config' in unit && typeof unit.config !== 'object') {
                throw new Error(
                    `[Manager] A Leverage unit's config must be an object`,
                );
            }

            /*
             * Support constructor functions
             */
            const instance: Instance = this.createInstance(unit);

            /*
             * Ensure the instance has an `is` property
             */
            if (!instance.is) {
                throw new Error(
                    `[Manager] A Leverage unit must have an \`is\` property`,
                );
            }

            /*
             * Ensure the `is` property is a string
             */
            if (typeof instance.is !== 'string') {
                // tslint:disable-next-line:max-line-length
                throw new Error(
                    `[Manager] Expected \`config.is\` to be a "string" but got a "${typeof instance.is}"`,
                );
            }

            /*
             * Normalize the dependency map
             */
            if (instance.is === 'component' || instance.is === 'middleware') {
                this.initializeInstanceDependencies(instance, true);
            } else {
                this.initializeInstanceDependencies(instance);
            }

            /*
             * Begin install process
             */
            switch (instance.is) {
                case 'plugin':
                    this.addPlugin(instance as PluginInstance);
                    break;

                case 'service':
                    this.addService(instance as ServiceInstance);
                    break;

                case 'component':
                    this.addComponent(instance as ComponentInstance);
                    break;

                case 'middleware':
                    this.addMiddleware(instance as MiddlewareInstance);
                    break;

                default:
                    // prettier-ignore
                    // tslint:disable-next-line:max-line-length
                    throw new Error(
                        `[Manager] Leverage unit kind "${
                            instance!.is
                        }" is not valid; supported values are: "plugin", "service", "component", "middleware"`,
                    );
            }
        }
    }

    addComponent (component: ComponentInstance): boolean {
        /*
         * Verify validity of the component
         */
        if (!('type' in component)) {
            throw new Error(
                `[Manager] A Leverage component must have a \`type\` property`,
            );
        }

        if (
            typeof component.type !== 'string' &&
            !Array.isArray(component.type)
        ) {
            throw new Error(
                `[Manager] Expected \`component.type\` to be a "string" or array of "string"`,
            );
        }

        const types = ([] as string[]).concat(component.type);

        let ready = true;

        /*
         * Check to see if all required plugins are available
         */
        for (const plugin of component.config.dependencies.plugins) {
            if (!(plugin in this.plugins.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!(plugin in this.components.waiting.plugins)) {
                    this.components.waiting.plugins[plugin] = [];
                }

                /*
                 * Push the component to the waiting array if it isn't already
                 */
                if (
                    !this.components.waiting.plugins[plugin].includes(component)
                ) {
                    this.components.waiting.plugins[plugin].push(component);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
        * Check to see if all required services are available
        */
        for (const service of component.config.dependencies.services) {
            if (!(service in this.services.installed)) {
                /*
                * Create waiting array if it doesn't exist for this type
                */
                if (!(service in this.components.waiting.services)) {
                    this.components.waiting.services[service] = [];
                }

                /*
                * Push the component to the waiting array if it isn't already
                */
                if (
                    !this.components.waiting.services[service].includes(
                        component,
                    )
                ) {
                    this.components.waiting.services[service].push(component);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Inject plugins
         */
        for (const plugin of component.config.dependencies.plugins) {
            component.plugins[plugin] = this.plugins.installed[plugin];

            /*
             * Remove the component from the waiting array if it exists
             */
            if (plugin in this.components.waiting.plugins) {
                const index = this.components.waiting.plugins[plugin].indexOf(
                    component,
                );
                if (index !== -1) {
                    this.components.waiting.plugins[plugin].splice(index, 1);
                }
            }
        }

        /*
          * Inject services
          */
        for (const service of component.config.dependencies.services) {
            component.services[service] = this.services.installed[service];

            /*
             * Remove the component from the waiting array if it exists
             */
            if (service in this.components.waiting.services) {
                const index = this.components.waiting.services[service].indexOf(
                    component,
                );
                if (index !== -1) {
                    this.components.waiting.services[service].splice(index, 1);
                }
            }
        }

        /*
         * Install
         */
        for (const type of types) {
            /*
             * Install the component
             */
            this.plugins.installed[type][type](component);

            /*
             * Create the component array if it doesn't exist for this type
             */
            if (!(type in this.components.installed)) {
                this.components.installed[type] = [];
            }

            /*
             * Push the component to the component array
             */
            this.components.installed[type].push(component);
        }

        return true;
    }

    addPlugin (plugin: PluginInstance): boolean {
        /*
         * Verify validity of the plugin
         */
        if (!('type' in plugin)) {
            throw new Error(
                `[Manager] A Leverage plugin must have a \`type\` property`,
            );
        }

        if (typeof plugin.type !== 'string' && !Array.isArray(plugin.type)) {
            throw new Error(
                `[Manager] Expected \`plugin.type\` to be a "string" or array of "string"`,
            );
        }

        const types = ([] as string[]).concat(plugin.type);

        /*
         * Ensure the plugin conforms to the plugin interface
         */
        for (const type of types) {
            if (!(type in plugin)) {
                throw new Error(
                    `[Manager] Plugins must have methods that match their types, missing method "${type}"`,
                );
            }

            if (typeof plugin[type] !== 'function') {
                throw new Error(
                    `[Manager] \`plugin.${type}\` must be a function`,
                );
            }
        }

        let ready = true;

        /*
         * Check to see if all required plugins are available
         */
        for (const type of plugin.config.dependencies.plugins) {
            if (!(type in this.plugins.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!(type in this.plugins.waiting.plugins)) {
                    this.plugins.waiting.plugins[type] = [];
                }

                /*
                 * Push the plugin to the waiting array if it isn't already
                 */
                if (!this.plugins.waiting.plugins[type].includes(plugin)) {
                    this.plugins.waiting.plugins[type].push(plugin);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Check to see if all required services are available
         */
        for (const service of plugin.config.dependencies.services) {
            if (!(service in this.services.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!(service in this.plugins.waiting.services)) {
                    this.plugins.waiting.services[service] = [];
                }

                /*
                 * Push the component to the waiting array if it isn't already
                 */
                if (!this.plugins.waiting.services[service].includes(plugin)) {
                    this.plugins.waiting.services[service].push(plugin);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Inject plugins
         */
        for (const type of plugin.config.dependencies.plugins) {
            plugin.plugins[type] = this.plugins.installed[type];

            /*
             * Remove the plugin from the waiting array if it exists
             */
            if (type in this.plugins.waiting.plugins) {
                const index = this.plugins.waiting.plugins[type].indexOf(
                    plugin,
                );
                if (index !== -1) {
                    this.plugins.waiting.plugins[type].splice(index, 1);
                }
            }
        }

        /*
          * Inject services
          */
        for (const service of plugin.config.dependencies.services) {
            plugin.services[service] = this.services.installed[service];

            /*
             * Remove the plugin from the waiting array if it exists
             */
            if (service in this.plugins.waiting.services) {
                const index = this.plugins.waiting.services[service].indexOf(
                    plugin,
                );
                if (index !== -1) {
                    this.plugins.waiting.services[service].splice(index, 1);
                }
            }
        }

        /*
         * Start installing the plugin for each type it supports
         */
        for (const type of types) {
            /*
             * Ensure the plugin type doesn't already exist
             */
            if (type in this.plugins.installed) {
                throw new Error(
                    `[Manager] Plugin type "${type}" is already defined`,
                );
            }

            this.plugins.installed[type] = plugin;

            /*
             * Attempt to install anything waiting on this plugin
             */
            if (type in this.components.waiting.plugins) {
                for (const unit of this.components.waiting.plugins[type]) {
                    this.addComponent(unit);
                }
            }

            if (type in this.services.waiting.plugins) {
                for (const unit of this.services.waiting.plugins[type]) {
                    this.addService(unit);
                }
            }

            if (type in this.plugins.waiting.plugins) {
                for (const unit of this.plugins.waiting.plugins[type]) {
                    this.addPlugin(unit);
                }
            }

            if (type in this.middleware.waiting.plugins) {
                for (const unit of this.middleware.waiting.plugins[type]) {
                    this.addMiddleware(unit);
                }
            }
        }

        return true;
    }

    addService (service: ServiceInstance) {
        /*
         * Verify validity of the service
         */
        if (!('name' in service)) {
            throw new Error(
                `[Manager] A Leverage service's config must have a \`name\` property`,
            );
        }

        if (typeof service.name !== 'string') {
            // prettier-ignore
            // tslint:disable-next-line:max-line-length
            throw new Error(
                `[Manager] Expected \`service.name\` to be a "string" but got ${
                    typeof service.name
                }`,
            );
        }

        let ready = true;

        /*
         * Check to see if all required plugins are available
         */
        for (const type of service.config.dependencies.plugins) {
            if (!(type in this.plugins.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this plugin
                 */
                if (!(type in this.services.waiting.plugins)) {
                    this.services.waiting.plugins[type] = [];
                }

                /*
                 * Push the service to the waiting array if it isn't already
                 */
                if (!this.services.waiting.plugins[type].includes(service)) {
                    this.services.waiting.plugins[type].push(service);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Check to see if all required services are available
         */
        for (const name of service.config.dependencies.services) {
            if (!(name in this.services.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this service
                 */
                if (!(name in this.services.waiting.services)) {
                    this.services.waiting.services[name] = [];
                }

                /*
                 * Push the service to the waiting array if it isn't already
                 */
                if (!this.services.waiting.services[name].includes(service)) {
                    this.services.waiting.services[name].push(service);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Inject plugins
         */
        for (const type of service.config.dependencies.plugins) {
            service.plugins[type] = this.plugins.installed[type];

            /*
             * Remove the service from the waiting array if it exists
             */
            if (type in this.services.waiting.plugins) {
                const index = this.services.waiting.plugins[type].indexOf(
                    service,
                );
                if (index !== -1) {
                    this.services.waiting.plugins[type].splice(index, 1);
                }
            }
        }

        /*
         * Inject services
         */
        for (const name of service.config.dependencies.services) {
            service.services[name] = this.services.installed[name];

            if (name in this.services.waiting.services) {
                const index = this.services.waiting.services[name].indexOf(
                    service,
                );
                if (index !== -1) {
                    this.services.waiting.services[name].splice(index, 1);
                }
            }
        }

        /*
         * Start installing the service
         */
        if (service.name in this.services.installed) {
            // prettier-ignore
            throw new Error(
                `[Manager] Service name "${
                    service.name
                }" is already defined`,
            );
        }

        this.services.installed[service.name] = service;

        /*
         * Attempt to intsall anything waiting on this service
         */
        if (service.name in this.components.waiting.services) {
            for (const unit of this.components.waiting.services[service.name]) {
                this.addComponent(unit);
            }
        }

        if (service.name in this.plugins.waiting.services) {
            for (const unit of this.plugins.waiting.services[service.name]) {
                this.addPlugin(unit);
            }
        }

        if (service.name in this.services.waiting.services) {
            for (const unit of this.services.waiting.services[service.name]) {
                this.addService(unit);
            }
        }

        if (service.name in this.middleware.waiting.services) {
            for (const unit of this.middleware.waiting.services[service.name]) {
                this.addMiddleware(unit);
            }
        }

        return true;
    }

    addMiddleware (middleware: MiddlewareInstance): boolean {
        /*
         * Verify validity of the middleware
         */
        if (!('type' in middleware)) {
            throw new Error(
                `[Manager] A Leverage plugin's config must have a \`type\` property`,
            );
        }

        if (
            typeof middleware.type !== 'string' &&
            !Array.isArray(middleware.type)
        ) {
            throw new Error(
                `[Manager] Expected \`middleware.type\` to be a "string" or array of "string"`,
            );
        }

        const types = ([] as string[]).concat(middleware.type);

        let ready = true;

        /*
         * Check to see if all required plugins are available
         */
        for (const plugin of middleware.config.dependencies.plugins) {
            if (!(plugin in this.plugins.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!(plugin in this.middleware.waiting.plugins)) {
                    this.middleware.waiting.plugins[plugin] = [];
                }

                /*
                 * Push the middleware to the waiting array if it isn't already
                 */
                if (
                    !this.middleware.waiting.plugins[plugin].includes(
                        middleware,
                    )
                ) {
                    this.middleware.waiting.plugins[plugin].push(middleware);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Check to see if all required services are available
         */
        for (const service of middleware.config.dependencies.services) {
            if (!(service in this.services.installed)) {
                /*
                 * Create waiting array if it doesn't exist for this service
                 */
                if (!(service in this.middleware.waiting.services)) {
                    this.middleware.waiting.services[service] = [];
                }

                /*
                 * Push the middleware to the waiting array if it isn't already
                 */
                if (
                    !this.middleware.waiting.services[service].includes(
                        middleware,
                    )
                ) {
                    this.middleware.waiting.services[service].push(middleware);
                }

                ready = false;
            }
        }

        if (!ready) {
            return false;
        }

        /*
         * Inject plugins
         */
        for (const plugin of middleware.config.dependencies.plugins) {
            middleware.plugins[plugin] = this.plugins.installed[plugin];

            /*
             * Remove the middleware from the waiting array if it exists
             */
            if (plugin in this.middleware.waiting.plugins) {
                const index = this.middleware.waiting.plugins[plugin].indexOf(
                    middleware,
                );
                if (index !== -1) {
                    this.middleware.waiting.plugins[plugin].splice(index, 1);
                }
            }
        }

        /*
         * Inject services
         */
        for (const service of middleware.config.dependencies.services) {
            middleware.services[service] = this.services.installed[service];

            /*
             * Remove the middleware from the waiting array if it exists
             */
            if (service in this.middleware.waiting.services) {
                const index = this.middleware.waiting.services[service].indexOf(
                    middleware,
                );
                if (index !== -1) {
                    this.middleware.waiting.services[service].splice(index, 1);
                }
            }
        }

        /*
         * Start installing the middleware for each type it supports
         */
        for (const type of types) {
            /*
             * Install the middleware
             */
            const unit = this.plugins.installed[type];
            if ('middleware' in unit && typeof unit.middleware === 'function') {
                unit.middleware(middleware);
            }

            /*
             * Create the middleware array if it doesn't exist
             */
            if (!(type in this.middleware.installed)) {
                this.middleware.installed[type] = [];
            }

            /*
             * Push the middleware to the middleware array
             */
            this.middleware.installed[type].push(middleware);
        }

        return true;
    }

    private createInstance (unit: Unit | EmptyUnit): Instance {
        if (typeof unit === 'function') {
            return new (unit as any)();
        } else {
            return unit as Instance;
        }
    }

    private initializeInstanceDependencies (
        instance: Instance,
        patchType: boolean = false,
    ): void {
        if (!('config' in instance) || typeof instance.config !== 'object') {
            // prettier-ignore
            (instance.config as Config) = {};
        }

        if (
            !('dependencies' in instance.config) ||
            typeof instance.config.dependencies !== 'object'
        ) {
            instance.config.dependencies = {
                plugins: [],
                services: [],
            };
        }

        if (!('plugins' in instance.config.dependencies)) {
            instance.config.dependencies!.plugins = [];
        }

        if (!('services' in instance.config.dependencies)) {
            instance.config.dependencies!.services = [];
        }

        instance.plugins = {};
        instance.services = {};

        if (patchType) {
            instance.config.dependencies.plugins = instance.config.dependencies.plugins.concat(
                instance.type,
            );
        }
    }
}
