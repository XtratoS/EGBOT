const commando = require('discord.js-commando');
const config = require("../../config.json");

module.exports = class PMAllMembersCommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'pmall',
			group: 'message',
			memberName: 'pmall',
			description: 'sends a private message to all members',
			args:[{
				key: 'unipm',
				prompt: 'please enter the message that you would like to send',
				type:'string'
			}]
		});
	}
	
	hasPermission(msg){
		var admin = config.adminroleid;
		if(msg.member.roles.has(admin))
			return true;
			return false;
	}
	
	async run(message, {unipm}){
		message.author.send("started sending "+ unipm + " to all users");
		var roleID = config.memberroleid;
		var membersWithRole = message.guild.roles.get(roleID).members.forEach((guildMember, guildMemberId) => {
			console.log(guildMemberId);
			this.client.fetchUser(guildMemberId)
			.then(user => {
				user.send(unipm);
				message.author.send("message sent to, " + user.username);
			}, rejection => {
				message.author.send("failed to send to " + user.username);
			});
		})
	}
}