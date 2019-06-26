/*

*/
const Discord = require("discord.js");
let searches = require("../data/totalSearch.json")

module.exports.run = async (bot, message, args) => {
    let user;
  
    if(message.mentions.users.first()){
        user = message.mentions.users.first();
    }
    else{
        user = message.author;
    }
    if (!searches[user.id]) {
        searches[user.author.id] = {
            searches: 1
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
    name:"userinfo"
}
