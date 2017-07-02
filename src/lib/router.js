/*
 * @TODO: Documentation for Route object
 * @TODO: Documentation for Plugin object
 * @TODO: Documentation for Service object
 * @TODO: Documentation for Middleware object
 */

/*
 * Import dependencies
 */
import path from 'path'
import klaw from 'klaw'

/**
 * @class Router
 * @description The Leverage router
 */
class Router {
  /**
   * @constructor
   */
  constructor () {
    this.__routes__ = {}
    this.__plugins__ = {}
    this.__services__ = {}
    this.__middleware__ = {}
  }

  /**
   * @method add
   * @description Add a route
   *
   * @param {String|Route} route The route object or path to a route file or directory of route files
   *
   * @void
   */
  add (route) {
    /*
     * If the argument given is a path
     */
    if (typeof route === 'string') {
      /*
       * Store all files found in an array
       */
      const files = []

      /*
       * Read the file/directory's information
       */
      klaw(route)
        .on('data', file => {
          /*
           * Add each file to our array
           */
          files.push(file)
        })
        .on('end', () => {
          files
            /*
             * Filter for JavaScript files
             */
            .filter(file => {
              /*
               * Get the base name
               *
               * ex. /a/b/c.js -> c.js
               */
              const basename = path.basename(file.path)

              /*
               * Test for a JavaScript file
               */
              return /\.js$/.exec(basename)
            })
            /*
             * Each file in the array here will attempt to be
             *  loaded.
             */
            .forEach(file => {
              /*
               * Get the route object
               */
              const route = require(file.path)

              /*
               * Attempt to load it
               */
              this.add(route)
            })
        })
    }

    /*
     * Load a route object
     */
    else if (typeof route === 'object') {
      /*
       * Correct for ECMAScript modules
       */
      if (!route.__config__ && route.default) {
        /*
         * Use the default export
         */
        route = route.default
      }

      /*
       * Verify the object is a valid route object
       */

      /*
       * Route objects must have a private config property with a type
       */
      if (!route.__config__) {
        /*
         * Throw an error so our user knows
         */
        throw new Error(`[Leverage/lib/router] Error adding route, expected route object to have an "__config__" property`)

        /*
         * Get out of here before things really break
         */
        return
      }

      /*
       * If we have a config object, but no type that is also an error
       */
      if (route.__config__ && !route.__config__.type) {
        /*
         * Throw an error so our user knows
         */
        throw new Error(`[Leverage/lib/router] Error adding route, expected route object to a type`)

        /*
         * Get out of here before things really break
         */
        return
      }

      /*
       * If the type array is empty, that is also an error
       */
      if (route.__config__ && route.__config__.type && route.__config__.type.length === 0) {
        /*
         * Throw an error so our user knows
         */
        throw new Error(`[Leverage/lib/router] Error adding route, expected route object to a type`)

        /*
         * Get out of here before things really break
         */
        return
      }

      /*
       * If we have gotten here, the route must be valid
       */
      for (let type of route.__config__.type) {
        /*
         * If we don't yet have a plugin which supports this route,
         *  save it for later to be loaded.
         */
        if (!this.__plugins__[type]) {
          /*
           * Save the route to be loaded later
           */

          /*
           * Create the route map for this type if needed
           */
          if (!this.__routes__[type]) {
            this.__routes__[type] = {}
          }

          /*
           * Create the unitialized routes array if needed
           */
          if (!this.__routes__[type].__unitialized__) {
            this.__routes__[type].__unitialized__ = []
          }

          /*
           * Push this route to the unitialized routes array
           */
          this.__routes__[type].__unitialized__.push(route)
        }

        /*
         * If a plugin supports this route, load it
         */
        else {
          /*
           * Get the plugin that can load this route
           */
          const plugin = this.__plugins__[type]

          /*
           * Get the identifier for this kind of route
           */
          const identifier = plugin.__config__.identifier

          /*
           * Check if the route already exists
           */
          if (this.__routes__[type] && this.__routes__[type][identifier]) {
            /*
             * Tell the user that this route already exists
             */
            throw new Error(`[Leverage/lib/router] Error adding route, route already exists: ${type}@${identifier}`)

            /*
             * Get out of here before something really breaks
             */
            return
          }

          /*
           * Ensure the route's type has a map
           */
          if (!this.__routes__[type]) {
            this.__routes__[type] = {}
          }

          /*
           * If we've gotten here, then our route should be added
           */
          this.__routes__[type][route.__config__[type][identifier]] = route

          /*
           * Load the route in the plugin
           */
          plugin[type](route)
        }

        /*
         * Add any dependencies to the route that are needed
         */
        if (route.__config__.dependencies && route.__config__.dependencies.services) {
          for (let service of route.__config__.dependencies.services) {
            /*
             * Check to see if the needed service is loaded
             */

            /*
             * The service is loaded, so we can patch the
             *  route.
             */
            if (this.__services__[service]) {
              /*
               * Create the route's service object if needed
               */
              if (!route.services) {
                route.services = {}
              }

              route.services[service] = this.__services__[service]
            }

            /*
             * The service is not loaded, we must add this
             *  route to the waiting queue.
             */
            else {
              /*
               * Create the queue if needed
               */
              if (!this.__routes__.__waiting__) {
                this.__routes__.__waiting__ = {}
              }

              if (!this.__routes__.__waiting__[service]) {
                this.__routes__.__waiting__[service] = []
              }

              /*
               * Add the route to the waiting queue
               */
              this.__routes__.__waiting__[service].push(route)
            }
          }
        }
      }
    }
  }

