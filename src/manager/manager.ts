import { PluginInstanceWithDependencies } from '../../types/plugin';
import { ServiceInstanceWithDependencies } from '../../types/service';
import { ComponentInstanceWithDependencies } from '../../types/component';
import { MiddlewareInstanceWithDependencies } from '../../types/middleware';

import { LeverageUnit, LeverageInstance, EmptyUnit } from '../../types/leverage';
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

    add (...units: Array<LeverageUnit|EmptyUnit>) {
        for (const unit of units) {
            /*
             * Only accept objects or functions
             */
            if (typeof unit !== 'object' && typeof unit !== 'function') {
                throw new Error(`[Manager] A Leverage unit must be either an object or constructor function`);
            }

            /*
             * Support constructor functions
             */
            const instance = this.createUnitInstance(unit);

            /*
             * Ensure the instance has an `is` property
             */
            if (!instance.is) {
                throw new Error(`[Manager] A Leverage unit must have an \`is\` property`);
            }

            /*
             * Verify the validity of the config
             */
            if (typeof instance.config !== 'object') {
                // tslint:disable-next-line:max-line-length
                throw new Error(`[Manager] Expected config property to be an "object" but got "${typeof instance.config}"`);
            }

            if (typeof instance.is !== 'string') {
                // tslint:disable-next-line:max-line-length
                throw new Error(`[Manager] Expected \`config.is\` to be a "string" but got a "${typeof instance.is}"`);
            }

            /*
             * Normalize the dependency map
             */
            if (instance.is === 'component') {
                this.initializeInstanceDependencies(instance, true);
            } else {
                this.initializeInstanceDependencies(instance);
            }

            /*
             * Begin install process
             */
            switch (instance.is) {
            case 'plugin':
                this.addPlugin(instance as PluginInstanceWithDependencies);
                break;

            case 'service':
                this.addService(instance as ServiceInstanceWithDependencies);
                break;

            case 'component':
                this.addComponent(instance as ComponentInstanceWithDependencies);
                break;

            case 'middleware':
                this.addMiddleware(instance as MiddlewareInstanceWithDependencies);
                break;

            default:
                // tslint:disable-next-line:max-line-length
                throw new Error(`[Manager] Leverage unit kind "${instance.config.is}" is not valid; supported values are: "plugin", "service", "component", "middleware"`);
            }
        }
    }

    addComponent (component: ComponentInstanceWithDependencies): boolean {
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
            if (this.__components__.__waiting__.plugins[plugin]) {
                const index = this.__components__.__waiting__.plugins[plugin].indexOf(component);
                if (index !== -1) {
                    this.__components__.__waiting__.plugins[plugin].splice(index, 1);
                }
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
            if (this.__components__.__waiting__.services[service]) {
                const index = this.__components__.__waiting__.services[service].indexOf(component);
                if (index !== -1) {
                    this.__components__.__waiting__.services[service].splice(index, 1);
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

    addPlugin (plugin: PluginInstanceWithDependencies): boolean {
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
            if (!plugin[type]) {
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
            if (this.__plugins__.__waiting__.plugins[type]) {
                const index = this.__plugins__.__waiting__.plugins[type].indexOf(plugin);
                if (index !== -1) {
                    this.__plugins__.__waiting__.plugins[type].splice(index, 1);
                }
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
            if (this.__plugins__.__waiting__.services[service]) {
                const index = this.__plugins__.__waiting__.services[service].indexOf(plugin);
                if (index !== -1) {
                    this.__plugins__.__waiting__.services[service].splice(index, 1);
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
            if (this.__plugins__.hasOwnProperty(type)) {
                throw new Error(`[Manager] Plugin type "${type}" is already defined`);
            }

            this.__plugins__[type] = plugin;

            /*
             * Attempt to install anything waiting on this component
             */
            if (this.__components__.__waiting__.plugins.hasOwnProperty(type)) {
                for (const component of this.__components__.__waiting__.plugins[type]) {
                    this.addComponent(component as ComponentInstanceWithDependencies);
                }
            }
        }

        return true;
    }

    addService (service: ServiceInstanceWithDependencies) {
        // @TODO (jakehamilton): Add service
    }

    addMiddleware (middleware: MiddlewareInstanceWithDependencies) {
        // @TODO (jakehamilton): Add middleware
    }

    private createUnitInstance (unit: LeverageUnit | EmptyUnit): LeverageInstance {
        if (typeof unit === 'function') {
            return new (unit as any)();
        } else {
            return unit as any;
        }
    }

    private initializeInstanceDependencies (instance: LeverageInstance, patchType: boolean = false): void {
        if (!instance.config.dependencies) {
            instance.config.dependencies = {};
        }

        if (!instance.config.dependencies.plugins) {
            instance.config.dependencies.plugins = [];
        }

        if (!instance.config.dependencies.services) {
            instance.config.dependencies.services = [];
        }

        (instance as any).plugins = {};
        (instance as any).services = {};

        if (patchType) {
            instance.config.dependencies.plugins = instance.config.dependencies.plugins.concat(instance.config.type);
        }
    }
}
