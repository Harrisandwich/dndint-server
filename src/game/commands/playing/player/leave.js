const leave = (commandObj, appstate) => {
  return {
    ouput: 'Command unavailable',
    type: 'error',
  }
}

leave.str = '/leave'
// eslint-disable-next-line
leave.desc = 'Leave the current game and return to the main menu'

export default leave
