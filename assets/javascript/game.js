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
var counterwin = 0;
$(document).ready(function () {
    $("#bartAP").text(bart.healthPoints);
    $("#maggieAP").text(maggie.healthPoints);
    $("#lisaAP").text(lisa.healthPoints);
    $("#nedAP").text(ned.healthPoints);
    $("#attack").attr("disabled", true);

    $("#bart").on("click", function () {
        if (playerselected === false) {
            //Selected Bart
            $("#boxbart").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = bart.healthPoints;
            playerAttack = bart.attackPower;
            player = "bart";
            $("#boxmaggie").appendTo("#enemieDiv");
            $("#boxmaggie").css("background-color", "red");
            $("#boxlisa").appendTo("#enemieDiv");
            $("#boxlisa").css("background-color", "red");
            $("#boxned").appendTo("#enemieDiv");
            $("#boxned").css("background-color", "red");

        }
        else if (($("#boxbart").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = bart.healthPoints;
            enemieCounterAttack = bart.counterAttackPower;
            defender = "bart";
            $("#attack").attr("disabled", false);
            $("#boxbart").appendTo("#defenderDiv");
            $("#boxbart").css("background-color", "black");
        }
    })
    $("#maggie").on("click", function () {
        if (playerselected === false) {
            //Selected Maggie
            $("#boxmaggie").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = maggie.healthPoints;
            playerAttack = maggie.attackPower;
            player = "maggie";
            $("#boxbart").appendTo("#enemieDiv");
            $("#boxbart").css("background-color", "red");
            $("#boxlisa").appendTo("#enemieDiv");
            $("#boxlisa").css("background-color", "red");
            $("#boxned").appendTo("#enemieDiv");
            $("#boxned").css("background-color", "red");
        }
        else if (($("#boxmaggie").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = maggie.healthPoints;
            enemieCounterAttack = maggie.counterAttackPower;
            defender = "maggie";
            $("#attack").attr("disabled", false);
            $("#boxmaggie").appendTo("#defenderDiv");
            $("#boxmaggie").css("background-color", "black");

        }
    })
    $("#lisa").on("click", function () {
        if (playerselected === false) {
            //Selected Lisa
            $("#boxlisa").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = lisa.healthPoints;
            playerAttack = lisa.attackPower;
            player = "lisa";
            $("#boxbart").appendTo("#enemieDiv");
            $("#boxbart").css("background-color", "red");
            $("#boxmaggie").appendTo("#enemieDiv");
            $("#boxmaggie").css("background-color", "red");
            $("#boxned").appendTo("#enemieDiv");
            $("#boxned").css("background-color", "red");
        }
        else if (($("#boxlisa").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = lisa.healthPoints;
            enemieCounterAttack = lisa.counterAttackPower;
            defender = "lisa";
            $("#attack").attr("disabled", false);
            $("#boxlisa").appendTo("#defenderDiv");
            $("#boxlisa").css("background-color", "black");
        }
    })
    $("#ned").on("click", function () {
        if (playerselected === false) {
            //Selected Ned
            $("#boxned").appendTo("#playerDiv");
            playerselected = true;
            playerHealthpoints = ned.healthPoints;
            playerAttack = ned.attackPower;
            player = "ned";
            $("#boxbart").appendTo("#enemieDiv");
            $("#boxbart").css("background-color", "red");
            $("#boxmaggie").appendTo("#enemieDiv");
            $("#boxmaggie").css("background-color", "red")
            $("#boxlisa").appendTo("#enemieDiv");
            $("#boxlisa").css("background-color", "red");
        }
        else if (($("#boxned").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemieHealthpoints = ned.healthPoints;
            enemieCounterAttack = ned.counterAttackPower;
            defender = "ned";
            $("#attack").attr("disabled", false);
            $("#boxned").appendTo("#defenderDiv");
            $("#boxned").css("background-color", "black");
        }
    })
    $("#attack").on("click", function () {
        if (playerselected === true && defenderselected === true) {
            playerAttackUpdate = playerAttack + playerAttackUpdate;
            playerHealthpoints = playerHealthpoints - enemieCounterAttack;
            enemieHealthpoints = enemieHealthpoints - playerAttackUpdate;
            $("#" + player + "AP").text(playerHealthpoints);
            $("#" + defender + "AP").text(enemieHealthpoints);
            if (playerHealthpoints <= 0 && enemieHealthpoints>0) {
                $("#attack").attr("disabled", true);
                alert("You lost!");
            }
            else if (enemieHealthpoints <= 0) {
                $("#box" + defender).css("display", "none");
                defenderselected = false;
                counterwin++;
                if(counterwin === 3){
                    alert("YOU WIN!")
                    $("#attack").attr("disabled", true);
                }
            }
        }
        else{
            alert("Enemie has not been selected")
        }
    })
});