import { PluginInstance } from './plugin';
import { ServiceInstance } from './service';

interface ComponentConfig {
    is?: 'component';
    type: string | string[];

    dependencies?: {
        plugins?: string[];
        services?: string[];
    }

    [name: string]: any;
}

interface ComponentUnit {
    [key: string]: any;
}

interface ComponentInstance extends ComponentUnit {
    config: ComponentConfig;

    plugins: {
        [name: string]: PluginInstance;
    };

    services: {
        [name: string]: ServiceInstance
    };
}

declare function Component (config: ComponentConfig):
    <T extends ComponentUnit>(component: T) => void;

export default Component;

export {
    Component,
    ComponentUnit,
    ComponentConfig,
    ComponentInstance,
};
