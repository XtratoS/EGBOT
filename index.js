const commando = require('discord.js-commando');
const cstrep = require("./customreplies.json");
const config = require("./config.json");
const bot = new commando.Client({unknownCommandResponse: false});
var shatayem = ['تعالى مصمص', 'منيوك', 'معيرص', 'يابن المارة الوسخة', 'يلعن ميتين أهلك', 'yel3n maytein ahlak', 'yabn el wes5a', ' ya 3ars', 'ya 5awal', 'ya metnak', 'kosomk', 'kosomein omak', 'sharmoot', 'tezak 2ar3a', 'tezak 7amra', 'fuck you', 'suck my dick', 'madafaka', 'Biitch', 'تعمنيقق', 'كسمك', 'خول'];
bot.registry
	.registerDefaults()
	.registerGroups([
        ['random', 'Random'],
		['control', 'Control'],
		['timer', 'Timer'],
		['anime', 'Anime'],
		['message', 'Message']
    ]);
	
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
console.log('Logged in!');
bot.user.setActivity(config.activity);
});
bot.login(config.btoken);

bot.on('guildMemberAdd', member => {
    member.guild.channels.get(config.entrancechannelid).send("Welcome to our server, please use the command !activate to be able to join our text and voice channels"); 
});

bot.on('message', (message) => {
	if(message.author.bot) return;
	var input = message.content.toLowerCase();
	
	if(cstrep[input]) {
		message.channel.send(cstrep[input]);
	}
	
	
	if(input == "PM ALL" && message.member.roles.has(config.adminroleid) ){
		roleID = config.memberroleid;
		membersWithRole = message.guild.roles.get(roleID).members.forEach(function(guildMember, guildMemberId) {
			console.log(guildMemberId);
			bot.fetchUser(guildMemberId)
			.then(user => {
				user.send('test');
				message.author.send("Success!, " + user.username + " Done");
			}, rejection => {
				message.author.send("Failed");
			});
		})
	}
	
	if(input.toLowerCase().includes("activate")){
		if(!message.member.roles.has(config.memberroleid)){
			message.member.addRole(config.memberroleid).catch(console.error);
			bot.channels.get(config.welcomechannelid).send("Please welcome our newest member"+ message.author +" أهلا بيك يحبب");
		}
	}
	else if(input.toLowerCase().includes("scarlett"))
		message.channel.send("Scarlett Johansson is Love <3");
	else if(input.includes("rocket league"))
		message.channel.send("I want to play rocket league right now", {tts: true});
	else if(input.toLowerCase().includes("rocket league"))
		message.channel.send("Best Game Ever");
	else if(input.toLowerCase().includes("pubg"))
		message.channel.send("Le3ba 5ara");
	else if(input.toLowerCase().includes("هه") || input.toLowerCase().includes("هخه") || input.toLowerCase().includes("هخي"))
		message.reply("نايص تفتيس يريء");
	else if(input.includes("ؤق"))
		message.reply("ؤق ناو تمم");
});