import { EmptyUnit } from './leverage';
import { PluginInstanceWithDependencies } from './plugin';

interface ServiceConfig {
  name: string;

  dependencies?: {
    plugins?: string[];
    services?: string[];
  }

  [key: string]: any;
}

interface ServiceConfigWithDependencies extends ServiceConfig {
  dependencies: {
    plugins: string[];
    services: string[];
  }
}

interface ServiceUnit {
  is: 'service';
  config: ServiceConfig;

  [key: string]: any;
}

interface ServiceInstance extends ServiceUnit {}

interface ServiceInstanceWithDependencies extends ServiceInstance {
  config: ServiceConfigWithDependencies;

  plugins: {
    [key: string]: PluginInstanceWithDependencies;
  }

  services: {
    [key: string]: ServiceInstanceWithDependencies;
  }
}

declare function Service (config: any | ServiceConfig):
  any | ((service: ServiceUnit | EmptyUnit) => void);

export default Service;

export {
  Service,
  ServiceUnit,
  ServiceConfig,
  ServiceInstance,
  ServiceConfigWithDependencies,
  ServiceInstanceWithDependencies,
};
