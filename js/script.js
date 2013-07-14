$(function() {
    $(".add-player").click(function() {
        $(".players").append($("#template-player-row").html());
    });

    $("body").on("click", ".remove-player", function() {
        $(this).closest(".row").remove();
    });

    $(".begin-round").click(function() {
        try {
            window.game = new Game();
            window.game.start();
        } catch (e) {
            alert(e);
        }
    });

    $("body").on("click", ".check-call", function() {
        window.game.takeAction("checkCall");
    });

    $("body").on("click", ".bet-raise", function() {
        window.game.takeAction("betRaise");
    });

    $(".players").append($("#template-player-row").html());
    $(".players").append($("#template-player-row").html());
});