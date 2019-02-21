import SocketServer from 'socket.io'


export default (server) => {
  const io = SocketServer(server)

  io.on('connection', (socket) => {
    console.log('a user connected')
  })

  return io
}
