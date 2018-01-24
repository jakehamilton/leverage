import { PluginUnit, PluginConfig, PluginConfigWithDependencies, PluginInstanceWithDependencies } from './plugin';
import { ServiceUnit, ServiceConfig, ServiceConfigWithDependencies, ServiceInstanceWithDependencies } from './service';
import { ComponentUnit, ComponentConfig, ComponentConfigWithDependencies } from './component';
import { MiddlewareUnit, MiddlewareConfig, MiddlewareConfigWithDependencies } from './middleware';

type LeverageUnit = PluginUnit | ServiceUnit | ComponentUnit | MiddlewareUnit;
type LeverageConfig = PluginConfig | ServiceConfig | ComponentConfig | MiddlewareConfig;
type LeverageConfigWithDependencies = PluginConfigWithDependencies | ServiceConfigWithDependencies | ComponentConfigWithDependencies | MiddlewareConfigWithDependencies;

interface EmptyUnit {
    [x: string]: any;
}

interface LeverageInstance {
    is: string;
    config: LeverageConfig;

    [key: string]: any;
}

interface LeverageInstanceWithDependencies extends LeverageInstance {
  config: LeverageConfigWithDependencies;

  plugins: {
    [key: string]: PluginInstanceWithDependencies;
  }

  services: {
    [key: string]: ServiceInstanceWithDependencies;
  }
}

export {
    EmptyUnit,
    LeverageUnit,
    LeverageConfig,
    LeverageInstance,
    LeverageInstanceWithDependencies,
};
