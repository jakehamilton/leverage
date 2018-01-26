import { PluginUnit, PluginConfig } from '../../types/plugin';
import { EmptyUnit } from '../../types/leverage';

function Plugin (config: any) {
    /*
     * Inheritance pattern
     */
    if (this instanceof Plugin) {
        (this as PluginUnit).is = 'plugin';

        /*
         * Break early since this is all we need
         */
        return (null as any);
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
        return (null as any);
    }

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
