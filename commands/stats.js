/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/
const Discord = require("discord.js");
const config = require("../config.json");
let searches = require("../data/totalSearch.json")

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return
    if (!searches[message.author.id]) {
        searches[message.author.id] = {
            searches: 0
        };
    }
    let userSearch = searches[message.author.id].searches;
    
    return message.channel.send("I have searched ``" + searchesSinceRestart + "`` times since restart and you have made `" + userSearch + "` searches in total.")
}

module.exports.help = {
    name: "stats"
}