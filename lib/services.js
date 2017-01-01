import fs from 'fs'
import path from 'path'

/**
 * @class Services
 * @description Constructs, stores services and patches a router
 */
class Services {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @member {Object} dependencies A map of the services created
     */
    this.dependencies = {}
  }

  /**
   * @method addService
   * @description Adds/loads a single service from a string or service object
   * @param {String|Object} service The service to load/addService
   * 
   * @void
   */
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

  /**
   * @method addServices
   * @description Adds/loads multiple services
   * @param {String|Object|Array<Object>} services The service(s) to load
   * 
   * @promise
   * @resolve {null} _ No value is returned on success
   * @reject {null} _ No value is returned on failure
   */
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

  /**
   * @method patch
   * @description Patches a router's routes with services
   * @param {Object} router The router to patch
   * 
   * @void
   */
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
