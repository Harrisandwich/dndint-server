import { hasValidOptions } from '.'
import commands from '../commands'


export default ({ payload, user, socket }) => {
  const category = commands[user.state][user.role]
  const command = category && category[payload.command]
    ? category[payload.command] : commands.general[payload.command]

  if (command) {
    const optionsValid = hasValidOptions(command, payload)
    if (optionsValid.valid) {
      return command({ payload, user, socket })
    }
    return {
      output: optionsValid.msg,
      type: 'error',
    }
  }
  return {
    output: 'Invalid command. Use "/help" to see available commands',
    type: 'error',
  }
}
