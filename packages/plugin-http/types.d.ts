import {
    Unit,
    Plugin,
    Component,
    UnitConfig,
    UnitIs,
    EventHandler,
    Unsubscribe,
} from "@leverage/core";
import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";
import {
    RouteOptions,
    RouteShorthandMethod,
    RouteGenericInterface,
    DefaultRoute,
} from "fastify/types/route";
import {
    RawServerBase,
    RawRequestDefaultExpression,
    RawServerDefault,
    RawReplyDefaultExpression,
    ContextConfigDefault,
} from "fastify/types/utils";
import { NextHandleFunction, SimpleHandleFunction } from "connect";

type RouteHandler = SimpleHandleFunction | NextHandleFunction;

type BaseHTTPConfig<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<
        RawServer
    > = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<
        RawServer
    > = RawReplyDefaultExpression<RawServer>,
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault
> = RouteOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig>;

type HTTPConfigExclusions =
    | "onRequest"
    | "preParsing"
    | "preValidation"
    | "preHandler"
    | "preSerialization"
    | "onSend"
    | "onResponse"
    | "handler"
    | "errorHandler"
    | "validatorCompiler"
    | "serializerCompiler"
    | "schemaErrorFormatter";

export type HTTPConfig = Omit<BaseHTTPConfig, HTTPConfigExclusions> & {
    path: BaseHTTPConfig["url"];
};

export type HTTPUnitConfig<Is extends UnitIs> = UnitConfig<Is, "http"> & {
    http: HTTPConfig;
};

export function useHTTP(): HTTPUnitConfig<"component">;
export function useHTTP(
    config: Partial<HTTPConfig>
): HTTPUnitConfig<"component">;

export function useHTTPDependency(): void;

export interface HTTPPlugin extends Plugin<"plugin"> {
    install: (unit: Component<"plugin">) => void;
    useFastify: () => FastifyInstance;
}

export const http: HTTPPlugin;

export interface HTTPListenEventPayload {
    port: number;
}

export interface HTTPStartEventPayload {
    port: number;
}

export interface HTTPCloseEventPayload {
    port: number;
}

type HTTPConfigureEventPayload = Parameters<typeof fastify>;

declare module "@leverage/core" {
    export function usePlugin(type: "http"): HTTPPlugin;

    export function useEvent(
        event: "http:listen",
        handler: EventHandler<HTTPListenEventPayload>
    ): Unsubscribe<"http:listen">;

    export function useEvent(
        event: "http:listening",
        handler: EventHandler<HTTPListenEventPayload>
    ): Unsubscribe<"http:listening">;

    export function useEvent(
        event: "http:close",
        handler: EventHandler<HTTPCloseEventPayload>
    ): Unsubscribe<"http:close">;

    export function useEvent(
        event: "http:closed",
        handler: EventHandler<undefined>
    ): Unsubscribe<"http:close">;

    export function useEvent(
        event: "http:configure",
        handler: EventHandler<HTTPConfigureEventPayload>
    ): Unsubscribe<"http:configure">;

    export function useEvent(
        event: "http:configured",
        handler: EventHandler<undefined>
    ): Unsubscribe<"http:configured">;

    export function emit(
        type: "http:listen",
        event: HTTPListenEventPayload
    ): void;
    export function on(
        type: "http:listen",
        handler: EventHandler<HTTPListenEventPayload>
    ): void;
    export function off(
        type: "http:listen",
        handler: EventHandler<HTTPListenEventPayload>
    ): void;
    export function once(
        type: "http:listen",
        handler: EventHandler<HTTPListenEventPayload>
    ): void;

    export function emit(
        type: "http:listening",
        event: HTTPStartEventPayload
    ): void;
    export function on(
        type: "http:listening",
        handler: EventHandler<HTTPStartEventPayload>
    ): void;
    export function off(
        type: "http:listening",
        handler: EventHandler<HTTPStartEventPayload>
    ): void;
    export function once(
        type: "http:listening",
        handler: EventHandler<HTTPStartEventPayload>
    ): void;

    export function emit(
        type: "http:close",
        event: HTTPCloseEventPayload
    ): void;
    export function on(
        type: "http:close",
        handler: EventHandler<HTTPCloseEventPayload>
    ): void;
    export function off(
        type: "http:close",
        handler: EventHandler<HTTPCloseEventPayload>
    ): void;
    export function once(
        type: "http:close",
        handler: EventHandler<HTTPCloseEventPayload>
    ): void;

    export function emit(type: "http:closed", event: undefined): void;
    export function on(
        type: "http:closed",
        handler: EventHandler<undefined>
    ): void;
    export function off(
        type: "http:closed",
        handler: EventHandler<undefined>
    ): void;
    export function once(
        type: "http:closed",
        handler: EventHandler<undefined>
    ): void;

    export function emit(
        type: "http:configure",
        event: HTTPConfigureEventPayload
    ): void;
    export function on(
        type: "http:configure",
        handler: EventHandler<HTTPConfigureEventPayload>
    ): void;
    export function off(
        type: "http:configure",
        handler: EventHandler<HTTPConfigureEventPayload>
    ): void;
    export function once(
        type: "http:configure",
        handler: EventHandler<HTTPConfigureEventPayload>
    ): void;

    export function emit(type: "http:configured", event: undefined): void;
    export function on(
        type: "http:configured",
        handler: EventHandler<undefined>
    ): void;
    export function off(
        type: "http:configured",
        handler: EventHandler<undefined>
    ): void;
    export function once(
        type: "http:configured",
        handler: EventHandler<undefined>
    ): void;
}
