import { LOBBY, PLAYING } from '../../constants/states'
import { DM, PLAYER } from '../../constants/roles'

const getDisplayName = (user) => {
  let displayName = user.displayName
  if (user.state === PLAYING) {
    if (user.role === DM) {
      displayName = 'Narrator'
    } else {
      displayName = user.character.name
    }
  }
  return displayName
}

const message = ({ payload, socket, io, user, rooms }) => {

  const message = payload.options.find(o => o.option === 'text').values[0]
  const roomCode = user.room
  const displayName = getDisplayName(user)

  io.to(roomCode).emit('message', {
    output: message,
    displayName,
  })

  return true
}

message.str = '/message'
message.hidden = true // doesn't show up in /help
message.options = []
// eslint-disable-next-line
message.desc = ''

export default message
