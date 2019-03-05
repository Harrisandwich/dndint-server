const join = () => (
  {
    output: 'Command unavailable',
    type: 'error',
  }
)

join.str = '/join'
join.options = [{
  name: 'room',
  type: 'string',
  desc: 'The room code for the game you want to join',
  required: true,
}, {
  name: 'as',
  type: 'string',
  desc: 'The name of the character file you wish to use',
  required: false, // probably will be required later
}]
// eslint-disable-next-line
join.desc = 'Join a game as a player'

export default join
