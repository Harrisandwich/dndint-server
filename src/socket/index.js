import SocketServer from 'socket.io'


export default (server) => {
  const io = SocketServer(server)

  io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('command', (socket) => {
      console.log('a command has been received')
      io.emit('command-response', { good: 'yes ' })
    })
  })
  return io
}
