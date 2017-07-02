Leverage
========

What is it?
-----------

Leverage is a highly modular, fast server library designed from
the ground up to be easy to work with!

Install it!
-----------

```bash
# npm
npm install leverage-js

# Or yarn
yarn add leverage-js
```

First Steps (Hello World)
-------------------------

1\. Create a new project (if not done already):

```bash
mkdir my-project && cd my-project

npm init -y
```

2\. Install Leverage:

```bash
npm install --save leverage-js
```

3\. Create an `index.js` file with the following:

##### index.js
```js
// Import the server, router, and Route definition from leverage.
// Note:
//      If you are not transpiling, then you should use the
//      `require` syntax here.
import { server, router } from 'leverage-js'

// Have the server listen on a port
server.listen(8080)

// Have the router manage routes for the server
router.connect(server)

// Create a route
class MyRoute extends Route {
    constructor () {
        // Required
        super()

        // Configure route
        this.config = {
            http: {
                path: '/'
            }
        }
    }

    // This is called when an http request is received
    http (request, response) {
        response.send('Hello World!')
    }
}

// Add our route to the router
router.add(new MyRoute())
```

4\. Run the `index.js` file in node

```bash
node index.js
```

5\. Browse to [localhost:8080](http://localhost:8080)

More Information
----------------

Please checkout the `docs` directory in the project, it should
explain all the pieces of Leverage.
