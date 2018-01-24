import { ServiceInstanceWithDependencies } from './service';
import { EmptyUnit } from './leverage';

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

declare function Plugin (config: PluginConfig):
  (plugin: PluginUnit | EmptyUnit) => void;

export default Plugin;

export {
  Plugin,
  PluginUnit,
  PluginConfig,
  PluginInstance,
  PluginConfigWithDependencies,
  PluginInstanceWithDependencies,
};
