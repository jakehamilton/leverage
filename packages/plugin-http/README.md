# @leverage/plugin-http

> An HTTP plugin for Leverage.

## Install

```shell
# Using NPM
npm install @leverage/plugin-http

# Using Yarn
yarn add @leverage/plugin-http
```

## Documentation

### Plugin Install

To install the HTTP Plugin, add `http` to Leverage.

```js
import { add } from "@leverage/core";
import { http } from "@leverage/plugin-http";

add(http);
```

### Events

The HTTP Plugin can be configured using events. The server can also be told to start listening.

```js
import { add, emit } from "@leverage/core";
import { http } from "@leverage/plugin-http";

add(http);

// Configure the Fastify instance
await emit("http:configure", {
    /*
     * All configuration options are passed directly to the Fastify server.
     * https://www.fastify.io/docs/latest/Server/
     */
    ignoreTrailingSlash: true,
});

// Tell the server to start listening on a port
await signal("http:listen", {
    port: 8080,
});
```

### Components

A HTTP component holds configuration for a route.

```js
import { useHTTP } from "@leverage/plugin-http";

export const init = () => {
    useHTTP({
        /*
         * All configuration options are passed directly to `fastify.route()`.
         * https://www.fastify.io/docs/latest/Routes/
         */
        path: "/hello-world",
        method: "GET",
    });
};

// Any Fastify handlers/callbacks are also passed to `fastify.route()`.
export const handler = (request, reply) => {
    /* ... */
};
export const preHandler = (request, reply) => {
    /* ... */
};
export const onSend = (request, reply) => {
    /* ... */
};
```

Additionally, connect-style middleware can be used by exporting a `middleware` function.

```js
import { useHTTP } from "@leverage/plugin-http";
import cors from "cors";

export const init = () => {
    useHTTP();
};

export const middleware = cors();
```

### Hooks

#### `useHTTP`

The `useHTTP` hook can be used to configure an HTTP component.

```js
import { useHTTP } from "@leverage/plugin-http";

export const init = () => {
    useHTTP({
        /*
         * All configuration options are passed directly to `fastify.route()`.
         * https://www.fastify.io/docs/latest/Routes/
         */
        path: "/hello-world",
        method: "GET",
    });
};
```

```js
import { useHTTP } from "@leverage/plugin-http";

export const init = () => {
    /*
     * When called without a config, the component is still configured for use
     *  with the HTTP plugin. This is useful when used for middleware with the
     *  `useMiddleware` hook.
     */
    useHTTP();
};
```
