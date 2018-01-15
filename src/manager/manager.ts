import { PluginUnit, PluginInstance } from '../../types/plugin';
import { ServiceUnit } from '../../types/service';
import { ComponentUnit, ComponentInstance } from '../../types/component';
import { MiddlewareUnit } from '../../types/middleware';

import { LeverageUnit, LeverageInstance } from '../../types/leverage';
import { Manager as LeverageManager } from '../../types/manager';

export interface LeverageUnitWaitingMap {
    plugins: {
        [name: string]: LeverageUnit[];
    };
    services: {
        [name: string]: LeverageUnit[];
    };
}

export interface LeverageUnitMap {
    __waiting__: LeverageUnitWaitingMap;
    [name: string]: LeverageUnit[] | any;
}

export default class Manager implements LeverageManager {
    ['__plugins__']: LeverageUnitMap;
    ['__services__']: LeverageUnitMap;
    ['__middleware__']: LeverageUnitMap;
    ['__components__']: LeverageUnitMap;

    constructor () {
        this.__plugins__ = {
            __waiting__: {
                plugins: {},
                services: {},
            },
        };

        this.__services__ = {
            __waiting__: {
                plugins: {},
                services: {},
            },
        };

        this.__components__ = {
            __waiting__: {
                plugins: {},
                services: {},
            },
        };

        this.__middleware__ = {
            __waiting__: {
                plugins: {},
                services: {},
            },
        };
    }

    add (...units: LeverageUnit[]) {
        for (const unit of units) {
            /*
             * Only accept objects or functions
             */
            if (typeof unit !== 'object' && typeof unit !== 'function') {
                throw new Error(`[Manager] A Leverage unit must be either an object or constructor function`);
            }

            /*
             * Ensure the unit has a config
             */
            if (!unit.hasOwnProperty('config') && !unit.prototype.hasOwnProperty('config')) {
                throw new Error(`[Manager] A Leverage unit must have a \`config\` property`);
            }

            /*
             * Support constructor functions
             */
            const instance = this.createUnitInstance(unit);

            /*
             * Verify the validity of the config
             */
            if (typeof instance.config !== 'object') {
                // tslint:disable-next-line:max-line-length
                throw new Error(`[Manager] Expected config property to be an "object" but got "${typeof instance.config}"`);
            }

            if (!instance.config.hasOwnProperty('is')) {
                throw new Error(`[Manager] A Leverage unit's config must have an \`is\` property`);
            }

            if (typeof instance.config.is !== 'string') {
                // tslint:disable-next-line:max-line-length
                throw new Error(`[Manager] Expected \`config.is\` to be a "string" but got a "${typeof instance.config.is}"`);
            }

            /*
             * Begin install process
             */
            switch (instance.config.is) {
            case 'plugin':
                /*
                * Normalize the dependency map
                */
                this.initializeInstanceDependencies(instance);

                this.addPlugin(instance as PluginInstance);
                break;

            case 'service':
                /*
                * Normalize the dependency map
                */
                this.initializeInstanceDependencies(instance);

                this.addService(instance);
                break;

            case 'component':
                /*
                * Normalize the dependency map
                */
                this.initializeInstanceDependencies(instance, true);

                this.addComponent(instance as ComponentInstance);
                break;

            case 'middleware':
                /*
                * Normalize the dependency map
                */
                this.initializeInstanceDependencies(instance);

                this.addMiddleware(instance);
                break;

            default:
                // tslint:disable-next-line:max-line-length
                throw new Error(`[Manager] Leverage unit kind "${instance.config.is}" is not valid; supported values are: "plugin", "service", "component", "middleware"`);
            }
        }
    }

    addComponent (component: ComponentInstance): boolean {
        /*
         * Verify validity of the component
         */
        if (!component.config.hasOwnProperty('type')) {
            throw new Error(`[Manager] A Leverage component's config must have a \`type\` property`);
        }

        if (typeof component.config.type !== 'string' && !Array.isArray(component.config.type)) {
            throw new Error(`[Manager] Expected \`component.config.type\` to be a "string" or array of "string"`);
        }

        const types = ([] as string[]).concat(component.config.type);

        /*
         * Check to see if all required plugins are available
         */
        for (const plugin of (component as any).config.dependencies.plugins) {
            if (!this.__plugins__.hasOwnProperty(plugin)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!this.__components__.__waiting__.hasOwnProperty(plugin)) {
                    this.__components__.__waiting__.plugins[plugin] = [];
                }

                /*
                 * Push the component to the waiting array if it isn't already
                 */
                if (!this.__components__.__waiting__.plugins[plugin].includes(component)) {
                    this.__components__.__waiting__.plugins[plugin].push(component);
                }

                return false;
            }
        }

        /*
        * Check to see if all required services are available
        */
        for (const service of (component as any).config.dependencies.services) {
            if (!this.__services__.hasOwnProperty(service)) {
                /*
                * Create waiting array if it doesn't exist for this type
                */
                if (!this.__components__.__waiting__.hasOwnProperty(service)) {
                    this.__components__.__waiting__.services[service] = [];
                }

                /*
                * Push the component to the waiting array if it isn't already
                */
                if (!this.__components__.__waiting__.services[service].includes(component)) {
                    this.__components__.__waiting__.services[service].push(component);
                }

                return false;
            }
        }

        /*
         * Inject plugins
         */
        for (const plugin of (component as any).config.dependencies.plugins) {
            component.plugins[plugin] = this.__plugins__[plugin];

            /*
             * Remove the component from the waiting array if it exists
             */
            const index = this.__components__.__waiting__.plugins[plugin].indexOf(component);
            if (index !== -1) {
                this.__components__.__waiting__.plugins[plugin].splice(index, 1);
            }
        }

