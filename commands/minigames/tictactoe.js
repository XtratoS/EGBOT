const commando = require('discord.js-commando');
const d = require('../../index.js');
module.exports = class TicTacToe extends commando.Command {
	constructor(client){
		super(client,{
			name: 'tictactoe',
			aliases: ['ttt'],
			group: 'minigames',
			memberName: 'tictactoe',
			description: 'starts a tictactoe game',
			guildOnly: true,
			args: [
			{
				key: 'player2',
				prompt: '',
				type: 'string'
			}
			]
		});
	}
	
	async run(message, {player2}){
		if(field != null)
		if(player2.bot)
		{
			message.reply("You can't challenge a bot to TicTacToe");
			return;
		}
		const player1 = message.author;
		var turn = player1;
		var wrongreact;
		var field = ":white_large_square: | :white_large_square: | :white_large_square:\n —————— \n:white_large_square: | :white_large_square: | :white_large_square:\n —————— \n:white_large_square: | :white_large_square: | :white_large_square:\n —————— \n";
		message.channel.send(field)
            .then(async function (message) {
				await message.react("↖")
				await message.react("⬆")
				await message.react("↗")
				await message.react("⬅")
				
				await message.react("⏺")
				
				await message.react("➡")
				await message.react("↙")
				await message.react("⬇")
				await message.react("↘")
            }).catch(function() {
				message.reply("error, meh");
             });
		//await new Promise(resolve => setTimeout(resolve, 1));
		this.client.on('messageReactionAdd', (reaction, user) => {
			if(user.bot)
				return;
			reaction.users.forEach((user) => {if(user.id==turn.id){
				switch(reaction.emoji.name){
					case"↖":
						reaction.remove(user)
						break;
					case"⬆":
						reaction.remove(user)
						break;
					case"↗":
						reaction.remove(user)
						break;
					case"⬅":
						reaction.remove(user)
						break;
					case"⏺":
						reaction.remove(user)
						break;
					case"➡":
						reaction.remove(user)
						break;
					case"↙":
						reaction.remove(user)
						break;
					case"⬇":
						reaction.remove(user)
						break;
					case"↘":
						reaction.remove(user)
						break;
					default:
						reaction.remove(user)
						if(wrongreact == null)
							wrongreact = message.channel.send("please use one of the reactions that exists already")
						break;
				};
			}
			});
		});
	}
}