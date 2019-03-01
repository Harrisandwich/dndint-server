## 1. Game Hosting/Joining

DM
```
Main Menu$ /host -campaign test-campaign
/host -campaign test-campaign

Creating room...

Connected to room 1234a. 

You are the DM. Use "/help" to see a list of available commands
When you are ready to start the campaign, use the "/begin" command

DM(1234a)$ 
```


Player 1
```
Main Menu$ /join -room 1234a -as human-battlemage
/join -room 1234a -as human-battlemage

Connecting to room...

Connected to room 1234a

You are a party member. Use "/help" to see a list of available commands.

The campaign has not started yet. 
Please wait until the DM begins the campaign. 

You can still use chat while you wait. 

Gorg(lvl 1)$ 
```

Player 2
```
Main Menu$ /join -room 1234a -as billy-the-elf
/join -room 1234a -as billy-the-elf

Connecting to room...

Connected to room 1234a

You are a party member. Use "/help" to see a list of available commands.

The campaign has not started yet. 
Please wait until the DM begins the campaign. 

You can still use chat while you wait. 

Billy(lvl 1)$ 
```

DM
```
You are the DM. Use "/help" to see a list of available commands
When you are ready to start the campaign, use the "/begin" command

DM(1234a)$ 

Gorg has joined the party. 
You can use the '/inspect' command on this player to see their character sheet

DM(1234a)$ Sup idiot lol
Sup idiot lol
Gorg(lvl 1): No u

Billy has joined the party. 
You can use the '/inspect' command on this player to see their character sheet

DM(1234a)$ Everyone ready?
Everyone ready?
Gorg(lvl 1): Yup!
Billy(lvl 1): Ready!
```

## 2. Starting the Campaign

DM:
```
DM(1234a)$ /begin
/begin

The campaign is starting...
Waiting for players...
```

Gorg (Player 1):
```
The campaign is starting...
Are you ready?(y/n)$ y
y
```

Billy (Player 2):
```
The campaign is starting...
Are you ready?(y/n)$ y
y
```

DM:
```
Players are ready!

Introduction
------------

In a world in a kingdom on a hill there is a hole. In the the hole on the hill in the kingdom is a cave. In that cave is a treasure. You, adventurer, have been hired to retrieve the treasure by a wealthy collector. Try not to die...


```

**From here on, when the DM sends a message, their handle will be**
**"Narrator(dm):" unless speaking as an npc**
**I have a fun idea for character chat that I'll demonstrate in a moment**

**for the sake of easy reading, I'm going to just put all command lines together, showing all commands entered and all responses. command prompts have a '$' and dialog has ':'**

```
(All)
Narrator(dm): Your party enters the cave. The first chamber is cramped, with a low ceiling. A tunnel is visible directly across from the cave entrance.

Running passive perception check...

Billy - Wisdom 5
Gorg - Wisdom 3

Billy rolls a d20
Billy rolled a 6

Gorg rolls a d20
Gorg rolled a 2

Billy - 11
Gorg - 5

(DM only)
(Here the dm can choose to reveal clues and details)
(or if they specified it in the campaign file, details would be revealed automatically)
DM$ /reveal -tiles 1a -details "Door Mechanism"

(All)
(Reveal text will be displayed for each item)

Success!

A wooden crate sits against the back corner of the chamber (1a)

There seems to be a mechanism above the tunnel entrance...

(DM only)
Gorg: I open the crate

(All)
Narrator(dm): Gorg discovers a small heap of gold coins

(DM only)
DM$ /give -item gold -amt 50 -player 2

(All)
Gorg picked up 50 gold!

Billy: I investigate the mechanism 

(dm only)
DM: /roll -skill int -player 2

(All)
Intelligence check: Billy

Billy - Intelligence 4
Billy rolls a d20
Billy rolled a 1

Final Result: Intelligence 5

Narrator: The mechanism looks like some sort of trap. If triggered, it could trap the party in the entrance chamber. It's not clear where the trigger is

Gorg: I pick up the crate and place it under the door

(dm only)
DM: /roll -skill str -player 1

(All)
Strength check: Gorb

Gorg - Strength 5
Gorg rolls a d20
Gorg rolled a 5

Final Result: Strength 10

Narrator: Gorg expertly hoists the crate onto his shoulders, making sure to lift with his knees. He places it underneath the door. *SNAP* The crate was placed on a trip wire that was afixed, ankle height, across the tunnel entrance.

A loud click is heard from the mechanism as a large metal panel is released.

The panel crashes into the the crate...and is stopped! The crate was strong enough to prevent the opening from being completely sealed. There is room enough under it to crawl through into the dark chamber beyond.
```

