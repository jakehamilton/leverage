# leverage
A server module... kinda

# Development Status
This project is in _very_ early development and should not be considered stable. The
API is almost guaranteed to change so don't count on it.

# What is it?
This is my attempt at creating a server module that is very extensible. The idea being
that each and every middleware, route, service, etc is easily addable and removable
from the project.

# How can I use it?
Currently, you can clone this repository and use it as a boilerplate or use [nimble](http://github.com/jakehamilton/nimble), though
it is in early development. I am in the process of turning this into an npm module for
simple consumption.

As for _using_ it, you can just drop a route into the `src/routes` directory like:

```javascript
import Route from '../lib/route'

class R extends Route {
  constructor () {
    super()
    
    this.name = 'index'
    this.path = '/'
    this.method = 'get'
  }
  
  callback (req, res) {
    res.render('index')
  }
}

module.exports = new R()
```

Welcome Contributions:
- [ ] Refactor dependencies to reflect [this blog post](http://bytesize.xyz/how-i-simplified-the-server-with-dependency-injection/)
- [ ] Separate route/service/middleware loading logic from the server
- [ ] Allow for like-named dependencies to be loaded
- [ ] General improvements to the server
- [ ] Support for an external socket.io instance without having to write boilerplate every time
