//Spell animations

let a = 0; // test

let id = null; // interval variable
let spellCount = []; // counts how often a symbol was drawn right
let elem; // variable for creation of div

function spellAnimation() { //movement and style changing of #myAnimation


    elem = document.createElement("div"); // creates an div and adds it to elem
    elem.className = "spellAnimation"; // the div becomes the calls "spellAnimation"


    let mainelem = document.getElementsByTagName("main"); // adds the main to mainelem
    mainelem.item(0).appendChild(elem); // make the created div a child element of main

    switch (spellChoice) { //TODO each case changes the style of the spell, maybe make it into a class?
        case "Slash":
            console.log("Slash") // test delete
            elem.style.backgroundColor = "black"; // changes colour from spell
            elem.style.borderRadius = "0%"; // changes form of spell
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
    elem.setAttribute("pos", "65"); // start postion of spell
    elem.style.top = '65 vh'; // pos
    spellCount.push(elem); //
    clearInterval(id); // stops the interval if missing the spell gets faster for each spell cast
    id = setInterval(frame, 10);// 10 - 20 how fast the spell moves
}

function frame() { // function for the movement of spells

    for (let i = 0; i < spellCount.length; i++) {
        if (spellCount[i].getAttribute("pos") <= 25) { // checks if the "spell" reached it target 0 for interface end
            spellCount[i].remove(); // removes the object
            spellCount.shift(); // removes the first element of array and returns it

            enemyTakesDamage(); // deals damage to the enemy

        } else { // if the spell isn't on it end position it will move
            spellCount[i].setAttribute("pos", spellCount[i].getAttribute("pos") - 1);
            spellCount[i].style.top = spellCount[i].getAttribute("pos") + 'vh'; // changes the postion of the object by 1vh
            elem.style.visibility = "visible"; // makes the spell visible

            a++ // test delete both
            console.log(a);


        }
    }

    if (spellCount.length === 0) { // when array is empty clear the intervval
        clearInterval(id);
    }
}



