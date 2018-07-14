const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
   client.user.setGame(("I'm Bot Log ."),`http://www.twitch.tv/rebel711`);
});
client.on('channelCreate', async (channel) => {
  if(channel.type === 'dm') return;
let logchannel = client.channels.find('name', 'log')
       const entry = await guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
       let user = ""
    user = entry.executor
       var logemp= new Discord.RichEmbed()
 .setTitle("✅ | Channel Created")
 .setColor('#00ff00')
 .setDescription(``)
       .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
  .addField(`Channel Name`, channel.name, true)
       .addField(`Channel Type`, channel.type, true)
       .addField(`Created by`, user)
      .setFooter(moment(Date.now()+10800000).format('llll'))
       logchannel.send(logemp)
       });
client.on('channelDelete', async (channel) => {
  if(channel.type === 'dm') return;
let logchannel = client.channels.find('name', 'log')
              const entry = await guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
       let user = ""
    user = entry.executor
       var logemp= new Discord.RichEmbed()
       
 .setTitle("❎ | Channel Deleted")
 .setColor('#ff0000')
 .setDescription(``)
       .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
  .addField(`Channel Name`, channel.name, true)
       .addField(`Channel Type`, channel.type, true)
              .addField(`Deleted by`, user)

  .setFooter(moment(Date.now()+10800000).format('llll'))
       logchannel.send(logemp)
       });


client.on("channelPinsUpdate", async channel => {
  console.log(`${channel.name}'s pins have been updated.`);
let logchannel = client.channels.find('name', 'log')
      var logemp= new Discord.RichEmbed()
       .setTitle("📝 | New Pin Created/Removed")
 .setColor('#0000FF')
    .addField("Channel", `${channel}`)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)

})
client.on('messageUpdate', async  (oldMessega, newMessega) => {
let logchannel = client.channels.find('name', 'log')
var user = oldMessega.author
   if(user.bot)return ;
      var logemp= new Discord.RichEmbed()
 .setTitle("📝 | Message Edited")
 .setColor('#0000FF')
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(``)
 .addField(`From:`, oldMessega)
 .addField(`To:`, newMessega)
.addField(`Edited by:`,user)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)

})

client.on("channelUpdate", async(oldChannel, newChannel) => {
  console.log(`channel ${oldChannel.name}'s name has been changed to ${newChannel.name}.`)
// Creates log when channel name is updated

  if(oldChannel.position !== newChannel.position) {
    return;
  }
  if(oldChannel.topic !== newChannel.topic && oldChannel.name === newChannel.name) {
    let updateembed = new Discord.RichEmbed()
 .setTitle("📝 | topic Edited")
 .setColor('#0000FF')
      .addField("Channel", `${newChannel.name}`)
      .addField("Old topic", `${oldChannel.topic}`)
      .addField("New topic", `${newChannel.topic}`)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      let mmodchannel =  client.channels.find('name', 'log')
      mmodchannel.send(updateembed);
  }
  if(oldChannel.topic !== newChannel.topic && oldChannel.name !== newChannel.name) {
    let updateembed = new Discord.RichEmbed()
 .setTitle("📝 | Channel Edited")
 .setColor('#0000FF')
      .addField("Old name Channel", `${oldChannel.name}`)
      .addField("New name Channel", `${newChannel.name}`)
      .addField("Old topic", `${oldChannel.topic}`)
      .addField("New topic", `${newChannel.topic}`)
  .setFooter(moment(Date.now()+10800000).format('llll'));
      let mmodchannel =  client.channels.find('name', 'log')
      mmodchannel.send(updateembed);
  }
  if(oldChannel.name !== newChannel.name && oldChannel.topic === newChannel.topic) {
    let updateembed = new Discord.RichEmbed()
 .setTitle("📝 | Channel Edited")
 .setColor('#0000FF')
      .addField("Old name Channel", `${oldChannel.name}`)
      .addField("New name Channel", `${newChannel.name}`)
  .setFooter(moment(Date.now()+10800000).format('llll'));
      let modchannel =  client.channels.find('name', 'log')
      modchannel.send(updateembed);
  }

})



client.on('messageDelete', async  (message) => {
let logchannel =  client.channels.find('name', 'log')
       const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
 let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor
  } else { 
    user = message.author
  }

       var logemp= new Discord.RichEmbed()
 .setColor('#ff0000')
       .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(`**🗑 Message sent by <@${message.author.id}> deleted in ${message.channel}**:\n`+'```'+message.content+'```')
       .addField(`Deleted by:`,user)
      .setFooter(moment(Date.now()+10800000).format('llll'))
       logchannel.send(logemp)
       });
