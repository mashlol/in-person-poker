var Omni = require("omni");

module.exports = {
    run: function (connection, collections) {
        if (connection.player) {
            Omni.collections.games.first()._nextActivePlayer();
        }
    }
};