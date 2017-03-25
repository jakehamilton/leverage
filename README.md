Leverage
========

The backbone of your web app.

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

Getting Started
---------------

### Create a project and install

```bash
# Create a project directory and enter it
mkdir my-project && cd my-project

# Initialize the project with npm
npm init -y

# Install leverage from npm (or yarn)
npm install --save leverage-js
```

### Create your project structure and open your server's new entrypoint

```bash
# Create a route
touch get_index.js

#Create and open our main JS file
$EDITOR index.js
```

### Configure your server to find your views/services/middleware (more info in docs)

###### index.js

```js
// dependencies
import path from 'path'
import { router, server } from 'leverage-js'

// import our route
import route from './get_index'

// start our server listening on port 3000
server.listen(3000)

// have our router manage routing for our server
router.connect(server)

// load our route
router.add(route)
```

### Write your route definition

##### get\_index.js

```js
import path from 'path'
import { Route } from 'leverage-js'

// create a new route, inheriting from the base route definition
class R extends Route {
    constructor () {
        // required
        super()

        this.path = '/'
    }

    callback (req, res) {
        res.end('Hello World!')
    }
}

// export our route definition
export default new R()
```

### Start it up

```bash
node index.js
```
