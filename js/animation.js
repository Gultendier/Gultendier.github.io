//Spell animations

let a = 0; // test

let id = null; // interval variable
let spellCount = []; // counts how often a symbol was drawn right
let elem; // variable for creation of div

// The animation of player Spells
function spellAnimation() {

    elem = document.createElement("div"); // creates a div and adds it to elem
    elem.className = "spellAnimation"; // the div becomes the class "spellAnimation" assign.

    let mainelem = document.getElementsByTagName("main"); // adds the main to mainelem
    mainelem.item(0).appendChild(elem); // makes "spellAnimation" a child element of main

    /* The Style changes of player spells*/
    switch (spellChoice) {
        case "Slash":
            console.log("Slash")
            elem.style.backgroundColor = "black"
            elem.style.borderRadius = "0%"
            elem.style.width = "5vh";
            elem.style.height = "5vh";
            break;
        case "Lightning":
            console.log("Lightning")
            elem.style.backgroundColor = "aqua";
            elem.style.borderRadius = "100%";
            elem.style.width = "30%";
            elem.style.height = "400%";
            break;
        case "Ice":
            console.log("Ice")
            elem.style.backgroundColor = "white";
            elem.style.borderRadius = "100%";
            elem.style.width = "30%";
            elem.style.height = "15%";
            break;
        case "Ground":
            console.log("Ground")
            elem.style.backgroundColor = "#664008";
            elem.style.borderRadius = "20%"
            elem.style.height = "30%";
            elem.style.width = "100%";
            break;
    }
    elem.setAttribute("pos", "65"); // start position of spell
    elem.style.top = '65 vh'; // the attribute become now a "style"
    spellCount.push(elem); // adds the spells into the array

    clearInterval(id); // clears the interval of frame, needed, or it will repeat to often
    id = setInterval(frame, 10);// 10 - 20 how fast the spell moves
}

/* function for the movement of spells */
function frame() {

    for (let i = 0; i < spellCount.length; i++) {
        /* checks if the spell reached it position and how long it should stay */
        if (spellCount[i].getAttribute("pos") <= 25) {
            spellCount[i].remove(); // removes the object
            spellCount.shift(); // removes the first element of array and returns it

            enemyTakesDamage(); // after the chosen spell reaches it targets it deals damage

        } else { // if the spell didn't reach it goal, it will change it positions til it does
            spellCount[i].setAttribute("pos", spellCount[i].getAttribute("pos") - 1);
            spellCount[i].style.top = spellCount[i].getAttribute("pos") + 'vh'; // changes the position of the object by 1vh
            elem.style.visibility = "visible"; // makes the spell visible
        }
    }

    if (spellCount.length === 0) { // when array is empty clear the interval
        clearInterval(id);
    }
}



