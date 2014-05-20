var Omni = require("omni");

module.exports = Omni.Model.extend({
	defaults: {
		pot: 0
	},
	readPermission: function() {
		return true;
	},
	writePermission: function() {
		return true;
	}
});