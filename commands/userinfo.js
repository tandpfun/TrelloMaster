/*

*/
const Discord = require("discord.js");
let searches = require("../data/totalSearch.json")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    if (!searches[user.id]) {
        searches[user.id] = {
            searches: 0
        };
    }
    let userSearch = searches[user.id].searches;

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
        .setColor("BLURPLE")
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField("Amount of searches", "**" + userSearch + "**")

    return message.channel.send(embed)
}

module.exports.help = {
    name: "userinfo"
}