         /*
          * Inject services
          */
        for (const service of (component as any).config.dependencies.services) {
            component.services[service] = this.__services__[service];

            /*
             * Remove the component from the waiting array if it exists
             */
            const index = this.__components__.__waiting__.services[service].indexOf(component);
            if (index !== -1) {
                this.__components__.__waiting__.services[service].splice(index, 1);
            }
        }

        /*
         * Install
         */
        for (const type of types) {
            /*
             * Install the component
             */
            this.__plugins__[type][type](component);

            /*
             * Create the component array if it doesn't exist for this type
             */
            if (!this.__components__.hasOwnProperty(type)) {
                this.__components__[type] = [];
            }

            /*
             * Push the component to the component array
             */
            this.__components__[type].push(component);
        }

        return true;
    }

    addPlugin (plugin: PluginInstance): boolean {
        // @TODO (jakehamilton): Add plugin
        /*
         * Verify validity of the plugin
         */
        if (!plugin.config.hasOwnProperty('type')) {
            throw new Error(`[Manager] A Leverage plugin's config must have a \`type\` property`);
        }

        if (typeof plugin.config.type !== 'string' && !Array.isArray(plugin.config.type)) {
            throw new Error(`[Manager] Expected \`plugin.config.type\` to be a "string" or array of "string"`);
        }

        const types = ([] as string[]).concat(plugin.config.type);

        /*
         * Ensure the plugin conforms to the plugin interface
         */
        for (const type of types) {
            if (!plugin.hasOwnProperty(type)) {
                throw new Error(`[Manager] Plugins must have methods that match their types, missing method "${type}"`);
            }

            if (typeof plugin[type] !== 'function') {
                throw new Error(`[Manager] \`plugin.${type}\` must be a function`);
            }
        }

        /*
         * Check to see if all required plugins are available
         */
        for (const type of plugin.config.dependencies.plugins) {
            if (!this.__plugins__.hasOwnProperty(type)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!this.__plugins__.__waiting__.hasOwnProperty(type)) {
                    this.__plugins__.__waiting__.plugins[type] = [];
                }

                /*
                 * Push the component to the waiting array if it isn't already
                 */
                if (!this.__plugins__.__waiting__.plugins[type].includes(plugin)) {
                    this.__plugins__.__waiting__.plugins[type].push(plugin);
                }

                return false;
            }
        }

        /*
        * Check to see if all required services are available
        */
        for (const service of plugin.config.dependencies.services) {
            if (!this.__services__.hasOwnProperty(service)) {
                /*
                * Create waiting array if it doesn't exist for this type
                */
                if (!this.__plugins__.__waiting__.hasOwnProperty(service)) {
                    this.__plugins__.__waiting__.services[service] = [];
                }

                /*
                * Push the component to the waiting array if it isn't already
                */
                if (!this.__plugins__.__waiting__.services[service].includes(plugin)) {
                    this.__plugins__.__waiting__.services[service].push(plugin);
                }

                return false;
            }
        }

        /*
         * Inject plugins
         */
        for (const type of (plugin as any).config.dependencies.plugins) {
            plugin.plugins[type] = this.__plugins__[type];

            /*
             * Remove the plugin from the waiting array if it exists
             */
            const index = this.__plugins__.__waiting__.plugins[type].indexOf(plugin);
            if (index !== -1) {
                this.__plugins__.__waiting__.plugins[type].splice(index, 1);
            }
        }

         /*
          * Inject services
          */
        for (const service of (plugin as any).config.dependencies.services) {
            plugin.services[service] = this.__services__[service];

            /*
             * Remove the plugin from the waiting array if it exists
             */
            const index = this.__plugins__.__waiting__.services[service].indexOf(plugin);
            if (index !== -1) {
                this.__plugins__.__waiting__.services[service].splice(index, 1);
            }
        }

        /*
         * Start installing the plugin for each type it supports
         */
        for (const type of types) {
            /*
             * Ensure the plugin type doesn't already exist
             */
            if (this.__plugins__.hasOwnProperty(type)) {
                throw new Error(`[Manager] Plugin type "${type}" is already defined`);
            }

            this.__plugins__[type] = plugin;

            /*
             * Attempt to install anything waiting on this component
             */
            if (this.__components__.__waiting__.plugins.hasOwnProperty(type)) {
                for (const component of this.__components__.__waiting__.plugins[type]) {
                    this.addComponent(component as ComponentInstance);
                }
            }
        }

        return true;
    }

    addService (service: ServiceUnit) {
        // @TODO (jakehamilton): Add service
    }

    addMiddleware (middleware: MiddlewareUnit) {
        // @TODO (jakehamilton): Add middleware
    }

    private createUnitInstance (unit: LeverageUnit): LeverageInstance {
        if (typeof unit === 'function') {
            return new (unit as any)();
        } else {
            return unit as any;
        }
    }

    private initializeInstanceDependencies (instance: LeverageInstance, patchType: boolean = false): void {
        const dependencies = {
            plugins: [],
            services: [],
        };

        if (!instance.config.hasOwnProperty('dependencies')) {
            instance.config.dependencies = dependencies;
        } else {
            instance.config.dependencies = Object.assign({}, dependencies, instance.config.dependencies);
        }

        (instance as any).plugins = {};
        (instance as any).services = {};

        if (patchType) {
            instance.config.dependencies.plugins = instance.config.dependencies.plugins.concat(instance.config.type);
        }
    }
}
