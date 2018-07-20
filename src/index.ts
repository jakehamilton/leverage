import {
    PluginUnit,
    PluginConfig,
    PluginConfigInstance,
    PluginInstance,
} from './plugin';
import {
    ServiceUnit,
    ServiceConfig,
    ServiceConfigInstance,
    ServiceInstance,
} from './service';
import {
    ComponentUnit,
    ComponentConfig,
    ComponentConfigInstance,
    ComponentInstance,
} from './component';
import {
    MiddlewareUnit,
    MiddlewareConfig,
    MiddlewareConfigInstance,
    MiddlewareInstance,
} from './middleware';

/**
 * A valid Leverage Unit
 */
export type Unit = PluginUnit | ServiceUnit | ComponentUnit | MiddlewareUnit;

/**
 * A valid Leverage Unit Instance
 */
export type Instance =
    | PluginInstance
    | ServiceInstance
    | ComponentInstance
    | MiddlewareInstance;

/**
 * A valid Leverage Unit config
 */
export type Config =
    | PluginConfig
    | ServiceConfig
    | ComponentConfig
    | MiddlewareConfig;

/**
 * A valid Leverage Unit config with its dependency properties
 */
export type ConfigInstance =
    | PluginConfigInstance
    | ServiceConfigInstance
    | ComponentConfigInstance
    | MiddlewareConfigInstance;

/**
 * Non-specific Leverage Unit
 */
export interface EmptyUnit {
    [x: string]: any;
}

export * from './manager';
export * from './plugin';
export * from './service';
export * from './component';
export * from './middleware';
