var Omni = require("omni");
var Players = require("./collections/Players.js");
var Games = require("./collections/Games.js");
var loginEvent = require("./events/login.js");
var stopPlaying = require("./events/stopPlaying.js");
var disconnect = require("./events/disconnect.js");
var callCheckEvent = require("./events/callCheck.js");
var foldEvent = require("./events/fold.js");
var betRaiseEvent = require("./events/betRaise.js");

var games = new Games();
games.add({});

var players = new Players();

Omni.listen(3000, {
	players: players,
	games: games
}, {
  login: loginEvent,
  stopPlaying: stopPlaying,
  disconnect: disconnect,
  betRaise: betRaiseEvent,
  callCheck: callCheckEvent,
  fold: foldEvent
});

players.on("add", function(player) {
	player.on("change:isPlaying", function(player) {
		games.at(0)._updateActive();
	});
});

players.on("add", function(player) {
	player.on("change:isPlaying", function(player) {
		games.at(0)._updateActive();
	});
});
