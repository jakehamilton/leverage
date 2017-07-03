Leverage
========

What is it?
-----------

👩‍💻 A super fast, super customizable server library

What can you use it for?
------------------------

+ A HTTP server
+ A realtime socket server
+ An IRC server
+ 👨💭 Anything else you can imagine!

Creating your first server
--------------------------

Install Leverage and an HTTP plugin:

```bash
npm i -S leverage-js leverage-plugin-http
```

Create our server:

##### index.js

```js
import { router, Route } from 'leverage-js'
import http from 'leverage-plugin-http'

class MyRoute extends Route {
  constructor () {
    super()

    this.config = {
      type: 'http',
      http: {
        path: '/',
        method: 'get'
      }
    }
  }

  http (request, response) {
    response.send('Hello World')
  }
}

router.plugin(http)

router.add(new MyRoute())

http.listen(3000)
```

Documentation and Tutorials
---------------------------

For more information, please see [the project's wiki](https://github.com/jakehamilton/leverage/wiki).
