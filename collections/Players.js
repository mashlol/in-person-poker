var Omni = require("omni");
var Player = require("../models/Player.js");

module.exports = Omni.Collection.extend({
	model: Player,
	createPermission: function() {
		return true;
	},
	destroyPermission: function() {
		return true;
	}
});