const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
   client.user.setGame(("I'm Bot Log ."),`http://www.twitch.tv/rebel711`);
});

let channel3 = ["468129294149877760"];
client.on('voiceStateUpdate', (Codes, ReBeL) => {
client.channels.get(channel3);
ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "- 67N KINGDOM  ◆"))
client.channels.get("467743925914828810").then(c => {
ReBeL.setVoiceChannel(c)
console.log("Done");
});
});

client.login(process.env.BOT_TOKEN);
