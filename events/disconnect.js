var Omni = require("omni");

module.exports = {
    run: function (connection, collections) {
        if (connection.player) {
            Omni.collections.players.remove(connection.player);

          // Stop game if < 2 people left
          Omni.collections.games.at(0)._updateActive();
        }
    }
};
