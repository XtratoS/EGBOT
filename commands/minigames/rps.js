const discord = require('discord.js');
const commando = require('discord.js-commando');

module.exports = class rockPaperScissors extends commando.Command {
	constructor(client){
		super(client,{
			name: 'rps',
			group: 'minigames',
			memberName: 'rps',
			description: 'Rock, Paper, Scissors minigame.',
			args: [
			{
				key: 'against',
				prompt: 'Please mention the user you want to play against right after typing the command - separating the command and the mention with a space of course.',
				type: 'string'
			}
			]
		});
	}
	
	async run(message, {against}){
		
		/*
		let chx = "Please pick up Rock, Paper or Scissors by choosing a reaction on this message";
		message.author.send(chx).then( mp1 => msg = mp1 ).catch(function(){message.author.send("Failure, Damn")});
		message.channnel.send( mp1.content );
		*/
		const chx = await message.author.send("Please pick up Rock, Paper or Scissors by replying to this message with lowercase r, p or s");
		if(chx=="p")
			message.author.send("Ok")
		/*const collector = new discord.MessageCollector(user_dm_channel, m => m.author.id === message.author.id, { time: 10000 });
		console.log(collector);
        collector.on('collect', message => {
			if(message.content == "p")
				message.reply("Ok");
		})*/
	}
}