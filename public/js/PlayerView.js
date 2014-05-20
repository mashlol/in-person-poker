(function() {
  var PlayerView = function(player) {
    this.player = player;

    $(".game-players").append($el);

    this.render();
    this.player.on("change", this.render.bind(this));
  };

  PlayerView.prototype.render = function() {
    this.$el.find(".game-player-name").html(this.player.name);
    this.$el.find(".game-player-chips").html(this.player.balance);
    if (this.player.isDealing) {
      this.$el.find(".game-player.status").html("Dealer");
    } else {
      this.$el.find(".game-player.status").html("");
    }
  };

  window.PlayerView = PlayerView;
})();
