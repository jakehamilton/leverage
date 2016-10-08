import Route from '../../lib/route'

class R extends Route {
  constructor () {
    super()

    this.name = 'Index'
    this.path = '/'
    this.method = 'get'

    this.dependencies = ['path']
  }

  callback (req, res) {
    res.render('index')
  }
}

module.exports = new R()
