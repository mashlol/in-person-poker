var Omni = require("omni");

module.exports = Omni.Model.extend({
	defaults: {
		pot: 100,
    active: false,
    activePlayerIndex: -2,
	},
  initialize: function() {
    this.on("change:active", this._handleStartGame.bind(this));
  },
  _handleStartGame: function() {
    this.set("pot", 0);
    this.set("activePlayerIndex", -1);
    this._nextActivePlayer();
  },
	readPermission: function(connection, property) {
		return true;
	},
	writePermission: function() {
		return true;
	},
  _updateActive: function() {
    var players = Omni.collections.players;
    if (players.where({isPlaying: true}).length < 2) {
      players.each(function(player) {
        player.set("isPlaying", true);
      });
      this.set("active", false);
    }
  },
  _nextActivePlayer: function() {
    this.set("activePlayerIndex", (this.get("activePlayerIndex") + 1) % Omni.collections.players.length);
    while (!Omni.collections.players.at(this.get("activePlayerIndex")).get("isPlaying")){
      this.set("activePlayerIndex", (this.get("activePlayerIndex") + 1) % Omni.collections.players.length);
    }
    for (var x = 0; x < Omni.collections.players.length; x++) {
      if (x == this.get("activePlayerIndex")) {
        Omni.collections.players.at(x).set("isActive", true);
      } else {
        Omni.collections.players.at(x).set("isActive", false);
      }
    }
  }
});
