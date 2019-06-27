/*

*/
const Discord = require("discord.js");
let searches = require("../data/totalSearch.json")
let favorite = require("../data/favoriteCards.json")
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
    if (!favorite[user.id]) {
        favorite[user.id] = {
            favoriteCard: "❤️"
        };
    }
    let userSearch = searches[user.id].searches;
    let favoCard = favorite[user.id].favoriteCard;

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
        .setColor("BLURPLE")
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField("Amount of searches", "**" + userSearch + "**")
        .addField("Favoritecard", "**" + favoCard + "**");

    return message.channel.send(embed)
}

module.exports.help = {
    name: "userinfo"
}