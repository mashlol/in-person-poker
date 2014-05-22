var Omni = require("omni");

module.exports = Omni.Model.extend({
	defaults: {
		pot: 0,
    active: false,
	},
	readPermission: function(connection, property) {
		return true;
	},
	writePermission: function() {
		return true;
	}
});
