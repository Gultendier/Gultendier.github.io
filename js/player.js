/*for Player*/

let playerHp = 1000;

function playerHealth() {
    playerHp = playerHp - enemyDamage;
    playerDeath();
    playerHealthUpdate()
}

function playerHealthUpdate() {
    document.getElementById("pHp").innerHTML = playerHp;
}

function playerDeath() {
    if (playerHp <= 0) {

        let ending = document.getElementById("gameEnding");
        let mainMenu = document.getElementById("mainMenu");
        let gameMain = document.getElementById("gameMain");

        playerHp = 0; // so it doesnt your life cant fall under 0
        playerHealthUpdate(); // updates your hp
        enemyHealthUpdate(); // updates the healt of both
        clearInterval(enemyDps); // stops the enemy's attack from being cast

        ending.style.visibility = "visible"; // makes the end screen visible
        ending.style.height = "100vh";
        mainMenu.style.visibility = "hidden";
        gameMain.style.visibility = "hidden";
        document.getElementById("enemyAttack").remove();

        document.getElementById("gameEnding").innerHTML = "YOU DIED";
    }
}



