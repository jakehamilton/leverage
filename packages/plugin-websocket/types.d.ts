import { Component, Plugin, UnitConfig } from "@leverage/core";
import SocketIO from "socket.io";

export interface WebSocketPlugin extends Plugin<"websocket"> {
    install: (unit: Component<"websocket">) => void;
    useIO: () => SocketIO.Server;
}

export const websocket: WebSocketPlugin;

export interface WebSocketConfig {
    event: string;
}

export interface WebSocketUnitConfig extends UnitConfig<"plugin", "websocket"> {
    websocket: WebSocketConfig;
}

export function useWebSocket(config: WebSocketUnitConfig): WebSocketUnitConfig;

export function useIO(): SocketIO.Server;

type WebSocketConfigureEventPayload = SocketIO.ServerOptions;

declare module "@leverage/core" {
    export function usePlugin(type: "websocket"): WebSocketPlugin;

    export function useEvent(
        event: "websocket:configure",
        handler: EventHandler<WebSocketConfigureEventPayload>
    ): Unsubscribe<"websocket:configure">;
    export function on(
        event: "websocket:configure",
        handler: EventHandler<WebSocketConfigureEventPayload>
    ): void;
    export function off(
        event: "websocket:configure",
        handler: EventHandler<WebSocketConfigureEventPayload>
    ): void;
    export function once(
        event: "websocket:configure",
        handler: EventHandler<WebSocketConfigureEventPayload>
    ): void;
    export function emit(
        event: "websocket:configure",
        payload: WebSocketConfigureEventPayload
    ): void;

    export function useEvent(
        event: "websocket:attach",
        handler: EventHandler<undefined>
    ): Unsubscribe<"websocket:attach">;
    export function on(
        event: "websocket:attach",
        handler: EventHandler<undefined>
    ): void;
    export function off(
        event: "websocket:attach",
        handler: EventHandler<undefined>
    ): void;
    export function once(
        event: "websocket:attach",
        handler: EventHandler<undefined>
    ): void;
    export function emit(event: "websocket:attach", payload: undefined): void;

    export function useEvent(
        event: "websocket:attached",
        handler: EventHandler<undefined>
    ): Unsubscribe<"websocket:attached">;
    export function on(
        event: "websocket:attached",
        handler: EventHandler<undefined>
    ): void;
    export function off(
        event: "websocket:attached",
        handler: EventHandler<undefined>
    ): void;
    export function once(
        event: "websocket:attached",
        handler: EventHandler<undefined>
    ): void;
    export function emit(event: "websocket:attached", payload: undefined): void;
}
