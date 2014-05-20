// (function() {
//     var window = this;

//     var Game = function() {
//         this.pot = 0;
//         this.players = [];
//         this.currentPlayer = null;
//         this.dealer = -1;


//         if ($(".players > .row").length < 2) throw "You need at least 2 players to play!";

//         $(".players > .row").each(function() {
//             var playerChips = $(this).find(".player-chips").val();
//             var playerName = $(this).find(".player-name").val();

//             if (!playerName) throw "A player is missing a name.";
//             if (!playerChips || playerChips <= 0) throw playerName + " has an invalid chip amount to play.";
//         });

//         // Instantiate new players and set up a starting player and dealer
//         var game = this;
//         $(".pre-game .players .row").each(function() {
//           game.addPlayer(new Player(
//             $(this).find(".player-name").val(),
//             $(this).find(".player-chips").val()
//           ));
//         });

//         this.rotateDealer();
//         this.currentPlayer = 1;

//     };

//     Game.prototype.getDealer = function() {
//       return this.players[this.dealer];
//     }

//     Game.prototype.getCurrentPlayer = function() {
//       return this.players[this.currentPlayer];
//     }

//     Game.prototype.rotateDealer = function() {
//       for (var x in this.players) {
//         this.players[x].setIsDealing(false);
//       }
//       this.dealer++;
//       this.dealer %= this.players.length;
//       this.getDealer().setIsDealing(true);
//     };

//     Game.prototype.addPlayer = function(player) {
//       this.players.push(player);
//     };

//     // action = {
//     //  command: "fold",
//     //  args: {}
//     // }
//     Game.prototype.takeAction = function(action) {
//       switch(action.command) {
//         default:
//         return false;
//       }

//       return false;
//     };



//     window.Game = Game;
// })();
