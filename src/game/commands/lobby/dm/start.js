
const start = () => {}
start.str = 'start'
start.options = [{
  name: 'campaign',
  type: 'string || int',
  desc: 'The name or index of the campaign you want to host',
  required: false,
}, {
  name: 'file',
  type: 'bool',
  // eslint-disable-next-line
  desc: 'Load the campaign from local file. If true, -campaign MUST be a string containing the file path',
}]
