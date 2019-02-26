import SocketServer from 'socket.io'
import { NONE } from '../game/constants/roles'
import { MENU } from '../game/constants/states'
import { parseCommand } from '../game/utils'


export default (server) => {
  const io = SocketServer(server)
  const users = {}
  io.on('connection', (socket) => {
    users[socket.id] = {
      id: socket.id,
      room: '',
      role: NONE,
      state: MENU,
    }
    io.emit('set-appstate', { state: MENU })
    socket.on('command', (msg) => {
      const { command } = msg
      const user = users[socket.id]
      io.emit('command-response', parseCommand({ commandObj: command, socket, user }))
    })
    socket.on('disconnect', () => {
      // if player
      // trigger leave game

      // if DM
      // autosave the campaign
      // trigger end game

      delete users[socket.id]
    })
  })
  return io
}
