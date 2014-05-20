(function() {
  var GameView = function($el, game) {
    this.$el = $el;
    this.game = game;
    this.playerViews = [];
    this.activePlayerIndex = null;

    var _this = this;
    Omni.collections.players.each(function(player) {
      if (!this.activePlayerIndex) _this.setActivePlayer(player);
      _this.playerViews.push(new PlayerView(player));
    });

    Omni.collections.players.on("add", function(player) {
      if (!this.activePlayerIndex) _this.setActivePlayer(player);
      _this.playerViews.push(new PlayerView(player));
    });

    if (Omni.collections.players.length > 0 && !this.activePlayerIndex) {
      _this.setActivePlayer(Omni.collections.players.at(0));
    }

    this.render();
    this.game.on("change", this.render.bind(this));

    this.$el.find(".check-bet").on("click", this.onCheckOrBet.bind(this));
  };

  GameView.prototype.setActivePlayer = function(index) {
    if (index.get) {
      // It's a player object
      this.activePlayerIndex = index.get("id");
    } else {
      // It's a number
      this.activePlayerIndex = index;
    }

    Omni.collections.players.each(function(player) {
      player.set("isActive", false);
    });

    // this.getActivePlayer().set("isActive", true);
  };

  GameView.prototype.getActivePlayer = function() {
    if (this.activePlayerIndex != undefined) {
      return Omni.collections.players.findWhere({id: this.activePlayerIndex});
    }
    return false;
  };

  GameView.prototype.onCheckOrBet = function() {

  };

  GameView.prototype.render = function() {
    this.$el.find(".pot").html(this.game.get("pot"));
  };


  window.GameView = GameView;
})();
