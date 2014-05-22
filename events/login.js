var Omni = require("omni");
var Player = require("../models/Player.js");

module.exports = {
    run: function (connection, collections, data) {
        if (connection.player) {
            return {error: "Already logged in."};
        }

        if (!data.name) {
            return {error: "Incorrect params."};
        }

        if (data.name.length > 12) {
            return {error: "Name too long, please use an abbreviation less than 12 characters."};
        }

        var player = Omni.collections.players.findWhere({name: data.name});
        if (player) {
          return {error: "That username is in use"};
        }
        var player = new Player({name: data.name});
        Omni.collections.players.add(player);
        connection.player = player;
        return {id: player.oid};
    }
};
