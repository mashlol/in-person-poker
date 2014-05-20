// (function() {
//     var window = this;

//     var Player = function(name, balance) {
//         this.balance = balance;
//         this.name = name;
//         this.isDealing = false;

//         this.listeners = [];
//     };

//     Player.prototype.setIsDealing = function(isDealing) {
//         this.isDealing = isDealing;
//         this._trigger("change");
//     };

//     Player.prototype.on = function(event, callback) {
//       this.listeners[event] = this.listeners[event] || [];
//       this.listeners[event].push(callback);
//     };

//     Player.prototype._trigger = function(event, args) {
//       if (!this.listeners[event]) return;

//       for (var x in this.listeners[event]) {
//         this.listeners[event][x](this, args);
//       }
//     };

//     window.Player = Player;
// })();
