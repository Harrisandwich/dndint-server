import { PLAYING } from '../../constants/states'
import { DM } from '../../constants/roles'


const getDisplayName = (user) => {
  if (user.state === PLAYING) {
    if (user.role === DM) {
      return 'Narrator'
    }
    return user.character.name
  }
  return user.displayName
}

const message = ({ payload, io, user }) => {
  const message = payload.options.find(o => o.option === 'txt').values[0]
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
