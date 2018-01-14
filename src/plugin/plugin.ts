import { PluginUnit, PluginConfig } from '../../types/plugin';

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

    /*
     * Set the kind of leverage unit this is
     */
    config.is = 'plugin';

    /**
     * Extend a class with a Leverage Plugin Configuration
     */
    function decorator<T extends PluginUnit> (plugin: T): void {
        /*
         * Extend the given plugin class
         */
        (plugin as any).prototype.config = config;
    }

    return decorator;
}

export default Plugin;
