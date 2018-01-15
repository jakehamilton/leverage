import { PluginInstance } from './plugin';

interface ServiceConfig {
    is?: 'service';
    name: string | string[];

    [name: string]: any;
}

interface ServiceUnit {
    [key: string]: any;
}

interface ServiceInstance extends ServiceComponent {
    config: ServiceConfig;

    plugins: {
        [name: string]: PluginInstance;
    };

    services: {
        [name: string]: ServiceInstance
    };
}

declare function Service (config: ServiceConfig):
    <T extends ServiceConfig>(service: T) => void;

export default Service;

export {
    Service,
    ServiceUnit,
    ServiceConfig,
    ServiceInstance,
};
