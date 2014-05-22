var Omni = require("omni");
var Players = require("./collections/Players.js");
var Games = require("./collections/Games.js");
var loginEvent = require("./events/login.js");
var stopPlaying = require("./events/stopPlaying.js");

var games = new Games();
games.add({
	pot: 0
});

Omni.listen(3000, {
	players: new Players(),
	games: games
}, {
  login: loginEvent,
  stopPlaying: stopPlaying
});
