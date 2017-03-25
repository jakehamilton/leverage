const path = require('path')
const { Service } = require('../../../dist/')

class S extends Service {
    constructor () {
        super()

        this.name = 'path'
        this.module = path
    }
}

module.exports = new S()
