const commando = require('discord.js-commando');

var start;
var end;

module.exports = class StopWatchCommand extends commando.Command {
	constructor(client){
		super(client,{
			name: 'stp',
			group: 'timer',
			memberName: 'stp',
			description: 'Stopwatch',
			args: [
			{
				key: 'inp',
				prompt: '',
				type: 'string'
			}
			]
		});
	}
	
	async run(message, {inp}){
		if(inp == "s"){
			start = Date.now();
			message.reply("Stopwatch have started")
		}
		else if(inp == "e"){
			end = Date.now();
			var elapsed = (end - start) / 1000;
			var mins=0;
			var hrs=0;
			for(var trash = 0; elapsed >= 60; elapsed -= 60){
				mins+=1;
			}
			for(var trash = 0; mins >= 60; mins -= 60){
				hrs+=1;
			}
			message.reply("It took you " + hrs + ":" + mins +":" + elapsed);
		}
	}
}