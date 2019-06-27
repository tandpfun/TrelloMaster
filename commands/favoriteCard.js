/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/
const Discord = require("discord.js");
let favorite = require("../data/favoriteCards.json")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return

    let favo = favorite[message.author.id].favoriteCard;

    return message.channel.send("Your favorite card is ``" + favo + "``.")
}

module.exports.help = {
    name: "favoritecard"
}