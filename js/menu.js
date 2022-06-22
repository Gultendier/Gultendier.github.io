/* menu of the game, onclick it changes visibility and changes the styles*/

let start = false; // false so it can become true after being click
let tutorial = false;
let quit = false;
let back = false;

/* checks if start was clicked and makes it true */
function gameStart() {
    start = true;
    gameMenu();
}

/* checks if tutorial was clicked and makes it true */
function gameTutorial() {
    tutorial = true;
    gameMenu()
}

/* checks if back was clicked and makes it true */
function gameBack() {
    back = true;
    gameMenu();
}

/* the function of the whole menu, it checks which option was clicked and triggers it effect*/
function gameMenu() {

    /*For menu options*/
    let menuBack = document.getElementById("gameBack"); // this is the back "button"
    let gameMain = document.getElementById("gameMain"); // this is the whole game
    let pageOfTutorial = document.getElementById("mainTutorial"); // this is the for the tutorial pics
    let pageOfMenu = document.getElementById("mainMenu"); // this is the whole menu

    /* if the start option was clicked it will start the game */
    if (start) {

        gameMain.style.visibility = "visible"; // makes the game visible, so it can be playn
        pageOfMenu.style.visibility = "hidden"; // hides the menu
        pageOfTutorial.style.visibility = "hidden"; // hides the tutorial

        pageOfMenu.style.height = "0px"; // moves them somewhere else, so the "divs" don't take "space"
        pageOfTutorial.style.height = "0px";// moves them somewhere else, so the "divs" don't take "space"

        startOfAttacks(); // start the animation of the enemy Spells
        whichEnemy(0); // enemy spawn
        start = false; // isn't needed

    }
    /* if the tutorial was clicked it will show the tutorial */
    if (tutorial) {

        pageOfTutorial.style.visibility = "visible" // shows the tutorial with text and picture
        pageOfMenu.style.height = "0px";
        pageOfMenu.style.visibility = "hidden"; // hides the menu
        menuBack.style.visibility = "visible"; // becomes visible so you can click on it

        if (back) {
            pageOfMenu.style.visibility = "visible";  // makes the menu visible again
            pageOfTutorial.style.visibility = "hidden";// hides the tutorial pics again
            menuBack.style.visibility = "hidden"; // back becomes visible so you can click on it
            tutorial = false;
        }
    }
}