/*
 * @TODO: Documentation for the ComponentConfig object
 */

/**
 * @class Component
 * @description The base component definition
 */
export default class Component {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @private {ComponentConfig} __config__ The private component configuration object
     */
    this.__config__ = {
      type: ['http']
    }
  }

  /*
   * @static
   * @method of Extend the base component with your own
   *
   * @param {Component} object Your component definition
   *
   * @return {Component} component A component instance
   */
  static of (object) {
    /*
     * Create a new component and copy over everything from the
     *  provided object.
     */
    return Object.assign(new Component(), object)
  }

  /**
   * @setter config
   * @description Set the component's config
   *
   * @param {ComponentConfig} config The component configuration object to use
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
         * Component type must be an array of types
         */
        this.__config__[key] = [].concat(config[key])
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
            throw new Error(`[Leverage/definitions/route] Error updating route configuration, expected an Array but got ${typeof config[key][type]}`)

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
           * Set the depencencies list on the internal config
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
