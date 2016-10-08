class Route {
  constructor () {
    this.name = 'Route'
    this.path = '/' // Default to root
    this.method = 'get' // Default to most common
    this.dependencies = []
  }

  load (dependency) {
    if (!this.hasOwnProperty(dependency.name)) {
      console.log(`[Leverage Route] Route ${this.name} loading ${dependency.name} service`)
      this[dependency.name] = dependency
    }
  }

  callback () {
    console.log(`[Leverage Route] Callback for "${this.name}" called`)
  }
}

export default Route
