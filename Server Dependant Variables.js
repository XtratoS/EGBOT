let someVarArray = {};
someVarArray{guild.id} = someVar;
-------------
let guilds = new Map();
guilds.set('Guild name or ID', {guild object});
// Assuming there are guilds in that map now
let currentGuild = guilds.get('Guild name or ID');
console.log(currentGuild.channels);