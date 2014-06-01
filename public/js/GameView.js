(function() {
  var GameView = function($el, game) {
    this.$el = $el;
    this.game = game;
    this.playerViews = [];
    this.activePlayerIndex = null;
    this.fakePlayerView = null;

    var _this = this;
    Omni.collections.players.each(function(player) {
      _this.addPlayer(player);
    });

    if (!this.game.get("active")) {
      this.fakePlayerView = new PlayerView(null); // new player prior to login
    }

    Omni.collections.players.on("add", function(player) {
      _this.addPlayer(player);
    });

    Omni.collections.players.on("remove", function(player) {
      _this.removePlayer(player);
    });

    this.$el.find("#stop-playing").hide();

    this.game.on("change", this.render.bind(this));
    this.game.on("change:active", this.preventNewPlayers.bind(this));

    this.$el.find(".call-check").on("click", this.onCallCheck.bind(this));
    this.$el.find(".fold").on("click", this.onFold.bind(this));
    this.$el.find(".bet-raise").on("click", this.onBetRaise.bind(this));
    this.$el.find(".start-game").on("click", this.startGame.bind(this));
    this.$el.find("#stop-playing").on("click", this.stopPlaying.bind(this));

    this.render();
  };

  GameView.prototype.getActivePlayer = function() {
    if (this.activePlayerIndex != undefined) {
      return Omni.collections.players.findWhere({id: this.activePlayerIndex});
    }
    return false;
  };

  GameView.prototype.addPlayer = function(player) {
    var _this = this;
    _this.playerViews.push(new PlayerView(player));
    // We need to render when isPlaying changes so we
    // can update the sitting/standing button
    player.on("change:isPlaying", function(player) {
      _this.render();
    });
  }

  GameView.prototype.removePlayer = function(player) {
    for (var x in this.playerViews) {
      var playerView = this.playerViews[x];
      if (playerView.player.get("name") == player.get("name")) {
        playerView.cleanup();
        this.playerViews.splice(x, 1);
        return;
      }
    }
  }

  GameView.prototype.stopPlaying = function() {
    Omni.trigger("stopPlaying");
    this.$el.find("#stop-playing").hide();
  };

  GameView.prototype.startGame = function() {
    if (Omni.collections.players.length >= 2) {
      this.game.set("active", true);
    } else {
      alert("You need at least two players!");
    }
  };

  GameView.prototype.preventNewPlayers = function(game) {
    if (game.get("active") && this.fakePlayerView) {
      this.fakePlayerView.cleanup();
      this.fakePlayerView = null;
    }
  }

  GameView.prototype.onCallCheck = function() {
    Omni.trigger("callCheck");
  };

  GameView.prototype.onBetRaise = function() {
    Omni.trigger("betRaise");
  };

  GameView.prototype.onFold = function() {
    Omni.trigger("fold");
  };

  GameView.prototype.render = function() {
    this.$el.find(".pot").html(this.game.get("pot"));

    if (this.game.get("active")) {
      this.$el.find(".start-game").hide();
    } else {
      this.$el.find(".start-game").show();
    }

    if (window.player && this.game.get("active") && window.player.get("isPlaying")) {
      this.$el.find("#stop-playing").show();
    } else {
      this.$el.find("#stop-playing").hide();
    }
  };


  window.GameView = GameView;
})();
