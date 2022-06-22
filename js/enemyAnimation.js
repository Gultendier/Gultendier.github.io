/*This is the animation of the enemies spells,
 it changes the top and left style of the css*/

let ident = null; // interval
let position = 20; // start postion of enemy Spell
let enemyInterval = 1000; // how often enemy attacks
let enemyDps; // global interval variable

function startOfAttacks() {
    enemyDps = setInterval(enemyCasts, enemyInterval)
}


function enemyCasts() {
    if (level < enemyLib.length) {
        let enemyMovement = document.getElementById("enemyAttack");
        clearInterval(enemyDps);

        ident = setInterval(movement, 10);

        function movement() {

            enemyMovement.style.visibility = "visible";
            if (position >= 70) {
                position = 20
                clearInterval(ident);
                playerHealth(); // player damage

                if (level < enemyLib.length) {
                    startOfAttacks(); // restarts the attack again after it reaches it goal, needed or bug
                }

            } else {
                position++; // +1 postion => moves the div for 1vh
                enemyMovement.style.top = position + 'vh';

            }
        }
    }
}


