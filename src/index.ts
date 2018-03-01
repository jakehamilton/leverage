import Manager from './manager';

import {
    Plugin,
    PluginUnit,
    PluginConfig,
    PluginConfigWithDependencies,
    PluginInstanceWithDependencies,
} from './plugin';
import {
    Service,
    ServiceUnit,
    ServiceConfig,
    ServiceConfigWithDependencies,
    ServiceInstanceWithDependencies,
} from './service';
import {
    Component,
    ComponentUnit,
    ComponentConfig,
    ComponentConfigWithDependencies,
} from './component';
import {
    Middleware,
    MiddlewareUnit,
    MiddlewareConfig,
    MiddlewareConfigWithDependencies,
} from './middleware';

/**
 * A valid (and useful) Leverage unit
 */
export type LeverageUnit =
    | PluginUnit
    | ServiceUnit
    | ComponentUnit
    | MiddlewareUnit;

/**
 * A valid Leverage unit config
 */
export type LeverageConfig =
    | PluginConfig
    | ServiceConfig
    | ComponentConfig
    | MiddlewareConfig;

/**
 * A valid Leverage unit config with its dependency properties
 */
export type LeverageConfigWithDependencies =
    | PluginConfigWithDependencies
    | ServiceConfigWithDependencies
    | ComponentConfigWithDependencies
    | MiddlewareConfigWithDependencies;

/**
 * Non-specific leverage unit
 */
export interface EmptyUnit {
    [x: string]: any;
}

export interface LeverageInstance {
    is: string;
    config: LeverageConfig;

    [key: string]: any;
}

export interface LeverageInstanceWithDependencies extends LeverageInstance {
    config: LeverageConfigWithDependencies;

    plugins: {
        [key: string]: PluginInstanceWithDependencies;
    };

    services: {
        [key: string]: ServiceInstanceWithDependencies;
    };
}

export default {
    Manager,

    Plugin,
    Service,
    Component,
    Middleware,
};

export * from './manager';
export * from './plugin';
export * from './service';
export * from './component';
export * from './middleware';
