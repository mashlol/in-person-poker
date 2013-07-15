(function() {
    var window = this;

    var Game = function() {
        if ($(".players > .row").length < 2) throw "You need at least 2 players to play!";

        $(".players > .row").each(function() {
            var playerChips = $(this).find(".player-chips").val();
            var playerName = $(this).find(".player-name").val();

            if (!playerName) throw "A player is missing a name.";
            if (!playerChips || playerChips <= 0) throw playerName + " has an invalid chip amount to play.";
        });

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
        this.currentPlayer = 0;
        $(".game .turn-indicator").html(this.players[this.currentPlayer].name + "s turn!");

        for (var x in this.players) {
            var player = this.players[x];

            var newRow = $("<div>").addClass("player-row-container").attr("data-player-id", x).html($("#template-player-game-row").html());
            newRow.find(".game-player-name").html(player.name);
            newRow.find(".game-player-chips").html(player.balance);
            $(".game-players").append(newRow);
        }
    };

    Game.prototype.nextPlayer = function() {
        this.currentPlayer++;
        this.currentPlayer %= this.players.length;
        $(".game .turn-indicator").html(this.players[this.currentPlayer].name + "s turn!");
    };

    Game.prototype.takeAction = function(action, args) {
        var actions = {
            checkCall: function(player, game, args) {
                console.log(player.name + " checked or called");
            },
            betRaise: function(player, game, args) {
                player.balance -= 2;
                game.updateView();
            }
        }

        actions[action](this.players[this.currentPlayer], this);
        this.nextPlayer();
    };

    Game.prototype.updateView = function() {
        var _this = this;
        $(".game .game-players .player-row-container").each(function(index) {
            $(this).find(".game-player-name").html(_this.players[index].name);
            $(this).find(".game-player-chips").html(_this.players[index].balance);
        });
    };

    window.Game = Game;
})();