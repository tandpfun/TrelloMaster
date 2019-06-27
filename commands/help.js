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
    let helpRich = new Discord.RichEmbed()
        .setColor("BLURPLE")
        .setDescription("**>Help Menu**")
        .addField("search + board + keyword", "It will search Trello and send back links to the relevent cards")
        .addField("stats", "Sends back some really intresting data about the searches")
        .addField("userinfo", "@somone or leave it to get your own userinfo (total amount of searches)")
        .addField("favorite / favoritecard", "set your favorite trello card and see it by favoritecard")
        .setFooter(`Command sent by ${message.author.tag}`, message.author.avatarURL);

    return message.channel.send(helpRich)

}

module.exports.help = {
    name: "help"
}