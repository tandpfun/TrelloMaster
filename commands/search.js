/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/

const Discord = require("discord.js");
const config = require("../config.json");
const request = require("request");
const fs = require("fs")
let searches = require("../data/totalSearch.json")

module.exports.run = async (bot, message, args) => {

    var trelloKey = config.trello.key;
    var trelloToken = config.trello.token;

    var desktopBugs = config.trello.desktop_bugs;
    var iosBugs = config.trello.ios_bugs;
    var storeBugs = config.trello.store_bugs;
    var androidBugs = config.trello.android_bugs;
    var linuxBugs = config.trello.linux_bugs;

    var boardID;

    let board = args[0].toLowerCase()
    let keyword = args.slice(1).join(" ")
    let amtOfCards = args.slice(2).join(" ")
    let amtCards = "5"
    if (amtOfCards === "") amtCards == "5"
    else amtCards = amtOfCards

    if (amtCards >= 13) return message.channel.send("Too many card's this will not work please lower the amount of cards")

    if (board == "desktop" || board == "linux" || board == "ios" || board == "android" || board == "store") {
        if (board == "desktop") boardID = desktopBugs;
        if (board == "linux") boardID = linuxBugs;
        if (board == "ios") boardID = iosBugs;
        if (board == "android") boardID = androidBugs;
        if (board == "store") boardID = storeBugs;


    } else return message.channel.send("**Invalid board**\nTry one of the following instead ``desktop``, ``linux``, ``ios``, ``android``, ``store``")
    if (keyword === "") return message.channel.send("**You need an ** ``keyword`` **for me to search**")

    var embed = new Discord.RichEmbed()

    var options = {
        method: 'GET',
        url: 'https://api.trello.com/1/search',
        qs: {
            query: keyword,
            idBoards: boardID,
            modelTypes: 'cards',
            boards_limit: '1',
            card_fields: 'desc,name,shortUrl,labels,closed',
            cards_limit: amtCards,
            cards_page: '0',
            card_list: 'false',
            card_members: 'false',
            card_stickers: 'false',
            card_attachments: 'true',
            organization_fields: 'name,displayName',
            organizations_limit: '10',
            member_fields: 'avatarHash,fullName,initials,username,confirmed',
            members_limit: '10',
            partial: 'false',
            key: trelloKey,
            token: trelloToken
        }
    };

    request(options, async function (error, response, body) {
        let data = JSON.parse(body)
        let cards = data.cards
        if (cards.length >= 1) {
            var cardsDone = []
            cards.forEach(card => {
                cardsDone.push(`**${card.name}**\nLink: ${card.shortUrl}`)
            })
            var cardsJoin = cardsDone.join("\n\n")
            await embed.setTitle(`Beep boop I found ${cards.length} bugs`)
            await embed.setDescription(cardsJoin)
            await embed.setColor("BLURPLE")
            await embed.setFooter(`Command sent by ${message.author.tag}`, message.author.avatarURL)
            await message.channel.send(embed)
            searchesSinceRestart++;

            if (!searches[message.author.id]) {
                searches[message.author.id] = {
                    searches: 1
                };
            }

            searches[message.author.id] = {
                searches: searches[message.author.id].searches + 1
            };
            fs.writeFile("./data/totalSearch.json", JSON.stringify(searches), (err) => {
                if (err) console.log(err)
            });
            
        } else {
            if (cards.length === 0) {
                return message.channel.send("Beep boop 😞 found nothing Robot sad. But I am  only an robot so please don't yell at me")
            }


        }
    });
}

module.exports.help = {
    name: "search"
}