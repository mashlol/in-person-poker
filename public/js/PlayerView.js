(function() {
  var PlayerView = function(player) {
    this.player = player;
    this.$el = $($("#template-player").html());

    $(".players").append(this.$el);
    this.setup();
  };

  PlayerView.prototype.setup = function() {
    if (this.player) {
      this.player.on("change", this.render.bind(this));
    }
    this.render();
  };

  PlayerView.prototype.login = function(event) {
    // Enter
    if (event.keyCode == 13) {
      Omni.trigger("login", {name: $(event.target).val()}, this.loginHandler.bind(this));
    }
  };

  PlayerView.prototype.loginHandler = function(data) {
    if (data.error) {
      alert(data.error);
      this.$el.find("input").val('');
    } else {
      window.player = Omni.collections.players._findByOID(data.id);
      this.cleanup();
    }
  };

  PlayerView.prototype.cleanup = function() {
    this.$el.remove();
  };

  PlayerView.prototype.render = function() {
    if (!this.player) {
      var $input = $("<input>");
      $input.attr("type", "text");
      $input.on("keyup", this.login.bind(this));
      this.$el.find(".player-name").html("").append($input);
      this.$el.find(".player-balance").html("0");
      this.$el.find(".player-balance").html("0");
      return;
    }
    if (this.player.get("isPlaying")) {
      this.$el.removeClass("not-playing");
    } else {
      this.$el.addClass("not-playing");
    }
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
