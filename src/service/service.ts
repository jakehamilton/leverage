import { ServiceUnit, ServiceConfig } from '../../types/service';
import { EmptyUnit } from '../../types/leverage';

function Service (config: any) {
    /*
     * Inheritance pattern
     */
    if (this instanceof Service) {
        (this as ServiceUnit).is = 'service';

        /*
         * Break early since this is all we need
         */
        return (null as any);
    }

    /*
     * Minimal decorator pattern
     */
    if (typeof config === 'function') {
        (config as ServiceUnit).is = 'service';
        (config as any).prototype.is = 'service';

        /*
         * Break early since this is all we need
         */
        return (null as any);
    }

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
    const copy: ServiceConfig = Object.assign({}, config);

    /**
     * Extend a class with Leverage Plugin Configuration
     */
    function decorator (service: ServiceUnit | EmptyUnit): void {
        /*
         * Extend the given service class
         */
        (service as ServiceUnit).config = copy;
        (service as any).prototype.config = copy;

        /*
        * Set the kind of leverage unit this is
        */
        (service as ServiceUnit).is = 'service';
        (service as any).prototype.is = 'service';
    }

    return decorator;
}

export default Service;
