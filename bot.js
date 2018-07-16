const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
   client.user.setGame(("I'm Bot Log .>"),`http://www.twitch.tv/rebel711`);
});

let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("466632282266927124");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '467743101176381462').setName(" . "+rebel+" المتوآجدين بالرومآت الصوتيهه ");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("454658969957433344");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '467743101176381462').setName(" . "+rebel+" المتوآجدين بالرومآت الصوتيهه ");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '467743101176381462').setName(" . "+rebel+" المتوآجدين بالرومآت الصوتيهه ");
}
});

client.on('voiceStateUpdate', (Codes, ReBeL) => {
    let channel3 = ["467743925914828810"];
client.channels.get(channel3)
ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "- 67N KINGDOM  ◆")).then(r => {
      });
console.log("Done");
});
  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "468129294149877760") return console.log("أيرور . ");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("468154162102796299");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
  rebeeel.delete();
  }, 305);
});
});
});

client.login(process.env.BOT_TOKEN);
