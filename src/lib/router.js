import fs from 'fs'
import path from 'path'

/**
 * @class Router
 * @description Handles routing of the application
 */
class Router {
    /**
     * @constructor
     */
    constructor () {
        /**
         * @member {Array} routes All of the routes in the application
         */
        this.routes = []

        /**
         * @member {Object} server The server instance this router is connected to
         */
        this.server = null

        /**
         * @member {Object} dependencies Dependencies for the routes
         * @member {Object} dependencies.services Services for the routes
         */
        this.dependencies = {
            services: {}
        }
    }

    /**
     * @method connect
     * @description Connects this router instance to a server instance
     * @param {Object} server The server to connect to
     * 
     * @void
     */
    connect (server) {
        this.server = server

        // If we were given routes before we connected to a server, set them
        if (this.routes.length > 0) {
            this.routes.forEach(this.addRoute.bind(this))
        }
    }

    /**
     * @method load
     * @description Load a route definition
     * @param {Object} route The route definition to load
     * 
     * @example
     * import router from 'Router'
     * import index  from './routes/get_index'
     * 
     * router.load(index)
     * 
     * @promise
     * @resolve {null} _ No value is returned
     * @reject {null} _ No value is returned
     */
    load (route) {
        return new Promise((resolve, reject) => {
            // load the route object
            if (this.routes.indexOf(route) < 0) {
                this.routes.push(route)
            }

            // provision the server
            if (this.server) {
                // setup request handling
                this.server.verb(route.method, route.path, route.callback.bind(route))
            }

            // load the route's dependencies if we have them
            if (route.dependencies && route.dependencies.services) {
                route.dependencies.services.forEach(service => {
                    if (this.dependencies.services.hasOwnProperty(service)) {
                        Object.defineProperty(route.services, service, {
                            get: _ => this.dependencies.services[service],
                            set: _ => null,
                            writable: false,
                            enumerable: true,
                            configurable: false
                        })
                    }
                })
            }

            resolve()
        })
    } 

    /**
     * @method add
     * @description Adds and loads one or many routes, may also provide a path to a directory of routes
     * @param {String|Array} routes The routes or directory of routes to load
     * 
     * @promise
     * @resolve {null} _ No value is returned
     * @reject {null} _ No value is returned
     */
    add (routes) {
        return new Promise((resolve, reject) => {
            if (typeof routes === 'string') {
                // it's a path
                if (/\.js$/.exec(routes)) {
                    // a single route file
                    const route = require(routes)

                    // load the module
                    // if it is an ECMAS module, load default
                    // otherwise, just use what was imported
                    resolve(this.load.call(this, route.__esModule ? route.default : route))
                } else {
                    fs.lstat(routes, (err, stats) => {
                        if (err) {
                            reject()
                        }

                        if (stats.isDirectory()) {
                            // a whole directory
                            fs.readdir(routes, (err, files) => {
                                if (err) {
                                    reject()
                                }

                                resolve(
                                    Promise.all(files.map(file => this.add.call(this, path.join(routes, file))))
                                )
                            })
                        } else {
                            resolve()
                        }
                    })
                }
            } else if (Array.isArray(routes)) {
                // it's an array of either route objects or paths or both
                resolve(Promise.all(routes.map(this.add.bind(this))))
            } else {
                // it's a route definition object
                resolve(this.load.call(this, routes))
            }
        })
    }
}

export default new Router()
