import { EmptyUnit } from '..';
import { PluginInstance } from '../plugin';

export interface ServiceConfig {
    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface ServiceConfigInstance extends ServiceConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface ServiceUnit extends EmptyUnit {
    is: 'service';
    name: string;
    config?: ServiceConfig;
}

export interface ServiceInstance extends ServiceUnit {
    config: ServiceConfigInstance;

    plugins: {
        [key: string]: PluginInstance;
    };

    services: {
        [key: string]: ServiceInstance;
    };
}

export class Service implements Partial<ServiceUnit> {
    is: 'service' = 'service';
    name = 'unknown';

    constructor (unit?: Partial<ServiceUnit>) {
        if (unit) {
            Object.assign(this, unit);
        }
    }
}
