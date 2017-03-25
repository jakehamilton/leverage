const path = require('path')
const { server, router, services } = require('../../dist/')

server.listen(3000)

router.connect(server)

Promise.all([
    router.add(path.resolve(__dirname, 'routes')),
    services.add(path.resolve(__dirname, 'services'))
]).then(_ => {
    services.patch(router)
})
