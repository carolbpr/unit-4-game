$(document).ready(function () {
    var playerselected = false;
    var defender = false;
    var bart = null;
    var maggie = null;
    var lisa = null;
    var ned = null;
    $("#bart").on("click", function () {
        if (playerselected === false) {
            //Selected Bart
            $("#boxBart").appendTo("#playerDiv");
            playerselected = true;
            bart = "player";
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red");
            maggie = "enemie";
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            lisa = "enemie";
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
            ned = "enemie";
        }
        else if (($("#boxBart").css("background-color") === "rgb(255, 0, 0)") && (defender == false)) {
            defender = true;
            $("#boxBart").appendTo("#defenderDiv");
            $("#boxBart").css("background-color", "black");
        }
    })
    $("#maggie").on("click", function () {
        if (playerselected === false) {
            //Selected Maggie
            $("#boxMaggie").appendTo("#playerDiv");
            playerselected = true;
            maggie = "player";
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            bart = "enemie"
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            lisa = "enemie";
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
            ned = "enemie";
        }
        else if (($("#boxMaggie").css("background-color") === "rgb(255, 0, 0)") && (defender == false)) {
            defender = true;
            $("#boxMaggie").appendTo("#defenderDiv");
            $("#boxMaggie").css("background-color", "black");
        }
    })
    $("#lisa").on("click", function () {
        if (playerselected === false) {
            //Selected Lisa
            $("#boxLisa").appendTo("#playerDiv");
            playerselected = true;
            lisa = "player";
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            bart = "enemie";
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red");
            maggie = "enemie";
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
            ned = "enemie";
        }
        else if (($("#boxLisa").css("background-color") === "rgb(255, 0, 0)") && (defender == false)){
            defender = true;
            $("#boxLisa").appendTo("#defenderDiv");
            $("#boxLisa").css("background-color", "black");
        }
    })
    $("#ned").on("click", function () {
        if (playerselected === false) {
            //Selected Ned
            $("#boxNed").appendTo("#playerDiv");
            playerselected = true;
            ned = "player";
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            bart = "enemie";
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red")
            maggie = "enemie";
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            lisa = "enemie";
        }
        else if (($("#boxNed").css("background-color") === "rgb(255, 0, 0)") && (defender == false)){
            defender = true;
            $("#boxNed").appendTo("#defenderDiv");
            $("#boxNed").css("background-color", "black");
        }
    })

});
$(document).ready(function () {

    $("#bart").on("click", function () {

    })
});