import randomstring from 'randomstring'
import setAppstate from '../../../utils/set-appstate'
import { LOBBY } from '../../../constants/states'
import { DM } from '../../../constants/roles'


const host = ({ payload, socket, io, user, rooms }) => {
  const resp = {}
  const codeOption = payload.options.find(o => o.option === 'code')
  let roomCode = codeOption ? codeOption.values[0] : randomstring.generate(5)
  const displayName = payload.options.find(o => o.option === 'as').values[0]

  if (codeOption && rooms[roomCode]) {
    // error, chosen room code exists
    io.emit('error', { output: 'This room already exists' })
    return false
  }
  // no code option, generated code exists
  if (!codeOption) {
    do {
      roomCode = randomstring.generate(5)
    } while (rooms[roomCode])
    // if it got out of the loop, it found a room that doesn't exist
    rooms[roomCode] = {
      host: socket.id,
      state: LOBBY,
    }
    socket.join(roomCode, () => {
      user.room = roomCode
      user.role = DM
      user.displayName = displayName
      resp.output = `You have successully created room ${roomCode}`
      io.emit('command-response', resp)
      setAppstate(LOBBY, io, {
        displayName,
        roomCode,
      })
    })
    return true
  }


  io.emit('error', { output: 'Unable to connect' })
  return false
}

host.str = '/host'
host.options = [{
  name: 'as',
  type: 'string',
  desc: 'The display name you wish to use',
  required: true, // probably will be required later
}, {
  name: 'code',
  type: 'string',
  // eslint-disable-next-line
  desc: 'A custom room code. If one is not provided, a random code with be generated',
}]
// eslint-disable-next-line
host.desc = 'Host a campaign as a Dungeon Master'

export default host
