/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   return message.channel.send("I have searched ``" + searchesSinceRestart + "`` times since restart.")
}

module.exports.help = {
    name:"stats"
}
