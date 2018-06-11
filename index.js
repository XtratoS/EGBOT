const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const cstrep = require("./customreplies.json");
const config = require("./config.json");
const bot = new CommandoClient({
	commandPrefix: config.prefix,
    unknownCommandResponse: false,
    owner: config.ownerId});
var shatayem = ['تعالى مصمص', 'منيوك', 'معيرص', 'يابن المارة الوسخة', 'يلعن ميتين أهلك', 'yel3n maytein ahlak', 'yabn el wes5a', ' ya 3ars', 'ya 5awal', 'ya metnak', 'kosomk', 'kosomein omak', 'sharmoot', 'tezak 2ar3a', 'tezak 7amra', 'fuck you', 'suck my dick', 'madafaka', 'Biitch', 'تعمنيقق', 'كسمك', 'خول'];
bot.registry
	.registerDefaults()
	.registerGroups([
        ['random', 'Random'],
		['control', 'Control'],
		['timer', 'Timer'],
		['anime', 'Anime'],
		['message', 'Message'],
		['minigames','MiniGames']
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
	
	else if(input.includes("abc")){
		console.log(data[message.guild.id])
		message.author.send('Reply with r, p or s.')
		.then(() => {
			message.channel.awaitMessages(response => response.content === 'p', {
				max: 1,
				time: 10000,
				errors: ['time'],
			})
			.then((collected) => {
				message.author.send(`The collected message was: ${collected.first().content}`);
			})
			.catch(() => {
				message.author.send('There was no collected message that passed the filter within the time limit!');
			});
		});
	}
	
	else if(input.includes("activate")){
		if(!message.member.roles.has(config.memberroleid)){
			message.member.addRole(config.memberroleid).catch(console.error);
			bot.channels.get(config.welcomechannelid).send("Please welcome our newest member"+ message.author +" أهلا بيك يحبب");
		}
	}
	else if(input.includes("scarlett"))
		message.channel.send("Scarlett Johansson is Love <3");
	else if(input.includes("rocket league"))
		message.channel.send("I want to play rocket league right now, it's the best game ever created");
	else if(input.includes("pubg"))
		message.channel.send("le3ba 5ara");
});