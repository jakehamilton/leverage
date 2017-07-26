import { createComponent } from '../../src'

const component = createComponent({
  config: {
    type: 'http',
    http: {
      path: '/ping',
      method: 'get'
    }
  },

  http (request, response) {
    response.send('Pong!')
  }
})

export default component
