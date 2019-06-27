/*
Code written by y3ll0w | mrphilip#7368 on Discord
Please use this code at your own will if you are you using it 
I would appreciate that you  give me some credit in the code or the bot as 
that would keep  me motaviated to create more stuff. 

*/
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({
    disableEveryone: true
});

// Check if the something is missing
if (config.botToken === "BOT-TOKEN-HERE" || config.botToken === "" || config.botToken === " ") {
    console.log("You are missing your bot token. Get it over at https://discordapp.com/developers/applications/")
    return
}
if (config.trello.key === "TRELLO-KEY-HERE" || config.trello.key === "" || config.trello.key === " ") {
    console.log("You are missing your trello key. Get it over at https://trello.com/app-key")
    return
}
if (config.trello.token === "TRELLO-TOKEN-HERE" || config.trello.token === "" || config.trello.token === " ") {
    console.log("You are missing your trello token. Get it over at https://trello.com/app-key")
    return
}


bot.commands = new Discord.Collection();

module.exports = searchesSinceRestart = 0;

var status = 3;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Tries to find a folder called commands and .js files
fs.readdir("./commands", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Command invalid")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} has loaded correctly, Wumpus would be proud of you!`)
        bot.commands.set(props.help.name, props);
    });
})

// Starting the bot let's gooooooooooo
bot.on("ready", async () => {
    console.log(`\n${bot.user.username} is online and ready to rock`)
    var sleepTimer = 8000;
    while (true) {
        if (status === 0) {
            bot.user.setActivity("Trello", { // Change "STATUS" to the status you want the bot to display
                type: "WATCHING"
            });
            await sleep(sleepTimer);
            status++;
        }
        if (status === 1) {
            bot.user.setActivity("with the bugs", { // Change "STATUS" to the status you want the bot to display
                type: "PLAYING"
            });
            await sleep(sleepTimer);
            status++;
        }
        if (status === 2) {
            bot.user.setActivity("with Wumpus", { // Change "STATUS" to the status you want the bot to display
                type: "PLAYING"
            });
            await sleep(sleepTimer);
            status++;
        }
        if (status === 3) {
            bot.user.setActivity("with Clyde", { // Change "STATUS" to the status you want the bot to display
                type: "PLAYING"
            });
            await sleep(sleepTimer);
            status++;
        }
        if (status === 4) {
            bot.user.setActivity("over the testers", { // Change "STATUS" to the status you want the bot to display
                type: "WATCHING"
            });
            await sleep(sleepTimer);
            status = 0;
        }


    }
});

// Last stuff with the robot
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") message.author.send("**Here is my favorite video** \nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ");

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let fcmd = message.content;
    let args = messageArray.slice(1);

    let commadFile = bot.commands.get(cmd.slice(prefix.length));
    if (commadFile) commadFile.run(bot, message, args);

});

// Start the bot
bot.login(config.botToken)