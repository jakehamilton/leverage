/*
 * @TODO: Documentation for the PluginConfig object
 */

/**
 * @class Plugin
 * @description The base plugin definition
 */
export default class Plugin {
  /**
   * @constructor
   */
  constructor () {
    /**
     * @private {PluginConfig} __config__ The private plugin configuration object
     */
    this.__config__ = {}
  }

  /*
   * @static
   * @method of Extend the base Plugin with your own
   *
   * @param {Plugin} object Your plugin definition
   *
   * @return {Plugin} plugin A plugin instance
   */
  static of (object) {
    /*
     * Create a new plugin and copy over everything from
     *  the provided object
     */
    return Object.assign(new Plugin(), object)
  }

  /**
   * @setter config
   * @description Set the plugin's config
   *
   * @param {PluginConfig} config The plugin configuration object to use
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
         * The internal type value is an array of
         *  strings.
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