  /**
   * @method plugin
   * @description Add a plugin
   *
   * @param {Plugin} plugin The plugin to add
   *
   * @void
   */
  plugin (plugin) {
    /*
     * If the argument given is a path
     */
    if (typeof plugin === 'string') {
      /*
       * Store all files found in an array
       */
      const files = []

      /*
       * Read the file/directory's information
       */
      klaw(plugin)
        .on('data', file => {
          /*
           * Add each file to our array
           */
          files.push(file)
        })
        .on('end', () => {
          files
            /*
             * Filter for JavaScript files
             */
            .filter(file => {
              /*
               * Get the base name
               *
               * ex. /a/b/c.js -> c.js
               */
              const basename = path.basename(file.path)

              /*
               * Test for a JavaScript file
               */
              return /\.js$/.exec(basename)
            })
            /*
             * Each file in the array here will attempt to be
             *  loaded.
             */
            .forEach(file => {
              /*
               * Get the plugin object
               */
              const plugin = require(file.path)

              /*
               * Attempt to load it
               */
              this.plugin(plugin)
            })
        })
    }

    /*
     * If we got a plugin object, load it
     */
    else if (typeof plugin === 'object') {
      /*
       * Correct for ECMAScript modules
       */
      if (!plugin.__config__ && plugin.default) {
        /*
         * Use the default export
         */
        plugin = plugin.default
      }

      /*
       * Load plugin for each type that it handles
       */
      for (let type of plugin.__config__.type) {
        /*
         * Check to see if plugin is already loaded for type
         */
        if (this.__plugins__[type]) {
          console.log(this.__plugins__)
          /*
           * We can't load more than one plugin for a type
           */
          throw new Error(`[Leverage/lib/router] Error loading plugin, a plugin is already defined for type ${type}`)

          /*
           * Get out of here before more things break
           */
          return
        }

        /*
         * If we got here, then we can begin loading our plugin
         *  by adding it to our plugins map.
         */
        this.__plugins__[type] = plugin

        /*
         * If we have any routes that haven't been initialized
         *  yet, then we should load them right now.
         */
        if (this.__routes__[type] && this.__routes__[type].__unitialized__ && this.__routes__[type].__unitialized__.length > 0) {
          /*
           * Load each route
           */
          for (let route of this.__routes__[type].__unitialized__) {
            /*
             * Load the route into the route map
             */
            this.__routes__[type][route.__config__[type][plugin.__config__.identifier]] = route

            /*
             * Pass the route to the plugin
             */
            this.__plugins__[type][type](route)
          }

          /*
           * Clear the uninitialized routes array
           */
          this.__routes__[type].__unitialized__.length = 0
        }

        /*
         * Load any waiting middleware
         */
        if (this.__middleware__.__waiting__ && this.__middleware__.__waiting__[type] && this.__middleware__.__waiting__[type].length > 0) {
          /*
           * Try and pass each middleware to the plugin's
           *  middleware callback.
           */
          for (let middleware of this.__middleware__.__waiting__[type]) {
            if (plugin.middleware) {
              plugin.middleware(middleware)
            }
          }
        }
      }
    }

    /*
     * We can't load the value given
     */
    else {
      /*
       * Throw an error so the user knows
       */
      throw new Error(`[Leverage/lib/router] Error loading plugin, expected string or object but got ${typeof plugin}`)
    }
  }

