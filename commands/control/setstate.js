const commando = require('discord.js-commando');

module.exports = class ChangeStatusCommand extends commando.Command {
	
	constructor(client){
		super(client,{
			name: 'setstate',
			group: 'control',
			memberName: 'setstate',
			description: 'Changes the status of the bot',
			args: 
			[
			{
				key: 'status',
				prompt: 'Please enter the status that you would like to set the bot to',
				type: 'string',
				default: 'WIP'
			}
			]
		})
	}
	
	async run(message, args){
		client.user.setActivity(status);
	}
	
}