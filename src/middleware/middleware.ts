import { EmptyUnit } from '..';
import { ServiceInstance } from '../service';
import { PluginInstance } from '../plugin';

export interface MiddlewareConfig {
    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface MiddlewareConfigInstance extends MiddlewareConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface MiddlewareUnit extends EmptyUnit {
    is: 'middleware';
    type: string | string[];
    config?: MiddlewareConfig;
}

export interface MiddlewareInstance extends MiddlewareUnit {
    config: MiddlewareConfigInstance;

    plugins: {
        [key: string]: PluginInstance;
    };

    services: {
        [key: string]: ServiceInstance;
    };
}

export class Middleware implements Partial<MiddlewareUnit> {
    is: 'middleware' = 'middleware';
    type = 'unknown';

    constructor (unit?: Partial<MiddlewareUnit>) {
        if (unit) {
            Object.assign(this, unit);
        }
    }
}
