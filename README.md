Leverage
========

The _back_bone of your web app.

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

How can I use it?
-----------------

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
# Create a routes directory for our routes
mkdir routes

# Populate it with a route
touch routes/get_index.js

# Create a views directory
mkdir views

# Create a quick html file to test with
echo "Hello World" > views/index.html

# Open our main JS file
$EDITOR index.js
```

### Configure your server to find your views/services/middleware (more info in docs)

###### index.js

```js
import path from 'path'
import { router, server } from 'leverage'
import renderer from './middleware/renderer'

// start our server listening on port 3000
server.listen(3000)

// have our router manage routing for our server
router.connect(server)

// load our routes
router.add(path.resolve('.', 'routes'))
```

### Write your route definition

##### routes/get\_index.js

```js
import path from 'path'
import { Route } from 'leverage'

class R extends Route {
    constructor () {
        super()

        this.path = '/'
    }

    callback (req, res) {
        res.sendFile(path.resolve('..', 'views', 'index.html'))
    }
}
```

### Start it up

```bash
# Either
node index.js

# Or
npm start
```
