$(function() {
    $(".add-player").click(function() {
        $(".players").append($("#template-player-row").html());
    });

    $("body").on("click", ".remove-player", function() {
        $(this).closest(".row").remove();
    });

    $(".begin-round").click(function() {
        var canStart = true;
        $(".players > .row").each(function() {
            var playerChips = $(this).find(".player-chips").val();
            var playerName = $(this).find(".player-name").val();

            if (!playerName) {
                canStart = false;
                alert("A player is missing a name.");
                return false;
            }

            if (!playerChips || playerChips <= 0) {
                canStart = false;
                alert(playerName + " has an invalid chip amount to play.");
                return false;
            }
        });

        if (!canStart) return;


        // Game can start, set up game
        $(".pre-game").hide();
        $(".game").show();
    });
});