var Omni = require("omni");
var Players = require("./collections/Players.js");
var Games = require("./collections/Games.js");
var loginEvent = require("./events/login.js");
var stopPlaying = require("./events/stopPlaying.js");
var disconnect = require("./events/disconnect.js");

var games = new Games();
games.add({
	pot: 0
});

var players = new Players();

Omni.listen(3000, {
	players: players,
	games: games
}, {
  login: loginEvent,
  stopPlaying: stopPlaying,
  disconnect: disconnect
});

players.on("add", function(player) {
	player.on("change:isPlaying", function(player) {
		if (players.where({isPlaying: true}).length < 2) {
			players.each(function(player) {
				player.set("isPlaying", true);
			});
			games.at(0).set("active", false);
		}
	});
});