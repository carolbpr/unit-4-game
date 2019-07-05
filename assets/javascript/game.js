$(document).ready(function () {
    var playerselected = false;

    if (playerselected === false) {
        $("#bart").on("click", function () {
            //Selected Bart
            $("#boxBart").appendTo("#playerDiv");
            playerselected = true;
            $("#boxBart").css("background-color", "#5edc4d");
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red");
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
        })
        $("#maggie").on("click", function () {
            //Selected Maggie
            $("#boxMaggie").appendTo("#playerDiv");
            playerselected = true;
            $("#boxMaggie").css("background-color", "#5edc4d");
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
        });
        $("#lisa").on("click", function () {
            //Selected Lisa
            $("#boxLisa").appendTo("#playerDiv");
            playerselected = true;
            $("#boxLisa").css("background-color", "#5edc4d");
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red");
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
        });
        $("#ned").on("click", function () {
            //Selected Ned
            $("#boxNed").appendTo("#playerDiv");
            playerselected = true;
            $("#boxNed").css("background-color", "#5edc4d");
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red")
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
        });
        
    }
});
