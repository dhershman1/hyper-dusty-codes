const fixed = require('fastify-static')
const path = require('path')

function buildServer (app, _, next) {
  app.register(fixed, {
    root: path.join(__dirname, 'static'),
    prefix: '/assets/'
  })
    .get('*', (_, reply) => reply.sendFile('index.html'))
    .ready().then(() => {
      app.log.info(`
  __
 <- )
 /( \\
 \\_\\_>
  " "`)
    })

  next()
}

module.exports = buildServer
