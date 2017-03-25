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
npm install leverage
```

How can I use it?
-----------------

### Create a project and install

```bash
# Create a project directory and enter it
mkdir my-project && cd my-project

# Initialize the project with npm
npm init

# Install leverage from npm (or yarn)
npm install --save leverage
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
echo "<html><head><title>Hello World</title></head><body>Hello World</body></html>" > views/index.html

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
router.addRoutes(path.resolve('.', 'routes'))
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
