(function() {
    var window = this;

    var Player = function(name, balance) {
        this.balance = balance;
        this.name = name;
    }

    window.Player = Player;
})();