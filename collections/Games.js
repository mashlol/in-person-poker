var Omni = require("omni");
var Game = require("../models/Game.js");

module.exports = Omni.Collection.extend({
    model: Game,
    createPermission: function() {
        return true;
    },
    destroyPermission: function() {
        return true;
    }
});