const commando = require('discord.js-commando');

module.exports = class DiceRollCommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'roll',
			group: 'random',
			memberName: 'roll',
			description: 'Rolls a die, default upper limits is six and default number of rolls is 1, to use different values use roll [upper limit] [number of rolls]',
			args: [
				{
					key: 'uplim',
					prompt: '',
					type: 'integer',
					default: 6
				},
				{
					key: 'occurences',
					prompt: '',
					type: 'integer',
					default: 1
				}
			]
		});
	}
	
	async run(message, {uplim, occurences}){
		for(var i=0; i<occurences; i++)
		{
			var roll = Math.floor(Math.random() * uplim) + 1;
			message.reply("has rolled " + roll + " out of " + uplim);
		}
	}
}