/*This is the animation of the enemies spells,
 it changes the top style of the css */

let ident = null; // interval
let position = 20; // start position of enemy Spell
let enemyInterval = 1000; // how fast enemy attacks
let enemyDps; // global interval variable

/* This function starts the enemy's Animation*/
function startOfAttacks() {
    enemyDps = setInterval(enemyCasts, enemyInterval)
}


function enemyCasts() {
    if (level < enemyLib.length) {
        let enemyMovement = document.getElementById("enemyAttack");

        clearInterval(enemyDps); // we have to clear it here, so the intervals don't stack and goes to fast
        ident = setInterval(movement, 10); // how fast the spell moves you could compare it to fps of spell

        function movement() {
            /* makes the enemys spell visible*/
            enemyMovement.style.visibility = "visible";

            if (position >= 70) {
                position = 20 // resets the position
                clearInterval(ident);
                playerTakesDamage(); // player damage
                //TODO enemyMovement.style.visibility = "hidden" here so it isn't need in endscreens

                if (level < enemyLib.length) {
                    startOfAttacks(); // restarts the attack again after it reaches it goal, needed or bug
                }

            } else {
                position++; // Inkrement(++)
                enemyMovement.style.top = position + 'vh'; // add the new position to style
            }
        }
    }
}


