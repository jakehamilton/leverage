<img src="/markdown-assets/leverage.png" width="80" height="80">

What is it?
-----------

👩‍💻 A super fast, super customizable library to orchestrate your next application.

What can you use it for?
------------------------

+ A HTTP server
+ A chat bot
+ A realtime websocket server
+ An IRC server
+ A MIDI interface
+ 👩💭 Anything else you can imagine!

Install it
----------

```bash
npm i -S leverage-js
```

Hello World
-----------

For a "Hello World", we'll create a simple http server that responds to requests with a "Hello World".

First, install the HTTP plugin:

```bash
npm i -S leverage-plugin-http
```

Now, we will write an HTTP component and load our component and the HTTP plugin:

```js
import { manager, Component } from 'leverage-js'
import http from 'leverage-plugin-http'

const component = Component.of({
    config: {
        type: 'http',
        http: {
            path: '*',
            method: 'get'
        }
    },
    http (request, response) {
        response.send('Hello World')
    }
})

manager.plugin(http)

manager.add(component)

http.listen(3000)
```

Run the above and head over to [localhost:3000](http://localhost:3000) to see it in action!

Documentation and Tutorials
---------------------------

Please see [the project's wiki](https://github.com/jakehamilton/leverage/wiki) 🚀.

API
---

### Leverage.Component

The `Component` class lets you create your own components. You can extend it
using the `class` syntax or use `Component.of` to extend using a normal object.

Example (with class syntax):

```js
import { Component } from 'leverage-js'

class MyComponent extends Component {
    constructor () {
        super()

        this.config = {
            type: 'http'
        }
    }
}
```

##### Component.config

The `config` object is a component's special configuration object and defines
how the component should be used.

##### Component.of()

You can create a component instance by calling this method with component
definition object.

Example:

```js
import { Component } from 'leverage-js'

Component.of({
    config: {
        type: 'http'
    }
})
```

### Leverage.Middleware

The `Middleware` class lets you create your own middleware. You can extend it
using the `class` syntax or use `Middleware.of` to extend using a normal object.

Example (with class syntax):

```js
import { Middleware } from 'leverage-js'

class MyComponent extends Middleware {
    constructor () {
        super()

        this.config = {
            type: 'http'
        }
    }
}
```

##### Middleware.config

The `config` object is a middleware's special configuration object and defines
how the middleware should be used.

##### Middleware.of()

You can create a middleware instance by calling this method with middleware
definition object.

Example:

```js
import { Middleware } from 'leverage-js'

Middleware.of({
    config: {
        type: 'http'
    }
})
```

### Leverage.Service

The `Service` class lets you create your own service. You can extend it
using the `class` syntax or use `Service.of` to extend using a normal object.

Example (with class syntax):

```js
import { Service } from 'leverage-js'

class MyComponent extends Service {
    constructor () {
        super()

        this.config = {
            name: 'myService'
        }
    }
}
```

##### Service.config

The `config` object is a service's special configuration object and defines
how the service should be used.

##### Service.of()

You can create a service instance by calling this method with service
definition object.

Example:

```js
import { Service } from 'leverage-js'

Service.of({
    config: {
        name: 'myService'
    }
})
```

### Leverage.Plugin

The `Plugin` class lets you create your own plugin. You can extend it
using the `class` syntax or use `Plugin.of` to extend using a normal object.

Example (with class syntax):

```js
import { Plugin } from 'leverage-js'

class MyComponent extends Plugin {
    constructor () {
        super()

        this.config = {
            type: 'http'
        }
    }
}
```

##### Plugin.config

The `config` object is a plugin's special configuration object and defines
how the plugin should be used.

##### Plugin.of()

You can create a plugin instance by calling this method with plugin
definition object.

Example:

```js
import { Plugin } from 'leverage-js'

Plugin.of({
    config: {
        type: 'http'
    }
})
```

### Leverage.manager

Leverage's manager handles loading components, plugins, middleware, and services.

##### manager.add()

`manager.add` will load a component instance.

Example:

```js
import { manager, Component } from 'leverage-js'

const component = Component.of({
    config: {
        type: 'http'
    }
})

manager.add(component)
```

##### manager.plugin()

`manager.plugin` will load a plugin instance.

Example:

```js
import { manager, Plugin } from 'leverage-js'

const plugin = Plugin.of({
    config: {
        type: 'http',
        identifier: 'path'
    },
    http (component) {

    }
})

manager.plugin(plugin)
```

##### manager.service()

`manager.service` will load a service instance.

Example:

```js
import { manager, Service } from 'leverage-js'

const service = Service.of({
    config: {
        name: 'myService'
    }
})

manager.service(service)
```

##### manager.middleware()

`manager.middleware` will load a middleware instance

Example:

```js
import { manager, Middleware } from 'leverage-js'

const middleware = Middleware.of({
    config: {
        type: 'http'
    }
})

manager.middleware(middleware)
```
