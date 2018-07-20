import { EmptyUnit } from '..';
import { PluginInstance } from '../plugin';
import { ServiceInstance } from '../service';

export interface ComponentConfig {
    dependencies?: {
        plugins?: string[];
        services?: string[];
    };

    [key: string]: any;
}

export interface ComponentConfigInstance extends ComponentConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    };
}

export interface ComponentUnit extends EmptyUnit {
    is: 'component';
    type: string | string[];
    config?: ComponentConfig;
}

export interface ComponentInstance extends ComponentUnit {
    config: ComponentConfigInstance;

    plugins: {
        [key: string]: PluginInstance;
    };

    services: {
        [key: string]: ServiceInstance;
    };
}

export class Component implements Partial<ComponentUnit> {
    is: 'component' = 'component';
    type = 'unknown';

    constructor (unit?: Partial<ComponentUnit>) {
        if (unit) {
            Object.assign(this, unit);
        }
    }
}
