import setAppstate from '../../../utils/set-appstate'
import { LOBBY } from '../../../constants/states'
import { PLAYER } from '../../../constants/roles'


const join = ({ payload, socket, io, user, rooms }) => {
  const resp = {}
  const roomCode = payload.options.find(o => o.option === 'room').values[0]
  const displayName = payload.options.find(o => o.option === 'as').values[0]
  if (rooms[roomCode]) {
    socket.join(roomCode, () => {
      user.room = roomCode
      user.role = PLAYER
      user.displayName = displayName
      resp.output = `You have successully joined room ${roomCode}`
      io.emit('command-response', resp)
      setAppstate(LOBBY, io, {
        displayName,
        roomCode,
      })
      io.to(`${roomCode}`).emit('notification', { msg: `${socket.id} has joined the room` })
    })
    return true
  }
  io.emit('error', { output: 'Join failed. Room does not exist. Use "/host" to host this room' })
  return false
}

join.str = '/join'
join.options = [{
  name: 'room',
  type: 'string',
  desc: 'The room code for the game you want to join',
  required: true,
}, {
  name: 'as',
  type: 'string',
  desc: 'The display name you wish to use',
  required: true, // probably will be required later
}]
// eslint-disable-next-line
join.desc = 'Join a game as a player'

export default join
