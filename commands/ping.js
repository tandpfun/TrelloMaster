/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/
const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return
    return message.channel.send('Pong :ping_pong:  `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
}

module.exports.help = {
    name: "ping"
}