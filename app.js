var Omni = require("omni");
var Players = require("./collections/Players.js");
var Games = require("./collections/Games.js");

var games = new Games();
games.add({
	pot: 0
});

Omni.listen(3000, {
	players: new Players(),
	games: games
}, {});
