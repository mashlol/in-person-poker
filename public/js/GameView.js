(function() {
  var GameView = function($el, game) {
    this.$el = $el;
    this.game = game;
    this.playerViews = [];
    this.activePlayerIndex = null;
    this.fakePlayerView = null;

    var _this = this;
    Omni.collections.players.each(function(player) {
      _this.playerViews.push(new PlayerView(player));
    });

    if (!this.game.get("active")) {
      this.fakePlayerView = new PlayerView(null); // new player prior to login
    }

    Omni.collections.players.on("add", function(player) {
      _this.playerViews.push(new PlayerView(player));
    });

    this.$el.find("#stop-playing").hide();

    this.render();

    this.game.on("change", this.render.bind(this));
    this.game.on("change:active", this.preventNewPlayers.bind(this));

    this.$el.find(".check-bet").on("click", this.onCheckOrBet.bind(this));
    this.$el.find(".start-game").on("click", this.startGame.bind(this));
    this.$el.find("#stop-playing").on("click", this.stopPlaying.bind(this));
  };

  GameView.prototype.getActivePlayer = function() {
    if (this.activePlayerIndex != undefined) {
      return Omni.collections.players.findWhere({id: this.activePlayerIndex});
    }
    return false;
  };

  GameView.prototype.stopPlaying = function() {
    Omni.trigger("stopPlaying");
    this.$el.find("#stop-playing").hide();
  };

  GameView.prototype.startGame = function() {
    this.game.set("active", true);
  };

  GameView.prototype.preventNewPlayers = function(game) {
    if (game.get("active")) {
      this.fakePlayerView.cleanup();
      this.fakePlayerView = null;
    } else if (!this.fakePlayerView) {
      this.fakePlayerView = new PlayerView(null); // new player prior to login
    }
  }

  GameView.prototype.onCheckOrBet = function() {

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
    } else if (window.player && this.get.get("active")){
      this.$el.find("#stop-playing").hide();
    }
  };


  window.GameView = GameView;
})();
