var Omni = require("omni");

module.exports = Omni.Model.extend({
	defaults: {
		name: "Player",
		balance: 100,
		isDealer: false,
		isActive: false,
	    isFolded: false,
	    isPlaying: true,
	},
	readPermission: function() {
		return true;
	},
	writePermission: function() {
		return true;
	}
});
