const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3000

const addRoutes = require('./utils/addRoutes')
const routes = require('./routes')

addRoutes(app, routes)

io.on('connection', socket =>
  socket.on('disconnect', () => {
    http.close()
  }),
)

http.listen(port)

process.on('SIGINT', () => {
  http.close()
  process.exit(0)
})
