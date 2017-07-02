Creating A Service
==================

A simple service definition has three important parts:

1. The class declaration extending the base Service
2. The `config` object for your service
3. The service's name

Here is an example of a simple service:

##### log.js
```js
/*
 * Get the base Service definition from Leverage
 */
import { Service } from 'leverage-js'

/*
 * Extend the base Service definition to create our own
 */
class S extends Service {
  constructor () {
    /*
     * Required
     */
    super()

    /*
     * Create our service's config
     */
    this.config = {
      /*
       * A service's name is very important. It will be
       *  how a route accesses this service. It must
       *  also be unique.
      name: 'log'
    }
  }

  /*
   * You can add any methods for your service
   *  like normal.
   */
  logSomething (text) {
    console.log(text)
  }
}

/*
 * Export an instance of our service
 */
export default new S()
```
