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
       * If the key is for 'dependencies', ensure it is a map of named arrays
       */
      else if (key === 'dependencies') {
        /*
         * Loop through each dependency type in the object
         */
        for (let type in config[key]) {
          /*
           * Check to see if the value is not an array
           *  (it should be).
           */
          if (!Array.isArray(config[key][type])) {
            /*
             * Uh oh, we only support arrays right now
             */
            throw new Error(`[Leverage/definitions/service] Error updating service configuration, expected an Array but got ${typeof config[key][type]}`)

            /*
             * Let's get out of here before things really break!
             */
            return
          }

          /*
           * If we've gotten here, then all our dependencies are
           *  in the correct format. Now we copy it to the
           *  internal configuration object.
           */

          /*
           * First ensure that the key exists on the internal
           *  config object. It does not have a value initially.
           */
          if (!this.__config__[key]) {
            this.__config__[key] = {}
          }

          /*
           * Set the dependencies list on the internal config
           *  object.
           */
          this.__config__[key][type] = config[key][type]
        }
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
