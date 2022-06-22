/* menu of the game, onclick it makes visible and removes the divs and adds*/

let start = false; // false so it can become true after click
let tutorial = false;
let quit = false;
let back = false;

function gameStart() { // checks if start was clicked
    start = true;
    gameMenu();
}

function gameTutorial() {
    tutorial = true;
    gameMenu()
}

function gameQuit() {
    quit = true;
    gameMenu();
}

function gameBack() {
    back = true;
    gameMenu();
}

function gameMenu() { // gameMenu

    /*For menu Clicks*/

    let menuBack = document.getElementById("gameBack"); // this is the back "button"
    let gameMain = document.getElementById("gameMain"); // this is the whole game
    let pageOfTutorial = document.getElementById("mainTutorial"); // this is the div of the tutorial pics are here
    let pageOfMenu = document.getElementById("mainMenu"); // this is the div of the whole menu

    if (start) { //game start


        gameMain.style.visibility = "visible"; // makes the game visible = game start
        pageOfMenu.style.visibility = "hidden";
        pageOfTutorial.style.visibility = "hidden";

        pageOfMenu.style.height = "0px";
        pageOfTutorial.style.height = "0px";

        startOfAttacks(); // start the attacks of the enemy
        whichEnemy(0); // enemy spawn
        start = false;

    }
    if (tutorial) { //tutorial

        pageOfTutorial.style.visibility = "visible"
        pageOfMenu.style.height = "0px";
        pageOfMenu.style.visibility = "hidden"; // makes the menu hidden and the back div visible
        menuBack.style.visibility = "visible"; // becomes visible so you can click on it

        if (back) {
            pageOfMenu.style.visibility = "visible";  //makes the menu visible again
            pageOfTutorial.style.visibility = "hidden";// makes the tutorial pictures visible
            menuBack.style.visibility = "hidden"; // back becomes visible so you can click on it
            tutorial = false;
        }
    }

}