/*
 * Import definitions
 */
import Component from './definitions/component'
import Plugin from './definitions/plugin'
import Service from './definitions/service'
import Middleware from './definitions/middleware'

/*
 * Import library files
 */
import server from './lib/server'
import manager from './lib/manager'

/*
 * Export definitions
 */
export {
  Component,
  Plugin,
  Service,
  Middleware
}

/*
 * Export library files
 */
export {
  server,
  manager
}

/*
 * Export aliases
 */
export const createComponent = Component.of
export const createPlugin = Plugin.of
export const createService = Service.of
export const createMiddleware = Middleware.of

/*
 * Default export
 */
export default {
  /*
   * Definitions
   */
  Component,
  Plugin,
  Service,
  Middleware,

  /*
   * Library files
   */
  server,
  manager,

  /*
   * Aliases
   */
  createComponent: Component.of,
  createPlugin: Plugin.of,
  createService: Service.of,
  createMiddleware: Middleware.of
}
