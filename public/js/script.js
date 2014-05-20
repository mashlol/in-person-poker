$(function() {
    // $(".add-player").click(function() {
    //     $(".players").append($("#template-player-row").html());
    // });

    // $("body").on("click", ".remove-player", function() {
    //     $(this).closest(".row").remove();
    // });

    Omni.on("ready", function() {
        window.gameView = new GameView($(".game"), Omni.collections.games.at(0));
    });
});
