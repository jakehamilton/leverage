import { EmptyUnit } from '..';
import { MiddlewareInstanceWithDependencies } from '../middleware';
import { ServiceInstanceWithDependencies } from '../service';

export interface PluginConfig {
    type: string | string[];

    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface PluginConfigWithDependencies extends PluginConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface PluginUnit {
    is: 'plugin';
    config: PluginConfig;

    middleware?: (middleware: MiddlewareInstanceWithDependencies) => void;

    [key: string]: any;
}

// tslint:disable-next-line:no-empty-interface
export interface PluginInstance extends PluginUnit {}

export interface PluginInstanceWithDependencies extends PluginInstance {
    config: PluginConfigWithDependencies;

    plugins: {
        [key: string]: PluginInstanceWithDependencies;
    };

    services: {
        [key: string]: ServiceInstanceWithDependencies;
    };
}

export function Plugin (config: any) {
    /*
     * Inheritance pattern
     */
    if (this instanceof Plugin) {
        (this as PluginUnit).is = 'plugin';

        /*
         * Break early since this is all we need
         */
        return null as any;
    }

    /*
     * Minimal decorator pattern
     */
    if (typeof config === 'function') {
        (config as PluginUnit).is = 'plugin';
        (config as any).prototype.is = 'plugin';

        /*
         * Break early since this is all we need
         */
        return null as any;
    }

    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(
            `[Plugin] Invalid config, expected "Object" but got "${typeof config}"`,
        );
    }

    if (!config.hasOwnProperty('type')) {
        throw new Error(
            `[Plugin] Invalid config, expected a \`type\` property`,
        );
    }

    if (typeof config.type !== 'string' && !Array.isArray(config.type)) {
        throw new Error(
            // tslint:disable-next-line:max-line-length
            `[Plugin] Invalid config, expected a string or array of strings for the property \`type\` but got "${typeof config.type}"`,
        );
    }

    /*
     * Create a copy of the config
     */
    const copy: PluginConfig = Object.assign({}, config);

    /**
     * Extend a class with a Leverage Plugin Configuration
     */
    function decorator (plugin: PluginUnit | EmptyUnit): void {
        /*
         * Extend the given plugin class
         */
        plugin.config = copy;
        (plugin as any).prototype.config = copy;

        /*
        * Set the kind of leverage unit this is
        */
        plugin.is = 'plugin';
        (plugin as any).prototype.is = 'plugin';
    }

    return decorator;
}

export default Plugin;
