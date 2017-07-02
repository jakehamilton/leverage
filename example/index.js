/*
 * Import node dependencies
 */
import path from 'path'

/*
 * Import leverage dependencies
 */
import { router } from '../dist'

/*
 * Import http plugin
 */
import http from './plugins/http'

/*
 * Configure the router to support http routes
 */
router.plugin(http)

/*
 * Add all our routes to the router
 */
const routes = path.resolve(__dirname, 'routes')
router.add(routes)

/*
 * Add our middleware
 */
const middleware = path.resolve(__dirname, 'middleware')
router.middleware(middleware)

/*
 * Listen to port 8080 in the http server
 */
http.listen(3000)
