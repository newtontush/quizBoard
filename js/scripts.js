$(document).ready(function() {
    $("#questions").submit(function(event) {
        event.preventDefault();
        var val1 = parseInt($("[name=answer1]:checked").val());
        var val2 = parseInt($("[name=answer2]:checked").val());
        var val3 = parseInt($("[name=answer3]:checked").val());
        var val4 = parseInt($("[name=answer4]:checked").val());
        var val5 = parseInt($("[name=answer5]:checked").val());
        var val6 = parseInt($("[name=answer6]:checked").val());
        $("#input").text("Your score is: " + (val1 + val2 + val3 + val4 + val5 + val6));
    });
});