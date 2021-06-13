import { NextHandleFunction, SimpleHandleFunction } from "connect";
import {
    Unit,
    Plugin,
    Component,
    UnitConfig,
    UnitIs,
    EventHandler,
    Unsubscribe,
} from "@leverage/core";
import { Express, NextFunction, Request, Response } from "express";

export type Method = "get" | "put" | "post" | "patch" | "delete" | "options";

export type HTTPConfig = {
    path?: string;
    method?: Method;
};

export type HTTPUnitConfig<Is extends UnitIs> = UnitConfig<Is, "http"> & {
    http: HTTPConfig;
};

export function useHTTP(): HTTPUnitConfig<"component">;
export function useHTTP(
    config: Partial<HTTPConfig>
): HTTPUnitConfig<"component">;

export type Handler = (
    request: Request,
    response: Response,
    next: NextFunction
) => void;

export function useHTTPDependency(): void;

export interface HTTPPlugin extends Plugin<"plugin"> {
    install: (unit: Component<"plugin">) => void;
    useApp: () => Express;
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

export interface HTTPResetEventPayload {
    port: number;
}

declare module "@leverage/core" {
    export function usePlugin(type: "http"): HTTPPlugin;

    export function useEvent(
        event: "http:listen",
        handler: EventHandler<HTTPListenEventPayload>
    ): Unsubscribe<"http:listen">;

    export function useEvent(
        event: "http:listen:start",
        handler: EventHandler<HTTPListenEventPayload>
    ): Unsubscribe<"http:listen:start">;

    export function useEvent(
        event: "http:close",
        handler: EventHandler<HTTPCloseEventPayload>
    ): Unsubscribe<"http:close">;

    export function useEvent(
        event: "http:reset",
        handler: EventHandler<HTTPResetEventPayload>
    ): Unsubscribe<"http:reset">;

    export function emit(
        type: "http:listen",
        event: HTTPListenEventPayload
    ): void;

    export function emit(
        type: "http:listen:start",
        event: HTTPStartEventPayload
    ): void;

    export function emit(
        type: "http:close",
        event: HTTPCloseEventPayload
    ): void;

    export function emit(
        type: "http:reset",
        event: HTTPResetEventPayload
    ): void;
}
