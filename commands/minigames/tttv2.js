const games = require("./tttData.json")

const alreadyOccupied = "field position already occupied!";
const wrongReact = "please use one of the reactions that exists already";
const gIP = "there's a game running already, please let it end first";
const botE = "Can't play against a bot user, please mention a human player"
var field = [];

function playTurn(message, player, symbol, position){
	switch (position){
		case"↖":	if(field[1]==defaultF){message.channel.send(alreadyOccupied)} else place(1, symbol);
			break;
		case"⬆":	if(field[2]==defaultF){message.channel.send(alreadyOccupied)} else place(2, symbol);
			break;
		case"↗":	if(field[3]==defaultF){message.channel.send(alreadyOccupied)} else place(3, symbol);
			break;
		case"⬅":	if(field[4]==defaultF){message.channel.send(alreadyOccupied)} else place(4, symbol);
			break;
		case"⏺":	if(field[5]==defaultF){message.channel.send(alreadyOccupied)} else place(5, symbol);
			break;
		case"➡":	if(field[6]==defaultF){message.channel.send(alreadyOccupied)} else place(6, symbol);
			break;
		case"↙":	if(field[7]==defaultF){message.channel.send(alreadyOccupied)} else place(7, symbol);
			break;
		case"⬇":	if(field[8]==defaultF){message.channel.send(alreadyOccupied)} else place(8, symbol);
			break;
		case"↘":	if(field[9]==defaultF){message.channel.send(alreadyOccupied)} else place(9, symbol);
			break;
		default:
			message.channel.send(wrongReact);
			break;
	};
}

function place(position, symbol){
	field[position] = symbol;
}

function createGame(guildID, player1, player2){
	if(games[guildID])
		message.channel.send(gIP);
	else if(player2.bot)
		message.channel.send(NB);
	else
		playGame(player1, player2);
}

function playGame(player1, player2){
	while(1);
}