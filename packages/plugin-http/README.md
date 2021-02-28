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

### Signals

The HTTP Plugin can be configured using signals. The server can also be told to
start listening.

```js
import { add, signal } from "@leverage/core";
import { http } from "@leverage/plugin-http";

add(http);

// Configure the Fastify instance
await signal(
    {
        is: "plugin",
        type: "http",
    },
    {
        type: "configure",
        payload: {
            /*
             * All configuration options are passed directly to the Fastify server.
             * https://www.fastify.io/docs/latest/Server/
             */
            ignoreTrailingSlash: true,
        },
    }
);

// Tell the server to start listening on a port
await signal(
    {
        is: "plugin",
        type: "http",
    },
    {
        type: "listen",
        payload: 8080,
    }
);
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

#### `useMiddleware`

Connect-style middleware can be installed with the `useMiddleware` hook.

```js
import { useHTTP, useMiddleware } from "@leverage/plugin-http";
import cors from "cors";

export const init = () => {
    useHTTP();

    /*
     * When called with only a middleware handler, the handler will run on every
     *  route.
     */
    useMiddleware(cors);
};
```

```js
import { useHTTP, useMiddleware } from "@leverage/plugin-http";
import cors from "cors";

export const init = () => {
    useHTTP();

    /*
     * When called with a path and a handler, the handler will only run on the
     *  path provided.
     */
    useMiddleware("/hello-world", cors);
};
```
