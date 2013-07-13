(function() {
    var window = this;

    var Game = function() {
        if ($(".players > .row").length < 2) {
            throw "You need at least 2 players to play!";
        }

        var canStart = true;
        $(".players > .row").each(function() {
            var playerChips = $(this).find(".player-chips").val();
            var playerName = $(this).find(".player-name").val();

            if (!playerName) {
                canStart = false;
                throw "A player is missing a name.";
            }

            if (!playerChips || playerChips <= 0) {
                canStart = false;
                throw playerName + " has an invalid chip amount to play.";
            }
        });

        if (!canStart) return;


        // Game can start, set up game
        this.players = [];
        var _this = this;
        $(".players > .row").each(function() {
            _this.players.push(new Player($(this).find(".player-name").val(), $(this).find(".player-chips").val()));
        });

        $(".pre-game").hide();
        $(".game").show();
    };

    Game.prototype.start = function() {
        $(".game").html(this.players[0].name + "s turn.");
    };

    Game.prototype.beginRound = function() {
    };

    window.Game = Game;
})();