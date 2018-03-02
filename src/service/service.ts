import { EmptyUnit } from '..';
import { PluginInstanceWithDependencies } from '../plugin';

export interface ServiceConfig {
    name: string;

    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface ServiceConfigWithDependencies extends ServiceConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface ServiceUnit {
    is: 'service';
    config: ServiceConfig;

    [key: string]: any;
}

// tslint:disable-next-line:no-empty-interface
export interface ServiceInstance extends ServiceUnit {}

export interface ServiceInstanceWithDependencies extends ServiceInstance {
    config: ServiceConfigWithDependencies;

    plugins: {
        [key: string]: PluginInstanceWithDependencies;
    };

    services: {
        [key: string]: ServiceInstanceWithDependencies;
    };
}

export function Service (config: any) {
    /*
     * Inheritance pattern
     */
    if (this instanceof Service) {
        (this as ServiceUnit).is = 'service';

        /*
         * Break early since this is all we need
         */
        return null as any;
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
        return null as any;
    }

    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(
            `[Service] Invalid config, expected "Object" but got "${typeof config}"`,
        );
    }

    if (!config.hasOwnProperty('name')) {
        throw new Error(
            `[Service] Invalid config, expected a \`name\` property`,
        );
    }

    if (typeof config.name !== 'string') {
        throw new Error(
            `[Service] Invalid config, expected name to be a "string" but got "${typeof config.name}"`,
        );
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
