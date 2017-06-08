const { Middleware } = require('../../../dist/')

class M extends Middleware {
    constructor () {
        super()

        this.name = 'test'
    }

    custom (app) {
        app.get('/test', (req, res) => {
            res.end('Testing!')
        })
    }
}

module.exports = new M()