client.on('guildMemberRemove', member => {
  const logchannel =  client.channels.find('name', 'log')
         var logemp= new Discord.RichEmbed()
 .setColor('#ffff00')
.setAuthor(`${member.user.username}#${member.user.discriminator}`, member.user.avatarURL)
.setDescription(`**${member.user.username}** has left the server`)
.setThumbnail(member.user.displayAvatarURL)
.setFooter(moment(Date.now()+10800000).format('llll'))
  logchannel.send(logemp)  


})
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
client.on('guildMemberUpdate', async (oldMember,newMember) => {
  let myrole = []

let logchannel =  client.channels.find('name', 'log')
 
           const entry = await guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first())
 let user = ""
    user = entry.executor
  let roles1 = newMember.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles1.length < 1) roles1 = ['None'];
    let roles2 = oldMember.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles2.length < 1) roles2 = ['None'];


  if(roles1.length > roles2.length){
myrole = roles1.diff(roles2)
 var logemp= new Discord.RichEmbed()
 .setColor('#00ff00')
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(`✅  ${newMember.user} was given the `+"`"+myrole+"`"+` role  by ${user}`)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)

  }
  if(roles1.length < roles2.length){
myrole = roles2.diff(roles1)
  
 var logemp= new Discord.RichEmbed()
 .setColor('#ff0000')
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(`❌  ${newMember.user} was removed from the `+"`"+myrole+"`"+` role  by ${user}`)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)
  }
})

client.on("roleCreate", async rolc => {

let logchannel =  client.channels.find('name', 'log')
            const entry = await guild.fetchAuditLogs({type: 'MEMBER_ROLE_CREATE'}).then(audit => audit.entries.first())
 let user = ""
    user = entry.executor

 var logemp= new Discord.RichEmbed()
 .setColor('#00ff00')
   .setTitle(`✅ Role Created`)
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(`${user} was Created role name : ${rolc.name} `)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)
});

client.on("roleDelete",  async rold => {

let logchannel =  client.channels.find('name', 'log')
    const entry = await guild.fetchAuditLogs({type: 'MEMBER_ROLE_DELETE'}).then(audit => audit.entries.first())
 let user = ""
    user = entry.executor
 var logemp= new Discord.RichEmbed()
 .setColor('#ffff00')
   .setTitle(`❌ Role Deleted`)
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(`${user} was Deleted role name : ${rold.name} `)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)
});
client.on('roleUpdate', async  (oldRole, newRole) => {
let logchannel =  client.channels.find('name', 'log')
    const entry = await guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first())
 let user = ""
    user = entry.executor
   if(user.bot)return ;
      var logemp= new Discord.RichEmbed()
 .setTitle("📝 | Role Edited")
 .setColor('#0000FF')
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
 .setDescription(``)
 .addField(`From:`, oldRole.name)
 .addField(`To:`, newRole.name)
.addField(`Edited by:`,user)
  .setFooter(moment(Date.now()+10800000).format('llll'))
      logchannel.send(logemp)

})


client.on("guildMemberUpdate", async(oldMember, newMember) =>{
// Creates a log when a members' nickname or roles are changed.
  if(oldMember.nickname !== newMember.nickname) {
    let nickembed = new Discord.RichEmbed()
      .setAuthor(oldMember.nickname, newMember.user.displayAvatarURL)
 .setTitle("📝 | Nickname Edited")
 .setColor('#0000FF')
      .addField("Old nickname", `${oldMember.nickname}`)
      .addField("New nickname", `${newMember}`)
      .setTimestamp();

      let modchannel =  client.channels.find('name', 'log')
      modchannel.send(nickembed)

  };
  if(oldMember.roles.array() !== newMember.roles.array() && oldMember.nickname === newMember.nickname) {
    let nroleembed = new Discord.RichEmbed()
      .setAuthor(oldMember.user.tag, newMember.user.displayAvatarURL)
       .setTitle("📝 | User Roles Edited")
 .setColor('#0000FF')
      .addField("Old roles", `${oldMember.roles.array()}`)
      .addField("New roles", `${newMember.roles.array()}`)
      .setTimestamp();

      let nmodchannel =  client.channels.find('name', 'log')
      nmodchannel.send(nroleembed);

  };

})
client.login(process.env.BOT_TOKEN);
