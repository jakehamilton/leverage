import { ComponentUnit, ComponentConfig } from '../../types/component';

function Component (config: ComponentConfig) {
    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(`[Component] Invalid config, expected "Object" but got "${typeof config}"`);
    }

    if (!config.hasOwnProperty('type')) {
        throw new Error(`[Component] Invalid config, expected a \`type\` property`);
    }

    if (typeof config.type !== 'string' && !Array.isArray(config.type)) {
        // tslint:disable-next-line:max-line-length
        throw new Error(`[Component] Invalid config, expected a string or array of strings for the property \`type\` but got "${typeof config.type}"`);
    }

    /*
     * Create a copy of the config
     */
    config = Object.assign({}, config);

    /*
     * Set the kind of leverage unit this is
     */
    config.is = 'component';

    /**
     * Extend a class with a Leverage Component Configuration
     */
    function decorator<T extends ComponentUnit> (component: T): void {
        /*
         * Extend the given component class
         */
        (component as any).config = config;
        (component as any).prototype.config = config;

        (component as any).plugins = {};
        (component as any).services = {};
    }

    return decorator;
}

export default Component;
