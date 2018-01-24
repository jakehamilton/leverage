import { EmptyUnit } from './leverage';
import { PluginInstanceWithDependencies } from './plugin';
import { ServiceInstanceWithDependencies } from './service';

interface ComponentConfig {
    type: string | string[];

    dependencies?: {
        plugins?: string[];
        services?: string[];
    }

    [key: string]: any;
}

interface ComponentConfigWithDependencies extends ComponentConfig {
    dependencies: {
        plugins: string[];
        services: string[];
    }
}

interface ComponentUnit {
    is: 'component';
    config: ComponentConfig;

    [key: string]: any;
}

interface ComponentInstance extends ComponentUnit {}

interface ComponentInstanceWithDependencies extends ComponentInstance {
    config: ComponentConfigWithDependencies;

    plugins: {
        [key: string]: PluginInstanceWithDependencies;
    }

    services: {
        [key: string]: ServiceInstanceWithDependencies;
    }
}

declare function Component (config: ComponentConfig):
    (component: ComponentUnit | EmptyUnit) => void;

export default Component;

export {
    Component,
    ComponentUnit,
    ComponentConfig,
    ComponentInstance,
    ComponentConfigWithDependencies,
    ComponentInstanceWithDependencies,
};
