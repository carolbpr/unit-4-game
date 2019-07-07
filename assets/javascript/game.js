//variables definition
var playerselected = false;
var defenderselected = false;
var bart = {
    healthPoints: 100,
    attackPower: 8,
    counterAttackPower: 10,
};
var maggie = {
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 15,
};
var lisa = {
    healthPoints: 150,
    attackPower: 6,
    counterAttackPower: 20,
};
var ned = {
    healthPoints: 180,
    attackPower: 5,
    counterAttackPower: 25,
};
var playerHealthpoints = 0;
var playerAttack = 0;
var playerAttackUpdate = 0;
var enemieCounterAttack = 0;
var enemieHealthpoints = 0;
var player = "";
var defender = "";
$(document).ready(function () {
    $("#bartAP").text(bart.healthPoints);
    $("#maggieAP").text(maggie.healthPoints);
    $("#lisaAP").text(lisa.healthPoints);
    $("#nedAP").text(ned.healthPoints);
    $("#attack").attr("disabled", true);

    $("#bart").on("click", function () {
        if (playerselected === false) {
            //Selected Bart
            $("#boxBart").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = bart.healthPoints;
            playerAttack = bart.attackPower;
            player = "bart";
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red");
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");

        }
        else if (($("#boxBart").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = bart.healthPoints;
            enemieCounterAttack = bart.counterAttackPower;
            defender = "bart";
            $("#attack").attr("disabled", false);
            $("#boxBart").appendTo("#defenderDiv");
            $("#boxBart").css("background-color", "black");
        }
    })
    $("#maggie").on("click", function () {
        if (playerselected === false) {
            //Selected Maggie
            $("#boxMaggie").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = maggie.healthPoints;
            playerAttack = maggie.attackPower;
            player = "maggie";
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
        }
        else if (($("#boxMaggie").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = maggie.healthPoints;
            enemieCounterAttack = maggie.counterAttackPower;
            defender = "maggie";
            $("#attack").attr("disabled", false);
            $("#boxMaggie").appendTo("#defenderDiv");
            $("#boxMaggie").css("background-color", "black");

        }
    })
    $("#lisa").on("click", function () {
        if (playerselected === false) {
            //Selected Lisa
            $("#boxLisa").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = lisa.healthPoints;
            playerAttack = lisa.attackPower;
            player = "lisa";
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red");
            $("#boxNed").appendTo("#enemieDiv");
            $("#boxNed").css("background-color", "red");
        }
        else if (($("#boxLisa").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = lisa.healthPoints;
            enemieCounterAttack = lisa.counterAttackPower;
            defender = "lisa";
            $("#attack").attr("disabled", false);
            $("#boxLisa").appendTo("#defenderDiv");
            $("#boxLisa").css("background-color", "black");
        }
    })
    $("#ned").on("click", function () {
        if (playerselected === false) {
            //Selected Ned
            $("#boxNed").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = ned.healthPoints;
            playerAttack = ned.attackPower;
            player = "ned";
            $("#boxBart").appendTo("#enemieDiv");
            $("#boxBart").css("background-color", "red");
            $("#boxMaggie").appendTo("#enemieDiv");
            $("#boxMaggie").css("background-color", "red")
            $("#boxLisa").appendTo("#enemieDiv");
            $("#boxLisa").css("background-color", "red");
        }
        else if (($("#boxNed").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = ned.healthPoints;
            enemieCounterAttack = ned.counterAttackPower;
            defender = "ned";
            $("#attack").attr("disabled", false);
            $("#boxNed").appendTo("#defenderDiv");
            $("#boxNed").css("background-color", "black");
        }
    })
    $("#attack").on("click", function () {

        if (playerselected === true && defenderselected === true) {
            playerHealthpoints = playerHealthpoints - enemieCounterAttack;
            enemieHealthpoints = enemieHealthpoints - playerAttackUpdate;
            playerAttackUpdate = playerAttack + playerAttackUpdate;
            $("#" + player + "AP").text(playerHealthpoints);
            $("#" + defender + "AP").text(enemieHealthpoints);

  
        }
    })
});