var Omni = require("omni");

module.exports = Omni.Model.extend({
	defaults: {
		name: "Player",
		balance: 100,
		isDealing: false,
		isTurn: false
	},
	readPermission: function() {
		return true;
	},
	writePermission: function() {
		return true;
	}
});