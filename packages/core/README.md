<p align="center">
    <img src="https://raw.githubusercontent.com/jakehamilton/leverage/main/.md-assets/logo.png" width="120" height="120" alt="Leverage Logo">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/made_with-love-ff69b4.svg?style=for-the-badge">
</p>

## What is Leverage?

👩‍💻 A small, fast, flexible system to orchestrate your next application!

With Leverage you can easily create:

-   [An HTTP server](https://github.com/jakehamilton/leverage/tree/main/packages/plugin-express)
-   [A WebSocket server](https://github.com/jakehamilton/leverage/tree/main/packages/plugin-socketio)
-   [A Discord bot](https://github.com/jakehamilton/leverage/tree/main/packages/plugin-discord)
-   👩💭 Anything else you can imagine!

## Install

```shell
# Using NPM
npm install @leverage/core

# Using Yarn
yarn add @leverage/core
```

## Examples

Just getting started with Leverage and want to learn from a real-world example? Take a look at these projects!

-   [Simple HTTP Server](https://github.com/jakehamilton/leverage-example-simple-http)
-   [HTTP API w/ SQLite](https://github.com/jakehamilton/leverage-example-http-api)

## Documentation

Table Of Contents

-   [Units](#units)
    -   [Plugins](#plugins)
    -   [Components](#components)
    -   [Services](#services)
-   [Lifecycle](#lifecycle)
    -   [Uninitialized](#uninitialized)
    -   [Installed](#installed)
-   [Hooks](#hooks)
    -   [useConfig](#useConfig)
    -   [useDependencies](#useDependencies)
    -   [useEffect](#useEffect)
    -   [useInstallEffect](#useInstallEffect)
    -   [useIs](#useIs)
    -   [useKeyRef](#useKeyRef)
    -   [usePlugin](#usePlugin)
    -   [useRef](#useRef)
    -   [useService](#useService)
    -   [useSignal](#useSignal)
    -   [useState](#useState)
    -   [useType](#useType)

### Units

Leverage's job is to help wire together your application, installing things only once all dependencies
are satisfied. To accomplish this, Leverage standardizes the "pieces" of an application into three different kinds:

-   Plugin
-   Component
-   Service

Each unit contains a configuration object that specifies two properties. First, `config.is` tells Leverage what kind of unit it is and can be either `"plugin"`, `"component"`, or `"service"`. Second, `config.type` tells Leverage what type this unit is for. The `config.type` value can be any string value and serves as a "name" for a plugin and set of components.

#### Plugins

A Plugin is a unit that has an `install()` method which is passed any added components of the same type as the plugin. For example, if you create a plugin where `config.type` is `"http"`, any components that also have `config.type` set to `"http"` will be passed to your plugin's `install()` method.

Here is an example with a plugin that simply logs out the components it installs:

```js
// index.js
import { add } from "@leverage/core";
import plugin from "./plugin";
import component from "./component";

add(plugin, component);
```

```js
// plugin.js
import { useConfig } from "@leverage/core";

export const init = () => {
    useConfig({
        is: "plugin",
        type: "example",
    });
};

export const install = (component) => {
    console.log("installing component: ", component);
    // => { init: Function, myValue: 42 }
};
```

```js
// component.js
import { useConfig } from "@leverage/core";

export const init = () => {
    useConfig({
        is: "component",
        type: "example",
    });
};

export const myValue = 42;
```

#### Components

A Component is a unit that is passed to a Plugin of the same type. Components serve as ways to configure the systems that Plugins create. For example, a component with the type `"http"` may be used to configure a route for the HTTP server that the HTTP plugin manages. Here's an example of an HTTP component from `@leverage/plugin-http`:

```js
// index.js
import { add } from "@leverage/core";
import { http } from "@leverage/plugin-http";
import component from "./component";

add(http, component);
```

```js
// component.js
import { useHTTP } from "@leverage/plugin-http";

export const init = () => {
    useHTTP({
        route: "/:name",
        method: "get",
    });
};

// The HTTP plugin calls `component.http` when a request comes in.
export const http = (req, res) => {
    res.write(`Hello, ${req.params.name}!`);
    res.end();
};
```

#### Services

A Service is a unit that has access to the same hooks and lifecycle that other units do, but is not directly connected to a Plugin or Component. Services are great for abstracting databases, creating state stores, or other things that don't fit into the Plugin/Component model. Here's an example of how you might create a database service:

```js
// index.js
import { add } from "@leverage/core";
import { http } from "@leverage/plugin-http";
import component from "./component";
import service from "./service";

add(http, component, service);
```

```js
// service.js
import db from "my-db-library";
import { useConfig, useKeyRef, useInstallEffect } from "@leverage/core";

export const init = () => {
    useConfig({
        is: "service",
        type: "database",
    });

    const connectionRef = useKeyRef("connection");

    useInstallEffect(() => {
        db.connect((connection) => {
            connectionRef.current = connection;
        });
    });
};

export const findUser = (name) => {
    const connection = useKeyRef("connection");

    // Database isn't ready yet!
    if (!connection) return;

    return connection.find("user", { name });
};
```

```js
// component.js
import { useDependencies, useService } from "@leverage/core";
import { useHTTP } from "@leverage/plugin-http";

export const init = () => {
    useHTTP({
        route: "/:name",
        method: "get",
    });

    useDependencies({
        service: "database",
    });
};

// The HTTP plugin calls `component.http` when a request comes in.
export const http = (req, res) => {
    const db = useService("database");

    const user = db.findUser(req.params.name);

    res.json(user);
    res.end();
};
```

### Lifecycle

A Unit has two different parts to its lifecycle: `uninitialized` and `installed`.

#### Uninitialized

When a Unit is added to Leverage, it starts as `uninitialized`. Leverage will immediately run the Unit's `init` function. In the `uninitialized` phase, a Unit is limited in what hooks it has access to. During this phase, a Unit can use the following hooks:

-   `useConfig`
-   `useDependencies`
-   `useInstallEffect`
-   `useIs`
-   `useKeyRef`
-   `useSignal`
-   `useType`

In order to successfully initialize, a Unit's `init` function _must_ configure the `config.is` and `config.type` properties using `useConfig`, `useIs`, or `useType`.

#### Installed

Once all dependencies for a Unit are satisfied, a unit will be `installed` by Leverage. During this phase, any install effects created with `useInstallEffect` are run. Additionally, plugins are passed components of the same type. During this phase, a Unit can use the following hooks:

-   `useConfig`
-   `useDependencies`
-   `useEffect`
-   `useIs`
-   `useKeyRef`
-   `usePlugin`
-   `useRef`
-   `useService`
-   `useSignal`
-   `useState`
-   `useType`

However, an install effect created with `useInstallEffect` is limited to the following hooks:

-   `useConfig`
-   `useDependencies`
-   `useIs`
-   `useKeyRef`
-   `usePlugin`
-   `useService`
-   `useSignal`
-   `useType`

### Hooks

Hooks are functions that can be used inside of a Unit's methods to interact with Leverage. Common examples of use cases are to:

-   Configure a Unit
-   Run a function after a Unit has been installed
-   Manage Unit state
-   Get an installed Plugin or Service

#### `useConfig`

The `useConfig` hook can be used in two different ways. It can be used inside of an `init` function to **set** or **get** the configuration. After a unit is initialized, `useConfig` can be used to **get** the current configuration.

```js
import { useConfig, useInstallEffect } from "@leverage/core";

export const init = () => {
    /*
     * Here, `useConfig` **sets** the configuration to...
     *
     *  {
     *      "is": "component",
     *      "type": "http"
     *  }
     *
     * Then this new configuration is returned and stored in the
     *  `config` variable.
     */
    const config = useConfig({
        is: "component",
        type: "http",
    });

    /*
     * Here, `useConfig` updates the configuration to...
     *
     *  {
     *      "is": "component",
     *      "type": "http",
     *      "http": {
     *          "route": "/",
     *          "method": "get"
     *      }
     *  }
     *
     * Then this new configuration is returned and stored in the
     *  `config` variable.
     */
    const newConfig = useConfig({
        http: {
            route: "/",
            method: "get",
        },
    });

    /*
     * Here, `useConfig` **gets** the configuration and stores it in the
     *  `currentConfig` variable.
     */
    const currentConfig = useConfig();

    useInstallEffect(() => {
        /*
         * Here, `useConfig` **gets** the configuration and stores it in
         *  the `finalConfig` variable.
         */
        const finalConfig = useConfig();
    });
};

export const http = () => {
    /*
     * Here, `useConfig` **gets** the configuration and stores it in the
     *  `config` variable.
     */
    const config = useConfig();
};
```

#### `useDependencies`

The `useDependencies` hook can be used in two different ways. It can be used inside of an `init` function to **set** or **get** the dependencies. After a unit is initialized, `useDependencies` can be used to **get** the current dependencies.

```js
import { useDependencies, useInstallEffect } from "@leverage/core";

export const init = () => {
    /*
     * Here, `useDependencies` **sets** the configuration to...
     *
     *  {
     *      "plugins": ["http"],
     *      "services": ["db"]
     *  }
     *
     * Then this new dependency configuration is returned and stored in
     *  the `dependencies` variable.
     */
    const dependencies = useDependencies({
        plugins: ["http"],
        services: ["db"],
    });

    /*
     * Here, `useDependencies` updates the configuration to...
     *
     *  {
     *      "plugins": ["http", "websocket"],
     *      "services": ["db"]
     *  }
     *
     * Then this new dependency configuration is returned and stored in
     *  the `dependencies` variable.
     */
    const newDependencies = useDependencies({
        plugins: ["websocket"],
    });

    /*
     * Here, `useDependencies` **gets** the dependencies and stores it in
     *  the `currentDependencies` variable.
     */
    const currentDependencies = useDependencies();

    useInstallEffect(() => {
        /*
         * Here, `useDependencies` **gets** the dependencies and stores it
         *  in the `finalDependencies` variable.
         */
        const finalDependencies = useDependencies();
    });
};

export const callback = () => {
    /*
     * Here, `useDependencies` **gets** the dependencies and stores it in the
     *  `dependencies` variable.
     */
    const dependencies = useDependencies();
};
```

#### `useEffect`

The `useEffect` hook can be used **once a unit has been installed** to run side effects
when the effect's dependencies change. The `useEffect` hook also supports a cleanup
function which can be returned from the effect callback.

```js
import { useEffect } from "@leverage/core";

export const init = () => {
    /* ... */
};

export const callback = () => {
    /*
     * Here, `useEffect` will run on every call.
     */
    useEffect(() => {
        console.log("Hello, World!");
    });

    /*
     * Here, `useEffect` will run exactly once for the life of this unit.
     */
    useEffect(() => {
        console.log("Hello, World!");
    }, []);

    /*
     * Here, `useEffect` will run whenever `myValue` changes.
     */
    const myValue = Math.random();
    useEffect(() => {
        console.log("Hello, World!");
    }, [myValue]);

    /*
     * Here, `useEffect` will run once. When this unit is uninstalled or removed,
     *  the cleanup callback will be executed.
     */
    useEffect(() => {
        console.log("Hello, World!");

        return () => {
            console.log("Hello, Cleanup!");
        };
    }, []);
};
```

#### `useInstallEffect`

The `useInstallEffect` hook can be used **during initialization** to run side effects
once the Unit is installed. The `useInstallEffect` hook also supports a cleanup
function which can be returned from the effect callback.

This hook is particularly useful for one-time configuration, expensive setup processes, or interacting with other installed Units.

```js
import { useInstallEffect } from "@leverage/core";

export const init = () => {
    /*
     * Here, `useInstallEffect` runs once this unit is installed.
     *  When this unit is uninstalled or removed, the cleanup callback
     *  will be executed.
     */
    useInstallEffect(() => {
        console.log("Hello, World!");

        return () => {
            console.log("Hello, Cleanup!");
        };
    });
};
```

#### `useIs`

The `useIs` hook can be used in two different ways. It can be used inside of an `init` function to **set** or **get** the configuration's `is` value. After a unit is initialized, `useIs` can be used to **get** the current configuration's `is` value.

```js
import { useIs, useInstallEffect } from "@leverage/core";

export const init = () => {
    /*
     * Here, `useIs` **sets** the configuration to...
     *
     *  {
     *      "is": "component",
     *  }
     *
     * Then this new configuration's `is` value is returned and stored in the
     *  `is` variable.
     */
    const is = useIs("component");

    /*
     * Here, `useIs` **gets** the configuration's `is` value and stores it in the
     *  `currentIs` variable.
     */
    const currentIs = useIs();

    useInstallEffect(() => {
        /*
         * Here, `useIs` **gets** the configuration's `is` value and stores it in
         *  the `finalIs` variable.
         */
        const finalIs = useIs();
    });
};

export const callback = () => {
    /*
     * Here, `useIs` **gets** the configuration's `is` and stores it in the
     *  `is` variable.
     */
    const is = useIs();
};
```

#### `useKeyRef`

The `useKeyRef` hook can be used to create or fetch an existing Ref for storing persistent data. This hook is particularly useful because it can be used **during and after initialization**.

```js
import { useKeyRef, useInstallEffect } from "@leverage/core";

export const init = () => {
    /*
     * Here, `useKeyRef` creates a new ref using the key "my-key" and an initial
     *  value of 42. The returned Ref is an object that looks like:
     *
     *  {
     *      current: 42
     *  }
     */
    const ref = useKeyRef("my-key", 42);

    /*
     * Here, `useKeyRef` **gets** the Ref for "my-key". This is the same object as
     *  the variable `ref` holds.
     *
     *  ref === sameRef
     *  //=> true
     */
    const sameRef = useKeyRef("my-key");

    useInstallEffect(() => {
        /*
         * Here, `useKeyRef` **gets** the Ref for "my-key".
         */
        const stillSameRef = useKeyRef("my-key");
    });
};

export const callback = () => {
    /*
     * Here, `useKeyRef` **gets** the Ref for "my-key".
     */
    const ref = useKeyRef("my-key");
};
```

#### `usePlugin`

The `usePlugin` hook can be used to get an installed Plugin. This hook can only be
used **after initialization**. In order to get a Plugin, the Plugin's type should be
added to the Unit's dependencies.

```js
import { usePlugin, useInstallEffect } from "@leverage/core";

export const init = () => {
    useDependencies({
        plugins: ["http"],
    });

    useInstallEffect(() => {
        /*
         * Here, `usePlugin` gets the "http" plugin.
         */
        const plugin = usePlugin("http");
    });
};

export const callback = () => {
    /*
     * Here, `usePlugin` gets the "http" plugin.
     */
    const plugin = usePlugin("http");
};
```

#### `useRef`

The `useRef` hook can be used **once a unit has been installed** to create a Ref that can store persistent data.

```js
import { useRef, useEffect } from "@leverage/core";

export const init = () => {
    /* ... */
};

export const callback = () => {
    /*
     * Here, `useRef` creates or gets an existing Ref, using an initial value of 42.*  *  The returned Ref is an object that looks like:
     *
     *  {
     *      current: 42
     *  }
     */
    const ref = useRef(42);
};
```

#### `useService`

The `useService` hook can be used to get an installed Service. This hook can only be
used **after initialization**. In order to get a Service, the Service's type should be
added to the Unit's dependencies.

```js
import { useService, useInstallEffect } from "@leverage/core";

export const init = () => {
    useDependencies({
        services: ["db"],
    });

    useInstallEffect(() => {
        /*
         * Here, `useService` gets the "db" plugin.
         */
        const service = useService("db");
    });
};

export const callback = () => {
    /*
     * Here, `useService` gets the "http" plugin.
     */
    const service = useService("db");
};
```

#### `useSignal`

The `useSignal` hook can be used **during initialization** to create a handler for signal events.

```js
import { useSignal } from "@leverage/core";

export const init = () => {
    useConfig({
        is: "plugin",
        type: "example",
    });

    /*
     * Here, `useSignal` will run when a signal event fires for this Unit.
     *
     * For Example:
     *
     *  signal(
     *      {
     *          is: "plugin",
     *          type: "example"
     *      },
     *      "Hello, World"
     *  )
     */
    useSignal((message) => {
        console.log(message);
        //=> logs "Hello, World"
    });
};
```

#### `useState`

The `useState` hook can be used **once a unit has been installed** to store persistent state between calls. This hook should _only_ be used in the primary method for your
Unit.

```js
import { useState } from "@leverage/core";

export const init = () => {
    /* ... */
};

export const callback = () => {
    /*
     * Here, `useEffect` will run on every call.
     */
    const [value, setValue] = useState(42);

    /*
     * On the first call, the default value is used. On subsequent calls,
     *  the existing value is used.
     */
    value === 42;

    /*
     * Calling the state setter will update the value for the _next_ call.
     *  This does **not** update `value` in-place.
     */
    setValue(1337);
};
```

#### `useType`

The `useType` hook can be used in two different ways. It can be used inside of an `init` function to **set** or **get** the configuration's `type` value. After a unit is initialized, `useType` can be used to **get** the current configuration's `is` value.

```js
import { useType, useInstallEffect } from "@leverage/core";

export const init = () => {
    /*
     * Here, `useType` **sets** the configuration to...
     *
     *  {
     *      "type": "http",
     *  }
     *
     * Then this new configuration's `type` value is returned and stored in the
     *  `type` variable.
     */
    const type = useType("http");

    /*
     * Here, `useType` **gets** the configuration's `type` value and stores it in the
     *  `currentType` variable.
     */
    const currentType = useType();

    useInstallEffect(() => {
        /*
         * Here, `useType` **gets** the configuration's `type` value and stores it in
         *  the `finalType` variable.
         */
        const finalType = useType();
    });
};

export const callback = () => {
    /*
     * Here, `useType` **gets** the configuration's `type` and stores it in the
     *  `type` variable.
     */
    const type = useType();
};
```
