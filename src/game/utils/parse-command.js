import commands from '../commands'


export default ({ commandObj, user, socket }) => {
  const category = commands[user.state][user.role]
  const command = category && category[commandObj.command]
    ? category[commandObj.command] : commands.general[commandObj.command]

  if (command) {
    // checks if the command passed is valid for this command
    // before running the command as a callback
    return validateCommand(
      command,
      commandObj,
      () => command({ commandObj, user, socket }),
    )
  }
  return {
    output: 'Invalid command. Use "/help" to see available commands',
    type: 'error',
  }
}
