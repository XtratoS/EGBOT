const commando = require('discord.js-commando');

class LogOutCommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'logout',
			group: 'control',
			memberName: 'logout',
			description: 'Logs the bot out'
		});
	}
	
	async run(message, args){
		bot.logout('NDQ2NTA0NTc5NDA0NzkxODA5.Dd6Inw.dgnVXA4Fo3Dc-eAyW654Q2v8BqI');
	}
}

module.exports = LogOutCommand;