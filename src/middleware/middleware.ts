import { MiddlewareUnit, MiddlewareConfig } from '../../types/middleware';
import { EmptyUnit } from '../../types/leverage';

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

    /**
     * Extend a class with a Leverage Middleware Configuration
     */
    function decorator (middleware: MiddlewareUnit | EmptyUnit): void {
        /*
         * Extend the given middleware class
         */
        middleware.config = config;
        (middleware as any).prototype.config = config;

        /*
        * Set the kind of leverage unit this is
        */
        middleware.is = 'middleware';
        (middleware as any).prototype.is = 'middleware';
    }

    return decorator;
}

export default Middleware;
