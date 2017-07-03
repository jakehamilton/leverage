Leverage
========

What is it?
-----------

👩‍💻 A super fast, super customizable library to orchestrate your next application.

What can you use it for?
------------------------

+ A HTTP server
+ A realtime socket server
+ An IRC server
+ A MIDI interface
+ 👩💭 Anything else you can imagine!

Creating your first server
--------------------------

Install Leverage and an HTTP plugin:

```bash
npm i -S leverage-js leverage-plugin-http
```

Create our server:

##### index.js

```js
import { manager, Component } from 'leverage-js'
import http from 'leverage-plugin-http'

class MyComponent extends Component {
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

manager.plugin(http)

manager.add(new MyRoute())

http.listen(3000)
```

Run it and head over to [localhost:3000](http://localhost:3000) to see the result!

Documentation and Tutorials
---------------------------

For more information, please see [the project's wiki](https://github.com/jakehamilton/leverage/wiki) 🚀.
