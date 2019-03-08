import { LOBBY, MENU, PLAYING } from '../constants/states'


export default (state, socket, io, props) => {
  let prompt = 'Main Menu: '
  switch (state) {
    case MENU:
      prompt = 'Main Menu: '
      break
    case LOBBY:
      prompt = `${props.displayName}-${props.roomCode}: `
      break
    case PLAYING:
      prompt = `${props.name}: `
      break
    default:
      prompt = 'Main Menu: '
  }
  io.to(socket.id).emit('set-appstate', {
    prompt,
    state,
  })
}
