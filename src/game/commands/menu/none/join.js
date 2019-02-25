const join = () => {
  /*
    Things to keep in mind:
    - What if player is already connected to this game as this character?

  */
  return {
    output: 'Command unavailable',
    type: 'error',
  }
}

join.str = '/join'
join.options = [{
  name: '-room',
  type: 'string',
  desc: 'the room code for the game you want to join',
  required: true,
}]
// eslint-disable-next-line
join.desc = 'Join a game as a player'

export default join
