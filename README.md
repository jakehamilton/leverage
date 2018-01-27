<br>

<p align="center">
    <img src="https://raw.githubusercontent.com/jakehamilton/leverage/next/.md-assets/logo.png" width="120" height="120" alt="Leverage Logo">
</p>

<p align="center">
  <a href="https://coveralls.io/github/jakehamilton/leverage?branch=next"><img src="https://coveralls.io/repos/github/jakehamilton/leverage/badge.svg?branch=next" alt="Coverage Status"></a>
  <a href="https://travis-ci.org/jakehamilton/leverage"><img src="https://travis-ci.org/jakehamilton/leverage.svg?branch=next" alt="Build Status"></a>
  <br>
  <a href="http://forthebadge.com"><img src="http://forthebadge.com/images/badges/makes-people-smile.svg" alt="forthebadge"></a>
  <a href="http://forthebadge.com"><img src="http://forthebadge.com/images/badges/built-with-love.svg" alt="forthebadge"></a>
</p>

What is it?
-----------

👩‍💻 A super fast, super customizable library to orchestrate your next application!

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
npm i -S @leverage/core
```

Hello World
-----------

For a "Hello World", we'll create a simple http server that responds to requests with a "Hello World".

First, install the HTTP plugin:

```bash
npm i -S @leverage/plugin-http
```

Now, we will write an HTTP component and load our component and the HTTP plugin:

```js
import { Manager } from '@leverage/core';
import http from '@leverage/plugin-http';

const manager = new Manager();

const route = {
    is: 'component',
    config: {
        type: 'http',
        http: {
            path: '/',
            method: 'get'
        }
    },

    http (request, response) {
        response.send('Hello World');
    }
}

manager.add(route);

http.listen(8080);
```

Want To Dig In Deeper?
----------------------

Check out [the wiki](https://github.com/jakehamilton/leverage/wiki)!

Learn from example applications:

+ *coming soon*

Roadmap
-------

Most (if not all) roadmap items are tracked on [the project board](https://github.com/jakehamilton/leverage/projects/2).
