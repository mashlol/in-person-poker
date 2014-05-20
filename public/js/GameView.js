(function() {
  var GameView = function($el, game) {
    this.$el = $el;
    this.game = game;
    this.playerViews = [];

    Omni.collections.players.each(function() {

    });
  };

  GameView.prototype.render = function() {

  };


  window.GameView = GameView;
})();
