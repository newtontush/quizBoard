$(document).ready(function() {
    $("#questions").submit(function(event) {
        event.preventDefault();
        var val1 = parseInt($("[name=answer1]:checked").val());
        $("#input").text( val1);
    });
});