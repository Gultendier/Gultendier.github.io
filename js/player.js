/*for Player*/

let playerHp = 400; // the player Health

/* when the enemy's spell reaches it target the player loses life */
function playerTakesDamage() {
    playerHp = playerHp - enemyDamage;
    playerDeath();
    playerHealthUpdate()
}
/* updates playerHp innerHtml */
function playerHealthUpdate() {
    document.getElementById("pHp").innerHTML = playerHp;
}

/* function for player's death and the "lose-screen" */
function playerDeath() {
    if (playerHp <= 0) {

        let ending = document.getElementById("gameEnding");
        let mainMenu = document.getElementById("mainMenu");
        let gameMain = document.getElementById("gameMain");

        playerHp = 0; // 0 so the player Hp counter doesn't show lower then zero
        playerHealthUpdate();
        enemyHealthUpdate();
        clearInterval(enemyDps); // stops the enemy's attack from being cast

        /* makes the losing-screen vivible */
        ending.style.visibility = "visible";
        ending.style.height = "100vh";
        mainMenu.style.visibility = "hidden";
        gameMain.style.visibility = "hidden";
        document.getElementById("enemyAttack").remove();
        document.getElementById("gameEnding").innerHTML = "YOU DIED";
    }
}



