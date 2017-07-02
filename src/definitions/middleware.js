/*
 * @TODO: Documentation for the MiddlewareConfig object
 */

/**
 * @class Middleware
 * @description The base middleware definition
 */
export default class Middleware {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @private {MiddlewareConfig} __config__ The private middleware configuration object
     */
    this.__config__ = {
      type: ['http']
    }
  }

  /**
   * @setter config
   * @description Set the middleware's config
   *
   * @param {Middleware} config The middleware configuration object to use
   */
  set config (config) {
    /*
     * Loop through the keys in the config
     */
    for (let key in config) {
      /*
       * If the key is for 'type', ensure it is set properly
       */
      if (key === 'type') {
        /*
         * Middleware type must be an array of types
         */
        this.__config__[key] = [].concat(config[key])
      }

      /*
       * For all other properties, just copy them over
       */
      else {
        this.__config__[key] = config[key]
      }
    }
  }
}
