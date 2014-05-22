var Omni = require("omni");
var Player = require("../models/Player.js");

module.exports = {
    run: function (connection, collections, data) {
        if (!connection.player) {
          return {error: "Not logged in."};
        }

        connection.player.set("isPlaying", false);
        return {success: "not playing"};
    }
};
