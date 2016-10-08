class Service {
  constructor () {
    this.name = 'Service'
    this.module = true
  }

  use (...args) {
    return this.module.apply(this.module, args)
  }
}

export default Service
