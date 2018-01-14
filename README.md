<br>
<center>

<img src=".md-assets/logo.png" width="80" height="80">

<h1>Leverage</h1>

</center>

<center>

<span style="display: inline-block;">

[![Coverage Status](https://coveralls.io/repos/github/jakehamilton/leverage/badge.svg?branch=next)](https://coveralls.io/github/jakehamilton/leverage?branch=next)

</span>

<span style="display: inline-block;">

[![Build Status](https://travis-ci.org/jakehamilton/leverage.svg?branch=next)](https://travis-ci.org/jakehamilton/leverage)

</span>

</center>

<center>

<span style="display: inline-block;">

[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

</span>

<span style="display: inline-block;">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

</span>

</center>

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
import { Manager, Component } from 'leverage-js';
import http from 'leverage-plugin-http';

const manager = new Manager();

@Component({
    type: 'http',
    http: {
        path: '/',
        method: 'get'
    }
})
class Route {
    http (req, res) {
        res.send('Hello World');
    }
}

manager.add(new Route());
```

Want To Dig In Deeper?
----------------------

Check out [the wiki](https://github.com/jakehamilton/leverage/wiki)!

Learn from example applications:

+ *coming soon*

Roadmap
-------

Most (if not all) roadmap items are tracked on [the project board](https://github.com/jakehamilton/leverage/projects/2).
