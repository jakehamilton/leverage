import fs from 'fs'
import path from 'path'

/**
 * @class Services
 * @description The services handler/broker
 */
class Services {
    /**
     * @constructor
     */
    constructor () {
        /**
         * @member {Object} services Loaded services
         */
        this.services = {}
    }

    /**
     * @method load
     * @description Loads a service object into the services handler
     * @param {Object} service The service object to load
     *
     * @void
     */
    load (service) {
        if (this.services.hasOwnProperty(service.name)) {
            console.log(`[Services] Error, already loaded service ${service}`)
            return
        }

        this.services[service.name] = service
    }

    /**
     * @method add
     * @description Adds services to the services broker
     * @param {String|Object|Array<String,Object>} services The service(s) you would like to add
     *
     * @promise
     * @resolve {null} _ No return value
     * @reject {null} _ No return value
     *
     * @example
     *  import { services } from 'leverage-js'
     *
     *  services.add({ /* some service object })
     *  services.add('path/to/module.js')
     *  services.add('path/to/route/directory/')
     *  services.add([ {...}, 'any/combination.js', 'of/the/above/'])
     */
    add (services) {
        return new Promise((resolve, reject) => {
            if (typeof services === 'string') {
                // it's a path
                if (/\.js$/.exec(services)) {
                    // a single service file
                    console.log(`[Services] Requiring service ${services}`)

                    const service = require(services)

                    // load the module
                    // if it is an ECMAS module, load default
                    // otherwise, just use what was imported
                    resolve(this.load.call(this, service.__esModule ? service.default : service))
                } else {
                    fs.lstat(services, (err, stats) => {
                        if (err) {
                            console.log(`[Services] Error statting directory ${services}`)
                            reject()
                        }

                        if (stats.isDirectory()) {
                            // a whole directory
                            console.log(`[Services] Reading directory ${services}`)
                            fs.readdir(services, (err, files) => {
                                if (err) {
                                    console.log(`[Services] Error reading directory ${services}`)
                                    reject()
                                }

                                resolve(
                                    Promise.all(files.map(file => this.add.call(this, path.join(services, file))))
                                )
                            })
                        } else {
                            console.log(`[Services] Failed loading ${services}, not a directory or JavaScript file`)
                            resolve()
                        }
                    })
                }
            } else if (Array.isArray(services)) {
                // it's an array of either service objects or paths or both
                resolve(Promise.all(services.map(this.add.bind(this))))
            } else {
                // it's a service definition object
                resolve(this.load.call(this, services))
            }
        })
    }

    /**
     * @method patch
     * @description Patches a router with services
     * @param {Object} router A router instance to patch
     *
     * @void
     */
    patch (router) {
        console.log(`[Services] Patching router...`)
        router.routes.forEach(route => {
            if (route.dependencies.services) {
                console.log(`[Services] Patching route ${route.name}`)
                // we have services to require
                route.dependencies.services.forEach(service => {
                    if (this.services.hasOwnProperty(service)) {
                        // we have the service
                        Object.defineProperty(route.services, service, {
                            get: _ => this.services[service],
                            set: _ => null,
                            configurable: false
                        })
                    } else {
                        console.log(`[Services] Could not load service "${service}" for route "${route.name}"`)
                    }
                })
            } else {
                console.log(`[Services] Skipping route ${route.name}, no services required`)
            }
        })
    }
}

export default new Services()
