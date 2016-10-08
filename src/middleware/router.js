import fs from 'fs'
import path from 'path'

class Router {
  constructor () {
    this.routes = []
    this.server = null

    this.dependencies = {}
  }

  connect (server) {
    this.server = server

    if (this.routes.length > 0) {
      this.routes.forEach(route => this.addRoute(route))
    }
  }

  addRoute (route) {
    if (typeof route === 'string') {
      // Path to a route file
      route = require(route)
    }

    // Use the route object
    if (this.routes.indexOf(route) < 0) {
      this.routes.push(route)
    }

    if (this.server) {
      console.log(`[Leverage Router] Adding ${route.name} to server at ${route.path}`)
      this.server.verb(route.method, route.path, ::route.callback)
    }

    route.dependencies.forEach(dependency => {
      if (this.dependencies.hasOwnProperty(dependency)) {
        route.load(dependency)
      }
    })

    console.log(`[Leverage Router] Added route: ${route.name}`)
  }

  addRoutes (routes) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(routes)) {
        // Array of route objects
        routes.forEach(route => this.addRoute(route))

        resolve()
      } else if (typeof routes === 'string') {
        fs.readdir(routes, (err, files) => {
          if (err) {
            console.error('[Leverage Router] Error reading directory')
            reject()
          }

          files.forEach(file => {
            this.addRoute(path.join(routes, file))
          })

          resolve()
        })
      }
    })
  }
}

export default new Router()
