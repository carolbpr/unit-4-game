//variables definition
var playerselected = false;
var defenderselected = false;
var bart = {
    name: "BART",
    healthPoints: 120,
    attackPower: 8,
    counterAttackPower: 10,
};
var maggie = {
    name: "MAGGIE",
    healthPoints: 100,
    attackPower: 15,
    counterAttackPower: 5,
};
var lisa = {
    name: "LISA",
    healthPoints: 150,
    attackPower: 8,
    counterAttackPower: 20,
};
var ned = {
    name: "NED FLANDERS",
    healthPoints: 180,
    attackPower: 10,
    counterAttackPower: 25,
};
var playerHealthpoints = 0;
var playerAttack = 0;
var playerAttackUpdate = 0;
var playername = "";
var enemyname = "";
var enemyCounterAttack = 0;
var enemyHealthpoints = 0;
var player = "";
var defender = "";
var counterwin = 0;
var line1 = $("<div>");
var line2 = $("<div>");

$(document).ready(function () {
    $("#bartAP").text(bart.healthPoints);
    $("#maggieAP").text(maggie.healthPoints);
    $("#lisaAP").text(lisa.healthPoints);
    $("#nedAP").text(ned.healthPoints);
    $("#attack").attr("disabled", true);
    line1.text("Choose your Charater to start the game");
    $("#defenderDiv").append(line1);
    $("#boxbart").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            //Selected Bart
            $("#boxbart").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playerHealthpoints = bart.healthPoints;
            playerAttack = bart.attackPower;
            playername = bart.name;
            player = "bart";
            $("#boxmaggie").appendTo("#enemyDiv");
            $("#boxmaggie").css("background-color", "red");
            $("#boxlisa").appendTo("#enemyDiv");
            $("#boxlisa").css("background-color", "red");
            $("#boxned").appendTo("#enemyDiv");
            $("#boxned").css("background-color", "red");
        }
        else if (($("#boxbart").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = bart.name;
            enemyHealthpoints = bart.healthPoints;
            enemyCounterAttack = bart.counterAttackPower;
            defender = "bart";
            $("#boxbart").appendTo("#defenderDiv");
            $("#boxbart").css("background-color", "black");
            $("#boxbart").css("color", "yellow");
        }
    })
    $("#boxmaggie").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            //Selected Maggie
            $("#boxmaggie").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playername = maggie.name;
            playerHealthpoints = maggie.healthPoints;
            playerAttack = maggie.attackPower;
            player = "maggie";
            $("#boxbart").appendTo("#enemyDiv");
            $("#boxbart").css("background-color", "red");
            $("#boxlisa").appendTo("#enemyDiv");
            $("#boxlisa").css("background-color", "red");
            $("#boxned").appendTo("#enemyDiv");
            $("#boxned").css("background-color", "red");
        }
        else if (($("#boxmaggie").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = maggie.name;
            enemyHealthpoints = maggie.healthPoints;
            enemyCounterAttack = maggie.counterAttackPower;
            defender = "maggie";
            $("#boxmaggie").appendTo("#defenderDiv");
            $("#boxmaggie").css("background-color", "black");
            $("#boxmaggie").css("color", "yellow");

        }
    })
    $("#boxlisa").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            //Selected Lisa
            $("#boxlisa").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playername = lisa.name;
            playerHealthpoints = lisa.healthPoints;
            playerAttack = lisa.attackPower;
            player = "lisa";
            $("#boxbart").appendTo("#enemyDiv");
            $("#boxbart").css("background-color", "red");
            $("#boxmaggie").appendTo("#enemyDiv");
            $("#boxmaggie").css("background-color", "red");
            $("#boxned").appendTo("#enemyDiv");
            $("#boxned").css("background-color", "red");
        }
        else if (($("#boxlisa").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = lisa.name;
            enemyHealthpoints = lisa.healthPoints;
            enemyCounterAttack = lisa.counterAttackPower;
            defender = "lisa";
            $("#boxlisa").appendTo("#defenderDiv");
            $("#boxlisa").css("background-color", "black");
            $("#boxlisa").css("color", "yellow");
        }
    })
    $("#boxned").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            //Selected Ned
            $("#boxned").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playername = ned.name;
            playerHealthpoints = ned.healthPoints;
            playerAttack = ned.attackPower;
            player = "ned";
            $("#boxbart").appendTo("#enemyDiv");
            $("#boxbart").css("background-color", "red");
            $("#boxmaggie").appendTo("#enemyDiv");
            $("#boxmaggie").css("background-color", "red");
            $("#boxlisa").appendTo("#enemyDiv");
            $("#boxlisa").css("background-color", "red");
        }
        else if (($("#boxned").css("background-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = ned.name;
            enemyHealthpoints = ned.healthPoints;
            enemyCounterAttack = ned.counterAttackPower;
            defender = "ned";
            $("#boxned").appendTo("#defenderDiv");
            $("#boxned").css("background-color", "black");
            $("#boxned").css("color", "yellow");
        }
    })
    $("#attack").on("click", function () {
        line1.empty();
        line2.empty();
        if (playerselected === true && defenderselected === true) {
            playerAttackUpdate = playerAttack + playerAttackUpdate;
            playerHealthpoints = playerHealthpoints - enemyCounterAttack;
            enemyHealthpoints = enemyHealthpoints - playerAttackUpdate;
            $("#" + player + "AP").text(playerHealthpoints);
            $("#" + defender + "AP").text(enemyHealthpoints);
            if (playerHealthpoints > 0 && enemyHealthpoints > 0) {
                line1.text("You attacked " + enemyname + " for " + playerAttackUpdate + " damage");
                $("#defenderDiv").append(line1);
                line2.text(enemyname + " attacked you back for " + enemyCounterAttack + " damage");
                $("#defenderDiv").append(line2);
            }
            else if (playerHealthpoints <=0) {
                $("#attack").attr("disabled", true);
                line1.text("You've been defeated...GAME OVER!!!");
                $("#defenderDiv").append(line1);
                //$("#defenderDiv").append(resetbutton);
                $("#resetbutton").css("visibility", "visible");
                line2.empty();
            }
            else if (enemyHealthpoints <= 0) {
                $("#box" + defender).css("display", "none");
                defenderselected = false;
                counterwin++;
                line1.text("You've defeated " + enemyname + ", choose another enemy");
                line2.empty();
                if (counterwin === 3) {
                    line1.empty();
                    line1.text("YOU WON!!!");
                    $("#defenderDiv").append(line1);
                    //$("#defenderDiv").append(resetbutton);
                    $("#resetbutton").css("visibility", "visible");
                    line2.empty();
                    $("#attack").attr("disabled", true);
                }
            }
        }
        else {
            line1.text("Enemy has not been selected");
            $("#defenderDiv").append(line1);
            line2.empty();
        }
    })
    $("#resetbutton").on("click", function(){
        $("#resetbutton").css("visibility","hidden");
        line1.empty();
        playerselected = false;
        defenderselected = false;
        bart = {
            name: "BART",
            healthPoints: 100,
            attackPower: 8,
            counterAttackPower: 10,
        };
        maggie = {
            name: "MAGGIE",
            healthPoints: 120,
            attackPower: 5,
            counterAttackPower: 5,
        };
        lisa = {
            name: "LISA",
            healthPoints: 150,
            attackPower: 8,
            counterAttackPower: 20,
        };
        ned = {
            name: "NED FLANDERS",
            healthPoints: 180,
            attackPower: 15,
            counterAttackPower: 25,
        };
        playerHealthpoints = 0;
        playerAttack = 0;
        playerAttackUpdate = 0;
        playername = "";
        enemyname = "";
        enemyCounterAttack = 0;
        enemyHealthpoints = 0;
        player = "";
        defender = "";
        counterwin = 0;
        line1 = $("<div>");
        line2 = $("<div>");
        $("#boxbart").appendTo("#playerDiv");
        $("#boxbart").css("background-color", "white");
        $("#boxbart").css("color","black");
        $("#boxbart").css("display", "inline-flex");
        $("#boxmaggie").appendTo("#playerDiv");
        $("#boxmaggie").css("background-color", "white");
        $("#boxmaggie").css("color","black");
        $("#boxmaggie").css("display", "inline-flex");
        $("#boxlisa").appendTo("#playerDiv");
        $("#boxlisa").css("background-color", "white");
        $("#boxlisa").css("color","black");
        $("#boxlisa").css("display", "inline-flex");
        $("#boxned").appendTo("#playerDiv");
        $("#boxned").css("background-color", "white");
        $("#boxned").css("color","black");
        $("#boxned").css("display", "inline-flex");
        $("#bartAP").text(bart.healthPoints);
        $("#maggieAP").text(maggie.healthPoints);
        $("#lisaAP").text(lisa.healthPoints);
        $("#nedAP").text(ned.healthPoints);
        $("#attack").attr("disabled", true);
        line1.text("Choose your Charater to start the game");
        $("#defenderDiv").append(line1);
        
    })
});