import { ServiceUnit, ServiceConfig } from '../../types/service';

function Service (config: ServiceConfig) {
    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(`[Service] Invalid config, expected "Object" but got "${typeof config}"`);
    }

    if (!config.hasOwnProperty('name')) {
        throw new Error(`[Service] Invalid config, expected a \`name\` property`);
    }

    if (typeof config.name !== 'string') {
        throw new Error(`[Service] Invalid config, expected name to be a "string" but got "${typeof config.name}"`);
    }

    /*
     * Create a copy of the config
     */
    config = Object.assign({}, config);

    /*
     * Set the kind of leverage unit this is
     */
    config.is = 'service';

    /**
     * Extend a class with Leverage Plugin Configuration
     */
    function decorator<T extends ServiceUnit> (service: T): void {
        /*
         * Extend the given service class
         */
        (service as any).prototype.config = config;
    }

    return decorator;
}

export default Service;
