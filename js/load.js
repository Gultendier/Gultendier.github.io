//TODO this is right now not needed but will be used to make the code cleaner, continue adding more events


/* This is the js for all the things*/

/* all the initializations of the documents */

function startLoad() {

    enemyHealthUpdate(); // this two have to be loaded at the start so the health can be shown
    playerHealthUpdate();

    let backEvent = document.getElementById("gameBack");
    backEvent.addEventListener("click", gameBack)

    let startEvent = document.getElementById("gameStart");
    startEvent.addEventListener("click", gameStart);

    let tutorialEvent = document.getElementById("gameTutorial");
    tutorialEvent.addEventListener("click", gameTutorial);

    let quitEvent = document.getElementById("gameQuit");
    quitEvent.addEventListener("click", gameQuit);

    let upAndLeave = document.querySelector("main");
    upAndLeave.addEventListener("click",mouseUp);
    upAndLeave.addEventListener("mouseleave,",mouseUp)


}