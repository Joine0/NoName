const Discord = require("discord.js");
const prefix = '*'
const client = new Discord.Client({ fetchAllMembers: true });
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
	client.user.setGame(`NoName Team | *help`,"http://twitch.tv/WeDontHaveChannel")
    client.user.setStatus("dnd")
});
client.on('guildMemberAdd', member => {
	
	var role = member.guild.roles.find('name', 'Not Activated');
	
	member.addRole(role)
});
client.on('message', message => {
	if(message.content.startsWith(prefix + 'فعلني')) {
    if (message.member.roles.find("name", "Activated")) return message.reply(":x: **لقد تم تفعيلك مسبقاً**").then(m => m.delete(5000));
	if(!message.author.id) return;
	
	message.delete();
	
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت التفعيل", 'https://d.top4top.net/p_814mr0es1.png')
	.setDescription('يجب عليك الضغط على الأيموجي ليتم تفعيلك')
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('✅')
	
	let filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
	
	let collector = msg.createReactionCollector(filter, { time: 12000 });
collector.on('collect', r => {
	message.member.addRole(message.guild.roles.find("name", "Activated"));
	message.member.removeRole(message.guild.roles.find("name", "Not Activated"));
	embed.setDescription(`<@${message.author.id}> **لقد تم تفعيلك | الرجاء قراءة القوانين وشكراً**`);
	msg.edit(embed).then(msg.delete(5000));
	console.log(`[Activator] Successfully activated [${message.author.id}]`)
	collector.stop();
		})
return;
collector.on('end', end => {
	embed.setDescription(`<@${message.author.id}> **لم تقم بتفعيل نفسك بالوقت المناسب**`)
	msg.edit(embed).then(msg.delete(5000));
	console.log(`[Activator] Unsuccessfully activated [${message.author.id}] | Reason: Timedout`)
		})
	})
	}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.addField("*فعلني","**لتفعيل نفسك**")
	.setFooter("بوت التفعيل", 'https://d.top4top.net/p_814mr0es1.png')
	.setDescription(`Programmed by: \`NoName Team\`
	
	\`TestaLagusa⁶⁹♆#2010\``)
	message.channel.sendEmbed(embed).then(m => m.delete(10000));
}
});
client.login("process.env.BOT_TOKEN");
//??????
