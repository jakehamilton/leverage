import Route from '../../lib/route'

class R extends Route {
  constructor () {
    super()

    this.name = 'Index Post'
    this.path = '/'
    this.method = 'post'

    this.dependencies = []
  }
}

module.exports = new R()
