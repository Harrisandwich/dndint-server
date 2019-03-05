const host = () => (
  // if file, send a socket message back that requests the campaign json
  // the user doesn't need to be notified of this interaction,
  // but we could put something like "retrieving campaign.."
  {
    output: 'Command unavailable',
    type: 'error',
  }
)

host.str = '/host'
host.options = [{
  name: 'campaign',
  type: 'string || int',
  desc: 'The name or index of the campaign you want to host',
  required: true,
}, {
  name: 'file',
  type: 'bool',
  // eslint-disable-next-line
  desc: 'Load the campaign from local file. If true, -campaign MUST be a string containing the file path',
}]
// eslint-disable-next-line
host.desc = 'Host a campaign as a Dungeon Master'

export default host
