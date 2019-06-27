/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/
const Discord = require("discord.js");
let favorite = require("../data/favoriteCards.json")
const config = require("../config.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return
    let favoriteCard = args[0]


    if (favorite[message.author.id]) {
        favorite[message.author.id] = {
            favoriteCard: favoriteCard.toString()
        };
    }
    if (!favorite[message.author.id]) {
        favorite[message.author.id] = {
            favoriteCard: favoriteCard.toString()
        };
    }
  
 let favo = favorite[message.author.id].favoriteCard;

    fs.writeFile("./data/favoriteCards.json", JSON.stringify(favorite), (err) => {
        if (err) console.log(err)
    });

    
    return message.channel.send("Your new favorite card is ``" + favo + "``.")
}

module.exports.help = {
    name: "favorite"
}