  /**
   * @method service
   * @description Add a service
   *
   * @param {Service} service The service you would like to add
   *
   * @void
   */
  service (service) {
    /*
     * If the argument given is a path
     */
    if (typeof service === 'string') {
      /*
       * Store all files found in an array
       */
      const files = []

      /*
       * Read the file/directory's information
       */
      klaw(service)
        .on('data', file => {
          /*
           * Add each file to our array
           */
          files.push(file)
        })
        .on('end', () => {
          files
            /*
             * Filter for JavaScript files
             */
            .filter(file => {
              /*
               * Get the base name
               *
               * ex. /a/b/c.js -> c.js
               */
              const basename = path.basename(file.path)

              /*
               * Test for a JavaScript file
               */
              return /\.js$/.exec(basename)
            })
            /*
             * Each file in the array here will attempt to be
             *  loaded.
             */
            .forEach(file => {
              /*
               * Get the service object
               */
              const service = require(file.path)

              /*
               * Attempt to load it
               */
              this.service(service)
            })
        })
    }

    /*
     * If we got a service object, load it
     */
    else if (typeof service === 'object') {
      /*
       * Correct for ECMAScript modules
       */
      if (!service.__config__ && route.default) {
        /*
         * Use the default export
         */
        service = route.default
      }

      /*
       * Check if a service with the same name was loaded
       *  already.
       */
      if (this.__services__[service.__config__.name]) {
        /*
         * Services can't share names
         */
        throw new Error(`[Leverage/lib/router] Error adding service, service ${service.name} already exists`)

        /*
         * Get out of here before something really breaks
         */
        return
      }

      /*
       * If we've gotten here, we can try and load the
       *  service object.
       */

      /*
       * Add the service to our services map
       */
      this.__services__[service.__config__.name] = service

      /*
       * Create the waiting map if needed
       */
      if (!this.__routes__.__waiting__) {
        this.__routes__.__waiting__ = {}
      }

      /*
       * Check to see if any routes are waiting on this service
       */
      if (this.__routes__.__waiting__[service.__config__.name]) {
        /*
         * Patch the routes waiting for this service
         */
        for (let route of this.__routes__.__waiting__[service.__config__.name]) {
          /*
           * Create the route's services map if needed
           */
          if (!route.services) {
            route.services = {}
          }

          /*
           * Patch the route
           */
          route.services[service.__config__.name] = service
        }

        /*
         * Remove the service name from the map
         */
        delete this.__routes__.__waiting__[service.__config__.name]
      }
    }

    /*
     * Otherwise, we don't support the value given
     */
    else {
      /*
       * Throw an error so the user knows
       */
      throw new Error(`[Leverage/lib/router] Error loading service, expected a string or object but got ${typeof service}`)

      /*
       * Get out of here
       */
      return
    }
  }

  /**
   * @method middleware
   * @description Add a middleware
   *
   * @param {Middleware} middleware The middleware you would like to add
   *
   * @void
   */
  middleware (middleware) {
    /*
     * If the argument given is a path
     */
    if (typeof middleware === 'string') {
      /*
       * Store all files found in an array
       */
      const files = []

      /*
       * Read the file/directory's information
       */
      klaw(middleware)
        .on('data', file => {
          /*
           * Add each file to our array
           */
          files.push(file)
        })
        .on('end', () => {
          files
            /*
             * Filter for JavaScript files
             */
            .filter(file => {
              /*
               * Get the base name
               *
               * ex. /a/b/c.js -> c.js
               */
              const basename = path.basename(file.path)

              /*
               * Test for a JavaScript file
               */
              return /\.js$/.exec(basename)
            })
            /*
             * Each file in the array here will attempt to be
             *  loaded.
             */
            .forEach(file => {
              /*
               * Get the middleware object
               */
              const middleware = require(file.path)

              /*
               * Attempt to load it
               */
              this.middleware(middleware)
            })
        })
    }

    /*
     * If we got a middleware object, load it
     */
    else if (typeof middleware === 'object') {
      /*
       * Correct for ECMAScript modules
       */
      if (!middleware.__config__ && middleware.default) {
        /*
         * Use the default export
         */
        middleware = middleware.default
      }

      /*
       * Attempt to load the plugin for each type it
       *  applies to.
       */
      for (let type of middleware.__config__.type) {
        /*
         * Check if the required plugin is available
         */

        /*
         * The plugin is available so we can pass our
         *  middleware to it.
         */
        if (this.__plugins__[type]) {
          /*
           * Call the middleware method if there is one
           */
          if (this.__plugins__[type].middleware) {
            this.__plugins__[type].middleware(middleware)
          }
        }

        /*
         * The plugin isn't loaded yet, so we must add
         *  our middleware to the waiting queue.
         */
        else {
          /*
           * Create the queue if needed
           */
          if (!this.__middleware__.__waiting__) {
            this.__middleware__.__waiting__ = {}
          }

          if (!this.__middleware__.__waiting__[type]) {
            this.__middleware__.__waiting__[type] = []
          }

          /*
           * Push our middleware on to the queue
           */
          this.__middleware__.__waiting__[type].push(middleware)
        }
      }
    }

    /*
     * We can't load the value given
     */
    else {
      /*
       * Throw an error so our user knows
       */
      throw new Error(`[Leverage/lib/router] Error loading middleware, expected string or object but got ${typeof middleware}`)

      /*
       * Get out of here
       */
      return
    }
  }
}

/*
 * Export a new instance of the router
 */
export default new Router()
