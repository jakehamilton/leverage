// library
import server from './lib/server'
import router from './lib/router'
import services from './lib/services'

// definitions
import Route from './definitions/route'
import Service from './definitions/service'
import Middleware from './definitions/middleware'

// exports
export {
    server,
    router,
    services,
    Route,
    Service,
    Middleware
}

// default export everything
export default {
    server,
    router,
    services,
    Route,
    Service,
    Middleware
}
