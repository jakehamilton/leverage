import { PluginUnit, PluginConfig } from '../../types/plugin';
import { EmptyUnit } from '../../types/leverage';

function Plugin (config: PluginConfig) {
    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(`[Plugin] Invalid config, expected "Object" but got "${typeof config}"`);
    }

    if (!config.hasOwnProperty('type')) {
        throw new Error(`[Plugin] Invalid config, expected a \`type\` property`);
    }

    if (typeof config.type !== 'string' && !Array.isArray(config.type)) {
        // tslint:disable-next-line:max-line-length
        throw new Error(`[Plugin] Invalid config, expected a string or array of strings for the property \`type\` but got "${typeof config.type}"`);
    }

    /*
     * Create a copy of the config
     */
    config = Object.assign({}, config);

    /**
     * Extend a class with a Leverage Plugin Configuration
     */
    function decorator (plugin: PluginUnit | EmptyUnit): void {
        /*
         * Extend the given plugin class
         */
        plugin.config = config;
        (plugin as any).prototype.config = config;

        /*
        * Set the kind of leverage unit this is
        */
        plugin.is = 'plugin';
        (plugin as any).prototype.is = 'plugin';
    }

    return decorator;
}

export default Plugin;
