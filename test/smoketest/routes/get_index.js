const { Route } = require('../../../dist/')

const path = require('path')

class R extends Route {
    constructor () {
        super()

        this.name = 'get_index'
        this.path = '/'
        this.method = 'get'
        this.dependencies = {
            services: ['path']
        }
    }

    callback (req, res) {
        res.sendFile(path.resolve(__dirname, '..', 'views', 'index.html'))
    }
}

module.exports = new R()
