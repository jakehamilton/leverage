import path from 'path'

import Service from '../../lib/service'

class S extends Service {
  constructor () {
    super()

    this.name = 'path'
    this.module = path
  }
}

module.exports = new S()
