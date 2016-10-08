import path from 'path'

import server from './lib/server'
import router from './src/middleware/router'
import services from './lib/services'
import renderer from './src/middleware/renderer'

console.log('[Leverage] Starting server')
server.listen()

console.log('[Leverage] Adding middleware to server')
server.load(renderer)

console.log('[Leverage] Connecting router to server')
router.connect(server)
console.log('[Leverage] Finished connecting router to server')

console.log('[Leverage] Loading routes and services')
Promise.all([
  router.addRoutes(path.resolve('.', 'src', 'routes')),
  services.addServices(path.resolve('.', 'src', 'services'))
])
  .then(() => {
    console.log('[Leverage] Finished loading routes and services')

    console.log('[Leverage] Patching router with dependencies')
    services.patch(router)
    console.log('[Leverage] Finished patching router')
  })
