import Route from '../../lib/route'

// Extend the base route
class R extends Route {
  constructor () {
    // Required
    super()

    // Set route information    
    this.name = 'Index'
    this.path = '/'
    this.method = 'get'

    // Recognize dependencies
    // This will soon look like:
    /*
      this.dependencies = {
        modules: ['path'],
        services: ['passport']
      }
    */
    this.dependencies = ['path']
  }

  callback (req, res) {
    // Respond with something
    res.render('index')
  }
}

module.exports = new R()
