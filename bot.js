const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
   client.user.setGame(("I'm Bot Log ."),`http://www.twitch.tv/rebel711`);
});
client.login(process.env.BOT_TOKEN);
