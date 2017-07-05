/*
 * Import node dependencies
 */
import path from 'path'

/*
 * Import leverage dependencies
 */
import { manager } from '../src'

/*
 * Import http plugin
 */
import http from './plugins/http'

/*
 * Configure the manager to support http routes
 */
manager.plugin(http)

/*
 * Add all our routes to the manager
 */
const components = path.resolve(__dirname, 'components')
manager.add(components)

/*
 * Add our middleware
 */
const middleware = path.resolve(__dirname, 'middleware')
manager.middleware(middleware)

/*
 * Listen to port 8080 in the http server
 */
http.listen(3000)
