## MVP

Still brainstorming this. If you have any suggestions, contact me or submit an issue.
Some things have been excluded from MVP, but are still planned for future versions. They will be added to lists as they are decided upon

### Installation

- [ ] the app is run in development mode using npm in the cloned git repo

### Global

- [ ] Users can view a list of commands from any app state with the '/help' command
- [ ] Users can get help with a specific command with '/help -cmd commandName'
- [ ] If a command is not used, input is sent as a message
- [ ] Messages are sent back to the player's room, or to the lobby
  

### Main Menu

- [ ] Users can connect to a room as a character
  - [ ] Users can load a character from a pre-made server-side character sheet
- [ ] Users can host a campaign as a DM
  - [ ] Users can load a campaign from a pre-made server-side campaign file
- [ ] Users can view a list of pre made character sheets
- [ ] Users can view a list of pre made campaigns
- [ ] Users can view a list of pre made maps

### In Game: All

- [ ] Users can send a ready check to party members with '/ready'
- [ ] Users can view other players' character sheets with '/character -player NameOrID'
- [ ] Users can view player list with '/players

### In Game: Player

- [ ] Messages sent in a game are sent in-character
- [ ] Players cannot yet perform checks themselves (save for alpha)
- [ ] Players can view their inventory and equipment with '/inventory'
- [ ] Players can view the specifics of an item with '/inventory -item NameOrID'
- [ ] Players can view their character sheet with '/character'
- [ ] In battle, a player can attack on their turn with '/attack -weapon NameOrId -target NameOrID'
  - [ ] Attack rolls are handled by the engine. Neither the DM or the player need run any roll command
- [ ] In battle, at any time, a player can view the battlefield with '/survey'
  - [ ] If it's their turn, a message is sent to the room that says 'PlayerName is surveying the battle field...'
  - [ ] The output displays a description of the battlefield
  - [ ] The output shows a list of enemies, along with distance from the player


### In Game: DM

- [ ] Messages sent in a game are sent as the "narrator"
- [ ] DMs can send a message as an npc with '/as -npc npcNameOrID 
- [ ] DMs can rolls skill checks with '/roll -skill skillID -player playerNameOrID
- [ ] DMs can give items to players with '/give -item ItemNameOrID -amt num -player NameOrID'
  - For now, DMs can only give items that exist in the campaign file or the DnD DB
- [ ] DMs can take items from players with '/take -item ItemNameOrID -amt num -player NameOrID'
- [ ] DMs can view a players inventory and equipment with '/inventory -player NameOrId'
- [ ] DMs can start a battle with '/battle -start battleID'
- [ ] DMs can stop a battle with '/battle -stop'. No ID is required
- [ ] DMs can level up a player with '/lvlup -player NameOrID'
- [ ] DMs can level up all players with just '/lvlup'


## Alpha

### Installation

- [ ] The app is installed as a CLI tool using npm

### Global

### Main Menu

- [ ] Users can join a game as a character from a local JSON file
- [ ] Users can host a game with a campaign from a local JSON file
- [ ] Users can host a game with a map from a local JSON file
- [ ] Users can download a pre made character sheet onto their local machine
- [ ] Users can download a pre made campaign onto their local machine
- [ ] Users can download a pre made map onto their local machine

### In Game: All


### In Game: Player


### In Game: DM


