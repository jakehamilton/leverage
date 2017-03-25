export default class Service {
    constructor () {
        this.name = 'unnamed-service'
        this.module = null
    }

    use (...args) {
        return this.module(...args)
    }
}
