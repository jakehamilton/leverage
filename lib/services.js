import fs from 'fs'
import path from 'path'

class Services {
  constructor () {
    this.dependencies = {}
  }

  addService (service) {
    if (typeof service === 'string') {
      // Path to a service file
      service = require(service)
    }

    // Use the service object
    if (service.hasOwnProperty('name')
      && !this.dependencies.hasOwnProperty(service.name)) {
      this.dependencies[service.name] = service
    }
  }

  addServices (services) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(services)) {
        // An array of service objects
        services.forEach(service => this.addService(service))

        resolve()
      } else if (typeof services === 'string') {
        fs.readdir(services, (err, files) => {
          if (err) {
            console.error(`[Leverage Services] Error loading services`)
            reject()
          }

          files.forEach(file => {
            this.addService(path.join(services, file))
          })
          resolve()
        })
      }
    })
  }

  patch (router) {
    router.routes.forEach(route => {
      route.dependencies.forEach(dependency => {
        if (!route.hasOwnProperty(dependency)) {
          route.load(this.dependencies[dependency])
        }
      })
    })
  }
}

export default new Services()
