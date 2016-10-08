import path from 'path'
import express from 'express'

class Renderer {
  constructor () {
    this.name = 'renderer'
  }

  middleware () {
    return ['/static', express.static(path.resolve('static'))]
  }

  custom (app) {
    app.set('view engine', 'pug')
    app.set('views', path.resolve('src', 'views'))
  }
}

export default new Renderer()
