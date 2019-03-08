import SocketServer from 'socket.io'
import { NONE } from '../game/constants/roles'
import { MENU } from '../game/constants/states'
import { parseCommand } from '../game/utils'
import setAppstate from '../game/utils/set-appstate'


export default (server) => {
  const io = SocketServer(server)
  const users = {}
  const rooms = {}
  io.on('connection', (socket) => {
    users[socket.id] = {
      id: socket.id,
      displayName: '',
      character: {},
      room: '',
      role: NONE,
      state: MENU,
    }
    setAppstate(MENU, socket, io)
    socket.on('command', (payload) => {
      const user = users[socket.id]
      parseCommand({
        payload,
        socket,
        io,
        users,
        rooms,
        user,
      })
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
