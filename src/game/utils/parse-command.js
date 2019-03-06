import hasValidOptions from './has-valid-options'
import commands from '../commands'


export default (props) => {
  const { payload, user, io } = props
  const category = commands[user.state][user.role]
  const command = category && category[payload.command]
    ? category[payload.command] : commands.general[payload.command]

  if (command) {
    const optionsValid = hasValidOptions(command, payload)
    if (optionsValid.valid) {
      command(props)
    }
    io.emit('error', { output: optionsValid.msg })
  } else {
    io.emit('error', { output: 'Invalid command. Use "/help" to see available commands' })
  }
}
