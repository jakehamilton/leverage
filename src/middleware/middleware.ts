import { EmptyUnit } from '..';
import { ServiceInstanceWithDependencies } from '../service';
import { PluginInstanceWithDependencies } from '../plugin';

export interface MiddlewareConfig {
    type: string | string[];

    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface MiddlewareConfigWithDependencies extends MiddlewareConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface MiddlewareUnit {
    is: 'middleware';
    config: MiddlewareConfig;

    [key: string]: any;
}

// tslint:disable-next-line:no-empty-interface
export interface MiddlewareInstance extends MiddlewareUnit {}

export interface MiddlewareInstanceWithDependencies extends MiddlewareInstance {
    config: MiddlewareConfigWithDependencies;

    plugins: {
        [key: string]: PluginInstanceWithDependencies;
    };

    services: {
        [key: string]: ServiceInstanceWithDependencies;
    };
}

export function Middleware (config: any) {
    /*
     * Inheritance pattern
     */
    // @ts-ignore
    if (this instanceof Middleware) {
        // @ts-ignore
        (this as MiddlewareUnit).is = 'middleware';

        /*
         * Break early since this is all we need
         */
        return null as any;
    }

    /*
     * Minimal decorator pattern
     */
    if (typeof config === 'function') {
        (config as MiddlewareUnit).is = 'middleware';
        (config as any).prototype.is = 'middleware';

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
            `[Middleware] Invalid config, expected "Object" but got "${typeof config}"`,
        );
    }

    if (!config.hasOwnProperty('type')) {
        throw new Error(
            `[Middleware] Invalid config, expected a \`type\` property`,
        );
    }

    if (typeof config.type !== 'string' && !Array.isArray(config.type)) {
        throw new Error(
            // tslint:disable-next-line:max-line-length
            `[Middleware] Invalid config, expected a string or array of strings for the property \`type\` but got "${typeof config.type}"`,
        );
    }

    /*
     * Create a copy of the config
     */
    const copy: MiddlewareConfig = Object.assign({}, config);

    /**
     * Extend a class with a Leverage Middleware Configuration
     */
    function decorator (middleware: MiddlewareUnit | EmptyUnit): void {
        /*
         * Extend the given middleware class
         */
        middleware.config = copy;
        (middleware as any).prototype.config = copy;

        /*
        * Set the kind of leverage unit this is
        */
        middleware.is = 'middleware';
        (middleware as any).prototype.is = 'middleware';
    }

    return decorator;
}
