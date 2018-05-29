const commando = require('discord.js-commando');

module.exports = class AnimeListCommand extends commando.Command {
	constructor(client){
		super(client,{
			name: 'anirec',
			group: 'anime',
			memberName: 'anirec',
			description: 'a link to myanimelist',
		});
	}
	
	async run(message, {inp}){
		message.reply("This is my anime list, take a look at it https://myanimelist.net/animelist/XtratoS");
	}
}

