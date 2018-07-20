import { EmptyUnit } from '..';
import { MiddlewareInstance } from '../middleware';
import { ServiceInstance } from '../service';

export interface PluginConfig {
    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface PluginConfigInstance extends PluginConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface PluginUnit {
    is: 'plugin';
    type: string | string[];
    config?: PluginConfig;

    middleware?: (middleware: MiddlewareInstance) => void;

    [key: string]: any;
}

export interface PluginInstance extends PluginUnit {
    config: PluginConfigInstance;

    plugins: {
        [key: string]: PluginInstance;
    };

    services: {
        [key: string]: ServiceInstance;
    };
}

export class Plugin implements PluginUnit {
    is: 'plugin' = 'plugin';
    type = 'unknown';

    constructor (unit?: Partial<PluginUnit>) {
        if (unit) {
            Object.assign(this, unit);
        }
    }
}
