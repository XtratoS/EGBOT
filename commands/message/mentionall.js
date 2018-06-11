const commando = require('discord.js-commando');
const config = require("../../config.json");

module.exports = class PMAllMembersCommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'mentionall',
			group: 'message',
			memberName: 'mentionall',
			description: 'mentions all members',
		});
	}
	
	hasPermission(msg){
		var admin = config.adminroleid;
		if(msg.member.roles.has(admin))
			return true;
			return false;
	}
	
	run(message){
		var people = "Hey, ";
		message.author.send("started collecting users data to mention them");
		var roleID = config.memberroleid;
		var membersWithRole = message.guild.roles.get(roleID).members.forEach((guildMember, guildMemberId) => {
			console.log(guildMemberId);
			this.client.fetchUser(guildMemberId)
			.then(user => {
				people = people.concat("<@"+user.id+"> ");
				if(people.length<2000 && people.length>500)
					message.channel.send(people);
			}, rejection => {
				message.author.send("failed to send to " + user.username);
			})
		})
		
	}
}


