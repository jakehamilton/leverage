/*
 * @TODO: Documentation for the ServiceConfig object
 */

/**
 * @class Service
 * @description The base service definition
 */
export default class Service {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @private {ServiceConfig} __config__ The private service configuration object
     */
    this.__config__ = {}
  }

  /*
   * @static
   * @method of Extend the base Service with your own
   *
   * @param {Service} object Your service definition
   *
   * @return {Service} service A service instance
   */
  static of (object) {
    /*
     * Create a new service and copy over everything from
     *  the provided object
     */
    return Object.assign(new Service(), object)
  }

  /**
   * @setter config
   * @description Set the service's config
   *
   * @param {ServiceConfig} config The service configuration object to use
   */
  set config (config) {
    /*
     * Loop through the keys in the config
     */
    for (let key in config) {
      /*
       * If the key is for 'type', ensure it is set properly
       */
      if (key === 'name') {
        /*
         * Service type must be a string
         */
        if (typeof config[key] !== 'string') {
          /*
           * Uh oh, we only support strings right now
           */
          throw new Error(`[Leverage definitions/service] Error updating service configuration, expected a String but got ${typeof config[key]}`)

          /*
           * Let's get out of here before things really break!
           */
          return
        }

        /*
         * If we got here, the type must be valid. Now
         *  we just set it on the internal configuration
         *  object.
         */
        this.__config__[key] = config[key]
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
