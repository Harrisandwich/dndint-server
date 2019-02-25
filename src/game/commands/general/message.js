const message = () => (
  {
    output: 'Command unavailable',
    type: 'error',
  }
)

message.str = '/message'
message.hidden = true // doesn't show up in /help
message.options = []
// eslint-disable-next-line
message.desc = ''

export default message
