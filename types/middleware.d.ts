import { PluginInstanceWithDependencies } from "./plugin";
import { ServiceInstanceWithDependencies } from "./service";
import { EmptyUnit } from "./leverage";

interface MiddlewareConfig {
  type: string | string[];

  dependencies?: {
    plugins?: string[];
    services?: string[];
  }

  [key: string]: any;
}

interface MiddlewareConfigWithDependencies extends MiddlewareConfig {
  dependencies: {
    plugins: string[];
    services: string[];
  }
}

interface MiddlewareUnit {
  is: 'middleware';
  config: MiddlewareConfig;

  [key: string]: any;
}

interface MiddlewareInstance extends MiddlewareUnit {}

interface MiddlewareInstanceWithDependencies extends MiddlewareInstance {
  config: MiddlewareConfigWithDependencies;

  plugins: {
    [key: string]: PluginInstanceWithDependencies;
  }

  services: {
    [key: string]: ServiceInstanceWithDependencies;
  }
}

declare function Middleware (config: MiddlewareConfig):
  (middleware: MiddlewareUnit | EmptyUnit) => void;

export default Middleware;

export {
    Middleware,
    MiddlewareUnit,
    MiddlewareConfig,
    MiddlewareInstance,
    MiddlewareConfigWithDependencies,
    MiddlewareInstanceWithDependencies,
};
