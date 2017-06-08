const path = require('path')
const { server, router, services } = require('../../dist/')
const middleware = require('./middleware/test')

server.listen(3000)

server.load(middleware)

router.connect(server)

Promise.all([
    router.add(path.resolve(__dirname, 'routes')),
    services.add(path.resolve(__dirname, 'services'))
]).then(_ => {
    services.patch(router)
})
