let enemyHp; // enemy's health
let enemyDamage; // enemy's damage
let enemyType; // which typ the enemy has
let level = 0; // level stage
let vh = 42
window.addEventListener("load", () => {
    vh = (document.body.clientHeight / 100);
})

let enemyLib = [];

/* The fetching of json file enemies*/
fetch("js/enemies.json").then(data => data.json()).then(data => {
    enemyLib = data;
    console.log("yay fetch")
}).catch(it => {
    console.log(e);
    // In case fetch fails
    // enemyLib = JSON.parse(enemiesJson);
})

function whichEnemy(level) {

    if (level < enemyLib.length) {
        let enemy = document.querySelector(".myEnemy"); //

        enemyHp = enemyLib[level].hp;
        enemyDamage = enemyLib[level].damage;
        enemy.style.borderColor = "transparent transparent " + enemyLib[level].color + " transparent";
        enemyType = enemyLib[level].type;
        enemyInterval = enemyLib[level].interval;

        enemyHealthUpdate(); // updates the playeHp counter
    } else {// wining the game

        let ending = document.getElementById("gameEnding");
        let playerSpell = document.getElementsByClassName("spellAnimation");
        let mainMenu = document.getElementById("mainMenu");
        let gameMain = document.getElementById("gameMain");

        level = 0;
        enemyHealthUpdate();
        playerHealthUpdate();
        ending.style.height = "100vh";
        ending.innerHTML = "YOU WON";

        /* this makes the ending screen "visible" and stops the game */
        mainMenu.style.visibility = "hidden";
        mainMenu.style.height = "100vh"
        ending.style.visibility = "visible"
        gameMain.style.visibility = "hidden";


        playerSpell.style.visibility = "hidden";
        // document.querySelector("#gameMain *").style.visibility = "hidden";
        document.getElementById("enemyAttack").remove();

    }

}

/* function for enemy life lose*/
function enemyTakesDamage() {
    switch (spellChoice) {
        case "Slash":
            enemyHp = enemyHp - 10;
            break;
        case "Lightning":
            enemyHp = enemyHp - lightningSpellDamage();
            break;
        case "Ice":
            enemyHp = enemyHp - iceSpellDamage();
            break;
        case "Ground":
            enemyHp = enemyHp - groundSpellDamage();
            break;
    }
    enemyDeath();
    enemyHealthUpdate();
}

/* the following function is for "resistances and weaknesses" */
function lightningSpellDamage() {
    switch (enemyType) {
        case "Lightning":
            return 10;
        case "Ice":
            return 40;
        case "Ground":
            return 10;
    }
}

/* the following function is for "resistances and weaknesses" */
function groundSpellDamage() {
    switch (enemyType) {
        case "Lightning":
            return 40;
        case "Ice":
            return 10;
        case "Ground":
            return 10;
    }
}

/* the following function is for "resistances and weaknesses" */
function iceSpellDamage() {
    switch (enemyType) {
        case "Lightning":
            return 10;
        case "Ice":
            return 10;
        case "Ground":
            return 40;
    }
}

function enemyHealthUpdate() {
    document.getElementById("eHp").innerHTML = enemyHp;
}

/* enemy death and new level */
function enemyDeath() {
    if (enemyHp <= 0) {
        enemyHp = 0; // set to 0 so it will never show negative Hp
        level++; // +1 when enemy killed
        whichEnemy(level); // new stage & new enemy
    }
}





