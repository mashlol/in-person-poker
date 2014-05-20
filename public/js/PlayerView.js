(function() {
  var PlayerView = function(player) {
    this.player = player;
    this.$el = $($("#template-player").html());

    $(".players").append(this.$el);
    this.render();
    this.player.on("change", this.render.bind(this));
  };

  PlayerView.prototype.render = function() {
    this.$el.find(".player-name").html(this.player.get("name"));
    this.$el.find(".player-balance").html(this.player.get("balance"));
    if (this.player.get("isDealer")) {
      this.$el.addClass("dealer");
    } else {
      this.$el.removeClass("dealer");
    }

    if (this.player.get("isActive")) {
      this.$el.addClass("active");
    } else {
      this.$el.removeClass("active");
    }
  };

  window.PlayerView = PlayerView;
})();
