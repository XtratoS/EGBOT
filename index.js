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
	
	if(input.includes("activate")){
		if(!message.member.roles.has(config.memberroleid)){
			message.member.addRole(config.memberroleid).catch(console.error);
			bot.channels.get(config.welcomechannelid).send("Please welcome our newest member"+ message.author +" أهلا بيك يحبب");
		}
	}
	else if(input.includes("tts"))
	{
		message.channel.send(":apple:***SONDAGE :apple:\n + choix1 +  ou + + choix2 + ")
            .then(function (message) {
				message.react("↖");
				message.react("⬆");
				message.react("↗");
				message.react("⬅");
				
				message.react("↖");
				
				message.react("➡");
				message.react("↙");
				message.react("⬇");
				message.react("↘");
				
				//message.pin()
				//message.delete()
            }).catch(function() {
				message.reply("error, meh");
             });
	}
	else if(input.includes("scarlett"))
		message.channel.send("Scarlett Johansson is Love <3");
	else if(input.includes("rocket league"))
		message.channel.send("I want to play rocket league right now, it's the best game ever created", {tts: true});
	else if(input.includes("pubg"))
		message.channel.send("Le3ba 5ara");
	else if(input.includes(" هه") || input.includes("هخه") || input.includes("هخي"))
		message.reply("نايص تفتيس يريء");
	else if(input.includes("ؤق"))
		message.reply("ؤق ناو تمم");
});