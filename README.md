<h1 align="center">Welcome to TrelloMaster 👋</h1>
<p>
</p>

<h3 align="center">An Discord Bot that will enchance the  quality for Bug Hunter&#39;s to find the correct Trello Card, thru simple commands.</h6>
<h4 align="center">Made for the 0st Discord Community Hack Week</h6>

## Work in progress
~~- * Userinfo with how many searches and similare.~~  
~~- * JSON stored data.~~

## Prerequisites

- node &gt;=9.3.0

## Quick installation guide
```sh
create an folder

npm init
npm install discord.js
npm i request

open the config.json and fill in the information that is needed

open an terminal, navigate to the folder and write node index.js
Beep boop bot is active and ready to rock
type !help (or what prefix you are using) in an channel where the bot is online to see all the commands
```

## config.json explanation
```sh
prefix: the prefix before the commands (default "!")
botToken: your bot token you can get it over at https://discordapp.com/developers/applications/
richOrText: the way the bot should answer in an rich embed or in pure text form (default "rich")

trello
  key: your trello key you can get one over at https://trello.com/app-key
  token: your trello token you can get one over at https://trello.com/app-key
  desktop, ios, store, android, linux bugs: that is just the id of the board nothing to worry about

```
## All commands
[!help](https://gyazo.com/08dfe2a9169fed21e28f8f0439b3dbc7): simple help command gives back all the command and quick explanation  
[!search + board + keyword (+ amount of boards max 13)](https://gyazo.com/9f40ffab4c18007720e8e988dd4308d3): It will search Trello and send back links to the relevent cards  
[!stats](https://gyazo.com/d18652f6a5d5492c9a68412d0e893ffa): sends back some really intresting data about the searching and bot  
[!userinfo](https://gyazo.com/4196a653029f41f7094568845c436303): @somone or leave it to get your own userinfo (total amount of searches)  

## Author
👤 **y3ll0w**

* Twitter: [@realY3ll0w](https://twitter.com/realY3ll0w)
* Github: [y3ll0wlife](https://github.com/y3ll0wlife)
* Discord: [mrphilip#7368](http://discordapp.com)

## Project inspired by Rage0001
* His project [https://github.com/Rage0001/bug-searching-tool](https://github.com/Rage0001/bug-searching-tool)


## Show your support
Give a ⭐️ if this project helped you!
