$(function() {
    $(".add-player").click(function() {
        $(".players").append($("#template-player-row").html());
    });

    $("body").on("click", ".remove-player", function() {
        $(this).closest(".row").remove();
    });

    $(".begin-round").click(function() {
        try {
            var game = new Game();
            game.start();
        } catch (e) {
            alert(e);
        }
    });

    $(".players").append($("#template-player-row").html());
});