window.alert = function(message) {
    var alertDiv = $("<div>").css({
        width: "100%",
        background: "#c0392b",
        color: "#fff",
        transform: "translate3d(0,100%,0)",
        transition: "all 200ms ease-in-out",
        position: "fixed",
        bottom: 0, left: 0,
        padding: "12px",
        "text-align": "center",
        "box-sizing": "border-box",
        "z-index": "9999"
    }).html(message);
    $("body").prepend(alertDiv);
    setTimeout(function(){
        alertDiv.css({
            transform: "translate3d(0,0,0)"
        });
    }, 0);

    (function(alertDiv) {
        setTimeout(function() {
            alertDiv.css({
                transform: "translate3d(0,100%,0)"
            });
            setTimeout(function() {
                alertDiv.remove();
            }, 200);
        }, 1000);
    })(alertDiv);
};