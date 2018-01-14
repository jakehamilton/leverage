import { MiddlewareUnit, MiddlewareConfig } from '../types/middleware';

function Middleware (config: MiddlewareConfig) {
    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(`[Middleware] Invalid config, expected "Object" but got "${typeof config}"`);
    }

    if (!config.hasOwnProperty('type')) {
        throw new Error(`[Middleware] Invalid config, expected a \`type\` property`);
    }

    if (typeof config.type !== 'string' && !Array.isArray(config.type)) {
        // tslint:disable-next-line:max-line-length
        throw new Error(`[Middleware] Invalid config, expected a string or array of strings for the property \`type\` but got "${typeof config.type}"`);
    }

    /*
     * Create a copy of the config
     */
    config = Object.assign({}, config);

    /*
     * Set the kind of leverage unit this is
     */
    config.is = 'middleware';

    /**
     * Extend a class with a Leverage Middleware Configuration
     */
    function decorator<T extends MiddlewareUnit> (middleware: T): void {
        /*
         * Extend the given middleware class
         */
        (middleware as any).prototype.config = config;
    }

    return decorator;
}

export default Middleware;
