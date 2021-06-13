# @leverage/plugin-websocket

> A Websocket plugin for Leverage

## Install

```shell
# Using NPM
npm install @leverage/plugin-websocket

# Using Yarn
yarn add @leverage/plugin-websocket
```

## Documentation

### Plugin Install

To install the WebSocket Plugin, add `websocket` to Leverage.

```js
import { add } from "@leverage/core";
import { websocket } from "@leverage/plugin-websocket";

add(websocket);
```

### Events

The WebSocket Plugin can be configured using events. The server can also be told to attach to a HTTP plugin.

```js
import { add, emit } from "@leverage/core";
import { websocket } from "@leverage/plugin-websocket";

add(http);

// Configure the Fastify instance.
await emit("websocket:configure", {
    /*
     * All configuration options are passed directly to socket.io.
     * https://socket.io/docs/v4/server-api/
     */
});

// Tell the server to attach to the HTTP plugin.
await signal("websocket:attach");
```

### Components

A WebSocket component holds configuration for an event.

```js
import { useWebSocket } from "@leverage/plugin-websocket";

export const init = () => {
    useWebSocket({
        event: "my-event",
    });
};

/*
 * A handler must be provided to handle the event. The handler
 *  receives the socket that triggered the event and any data
 *  from the event.
 */
export const handler = (socket, data) => {};
```

### Hooks

#### `useWebSocket`

The `useWebSocket` hook can be used to configure a WebSocket component.

```js
import { useWebSocket } from "@leverage/plugin-websocket";

export const init = () => {
    useWebSocket({
        event: "my-event",
    });
};
```
