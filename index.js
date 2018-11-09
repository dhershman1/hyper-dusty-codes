const fastify = require('fastify')
const static = require('fastify-static')
const path = require('path')

const PORT = 3000
const app = fastify()

app.register(static, {
  root: path.join(__dirname, 'static'),
  prefix: '/assets/'
})

app.get('*', (_, reply) => reply.sendFile('index.html'))

app.listen(PORT, (err, addr) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.info(`
  __
 <- )
 /( \\
 \\_\\_>
  " "
Server started on ${addr}`)
})
