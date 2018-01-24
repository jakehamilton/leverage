import { PluginInstanceWithDependencies } from '../../types/plugin';
import { ServiceInstanceWithDependencies } from '../../types/service';
import { ComponentInstanceWithDependencies } from '../../types/component';
import { MiddlewareInstanceWithDependencies } from '../../types/middleware';

import { LeverageUnit, LeverageInstance, EmptyUnit } from '../../types/leverage';
import { Manager as LeverageManager } from '../../types/manager';

export interface ManagerUnitMap {
    waiting: {
        plugins: {
            [name: string]: LeverageUnit[];
        };
        services: {
            [name: string]: LeverageUnit[];
        };
    };
}

export default class Manager implements LeverageManager {
    private plugins: ManagerUnitMap & {
        installed: {
            [key: string]: PluginInstanceWithDependencies;
        };
    };
    private services: ManagerUnitMap & {
        installed: {
            [key: string]: ServiceInstanceWithDependencies;
        };
    };
    private middleware: ManagerUnitMap & {
        installed: {
            [key: string]: MiddlewareInstanceWithDependencies;
        };
    };
    private components: ManagerUnitMap & {
        installed: {
            [key: string]: ComponentInstanceWithDependencies[];
        };
    };

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
        for (const plugin of component.config.dependencies.plugins) {
            if (!this.plugins.installed.hasOwnProperty(plugin)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!this.components.waiting.hasOwnProperty(plugin)) {
                    this.components.waiting.plugins[plugin] = [];
                }

                /*
                 * Push the component to the waiting array if it isn't already
                 */
                if (!this.components.waiting.plugins[plugin].includes(component)) {
                    this.components.waiting.plugins[plugin].push(component);
                }

                return false;
            }
        }

        /*
        * Check to see if all required services are available
        */
        for (const service of component.config.dependencies.services) {
            if (!this.services.installed.hasOwnProperty(service)) {
                /*
                * Create waiting array if it doesn't exist for this type
                */
                if (!this.components.waiting.hasOwnProperty(service)) {
                    this.components.waiting.services[service] = [];
                }

                /*
                * Push the component to the waiting array if it isn't already
                */
                if (!this.components.waiting.services[service].includes(component)) {
                    this.components.waiting.services[service].push(component);
                }

                return false;
            }
        }

        /*
         * Inject plugins
         */
        for (const plugin of component.config.dependencies.plugins) {
            component.plugins[plugin] = this.plugins.installed[plugin];

            /*
             * Remove the component from the waiting array if it exists
             */
            if (this.components.waiting.plugins[plugin]) {
                const index = this.components.waiting.plugins[plugin].indexOf(component);
                if (index !== -1) {
                    this.components.waiting.plugins[plugin].splice(index, 1);
                }
            }
        }

         /*
          * Inject services
          */
        for (const service of (component as any).config.dependencies.services) {
            component.services[service] = this.services.installed[service];

            /*
             * Remove the component from the waiting array if it exists
             */
            if (this.components.waiting.services[service]) {
                const index = this.components.waiting.services[service].indexOf(component);
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
            if (!this.components.installed.hasOwnProperty(type)) {
                this.components.installed[type] = ([] as ComponentInstanceWithDependencies[]);
            }

            /*
             * Push the component to the component array
             */
            this.components.installed[type].push(component);
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
            if (!this.plugins.installed.hasOwnProperty(type)) {
                /*
                 * Create waiting array if it doesn't exist for this type
                 */
                if (!this.plugins.waiting.hasOwnProperty(type)) {
                    this.plugins.waiting.plugins[type] = [];
                }

                /*
                 * Push the component to the waiting array if it isn't already
                 */
                if (!this.plugins.waiting.plugins[type].includes(plugin)) {
                    this.plugins.waiting.plugins[type].push(plugin);
                }

                return false;
            }
        }

        /*
        * Check to see if all required services are available
        */
        for (const service of plugin.config.dependencies.services) {
            if (!this.services.installed.hasOwnProperty(service)) {
                /*
                * Create waiting array if it doesn't exist for this type
                */
                if (!this.plugins.waiting.hasOwnProperty(service)) {
                    this.plugins.waiting.services[service] = [];
                }

                /*
                * Push the component to the waiting array if it isn't already
                */
                if (!this.plugins.waiting.services[service].includes(plugin)) {
                    this.plugins.waiting.services[service].push(plugin);
                }

                return false;
            }
        }

        /*
         * Inject plugins
         */
        for (const type of plugin.config.dependencies.plugins) {
            plugin.plugins[type] = this.plugins.installed[type];

            /*
             * Remove the plugin from the waiting array if it exists
             */
            if (this.plugins.waiting.plugins[type]) {
                const index = this.plugins.waiting.plugins[type].indexOf(plugin);
                if (index !== -1) {
                    this.plugins.waiting.plugins[type].splice(index, 1);
                }
            }
        }

         /*
          * Inject services
          */
        for (const service of (plugin as any).config.dependencies.services) {
            plugin.services[service] = this.services.installed[service];

            /*
             * Remove the plugin from the waiting array if it exists
             */
            if (this.plugins.waiting.services[service]) {
                const index = this.plugins.waiting.services[service].indexOf(plugin);
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
            if (this.plugins.installed.hasOwnProperty(type)) {
                throw new Error(`[Manager] Plugin type "${type}" is already defined`);
            }

            this.plugins.installed[type] = plugin;

            /*
             * Attempt to install anything waiting on this component
             */
            if (this.components.waiting.plugins.hasOwnProperty(type)) {
                for (const component of this.components.waiting.plugins[type]) {
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
