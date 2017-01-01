import path from 'path'
import express from 'express'

/**
 * @class Renderer
 * @description Middleware to render a static page
 * @TODO: Migrate this to an internal module
 */
class Renderer {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @member {String} name The name of the middleware
     */
    this.name = 'renderer'
  }

  /**
   * @method middleware
   * @description Express middleware for statically serving files
   * 
   * @return {Array} args The array of arguments for the Express `use` function to be called with
   */
  middleware () {
    return ['/static', express.static(path.resolve('static'))]
  }

  /**
   * @method custom
   * @description Custom middleware for setting the view engine
   * 
   * @void
   */
  custom (app) {
    app.set('view engine', 'pug')
    app.set('views', path.resolve('src', 'views'))
  }
}

export default new Renderer()
