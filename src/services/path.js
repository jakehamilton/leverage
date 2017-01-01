import path from 'path'

import Service from '../../lib/service'

class S extends Service {
  constructor () {
    super()

    this.name = 'path'

    // Available by doing the following in a route
    /*
      this.path.use(...)
    */
    this.module = path
  }
}

module.exports = new S()
