import { ServiceInstanceWithDependencies } from './service';
import { EmptyUnit } from './leverage';
import { MiddlewareInstanceWithDependencies } from './middleware';

interface PluginConfig {
  type: string | string[];

  dependencies?: {
    plugins?: string[];
    services?: string[];
  }

  [key: string]: any;
}

interface PluginConfigWithDependencies extends PluginConfig {
  dependencies: {
    plugins: string[];
    services: string[];
  }
}

interface PluginUnit {
  is: 'plugin';
  config: PluginConfig;

  middleware?: (middleware: MiddlewareInstanceWithDependencies) => void;

  [key: string]: any;
}

interface PluginInstance extends PluginUnit {}

interface PluginInstanceWithDependencies extends PluginInstance {
  config: PluginConfigWithDependencies;

  plugins: {
    [key: string]: PluginInstanceWithDependencies;
  }

  services: {
    [key: string]: ServiceInstanceWithDependencies;
  }
}

declare function Plugin (config: any | PluginConfig):
  any | ((plugin: PluginUnit | EmptyUnit) => void);

export default Plugin;

export {
  Plugin,
  PluginUnit,
  PluginConfig,
  PluginInstance,
  PluginConfigWithDependencies,
  PluginInstanceWithDependencies,
};
