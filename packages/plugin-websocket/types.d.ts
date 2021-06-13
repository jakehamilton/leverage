import { Plugin } from "@leverage/core";

export interface WebSocketPlugin extends Plugin {}

declare module "@leverage/core" {
    export function usePlugin(type: "websocket"): WebSocketPlugin;
}
