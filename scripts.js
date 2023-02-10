let diceOneRandomVal;
let diceTwoRandomVal;
let diceThreeRandomVal;

let diceOneArray;
let diceTwoArray;
let diceThreeArray;
let diceArray = [];

// returns a nested array of elements [[HTML Collection containing classList "dice1..."], HTML Collection containing classList "dice2..."], [HTML Collection containing classList "dice3"]]
function getDiceElements() {
    diceArray.push(document.getElementsByClassName("dice1-contents"), document.getElementsByClassName('dice2-contents'), document.getElementsByClassName("dice3-contents"));

    return diceArray;
}

console.table(getDiceElements());

function getDiceOneElements() {
    const diceOneDivL = document.getElementsByClassName("dice1-contents letter-L"); 
    const diceOneDiv = document.getElementsByClassName("dice1-contents dot-1");
    const diceOneDivR = document.getElementsByClassName("dice1-contents letter-R");
    const diceOneDivC = document.getElementsByClassName("dice1-contents letter-C");

    diceOneArray = [diceOneDivL, diceOneDiv, diceOneDivR, diceOneDivC];
    
    return diceOneArray;
}

function getDiceTwoElements() {
    const diceTwoDivL = document.getElementsByClassName("dice2-contents letter-L"); 
    const diceTwoDiv = document.getElementsByClassName("dice2-contents dot-1");
    const diceTwoDivR = document.getElementsByClassName("dice2-contents letter-R");
    const diceTwoDivC = document.getElementsByClassName("dice2-contents letter-C");

    diceTwoArray = [diceTwoDivL, diceTwoDiv, diceTwoDivR, diceTwoDivC];
    
    return diceTwoArray;
}

function getDiceThreeElements() {
    const diceThreeDivL = document.getElementsByClassName("dice3-contents letter-L"); 
    const diceThreeDiv = document.getElementsByClassName("dice3-contents dot-1");
    const diceThreeDivR = document.getElementsByClassName("dice3-contents letter-R");
    const diceThreeDivC = document.getElementsByClassName("dice3-contents letter-C");

    diceThreeArray = [diceThreeDivL, diceThreeDiv, diceThreeDivR, diceThreeDivC];
    
    return diceThreeArray;
}

// remove a class from an element - can i loop through the classnames each time i loop an element to remove that classname only? assign the classnames to an array variable?
function removeClass(element, classNames) {
    element.classList.remove(`${className}`)
};

function removeClasses(elements, classNames) {
    for (let i=0; i<elements.length; i++) {
        for (let j=0; j<classNames.length; j++) {
            // if element[i] contains className[i], remove this class name from the classList
            if elements[i].classList.contains(classNames[i]) {
                removeClass(elements[i], classNames[i]);
            }
        }
    }
}

function resetDie() {
    const classArray = ["dice-1__letter-L--toggle", "dice-1__dot-1--toggle", "dice-1__letter-R--toggle", "dice-1__letter-C--toggle"];
    removeClasses(diceArray, classArray);
}


function resetDiceOne() { 
    removeClass(diceOneArray[0][0], "dice-1__letter-L--toggle");
    removeClass(diceOneArray[1][0], "dice-1__dot-1--toggle");
    removeClass(diceOneArray[2][0], "dice-1__letter-R--toggle");
    removeClass(diceOneArray[3][0], "dice-1__letter-C--toggle");
};

function resetDiceTwo() { 
    removeClass(diceTwoArray[0][0], "dice-2__letter-L--toggle");
    removeClass(diceTwoArray[1][0], "dice-2__dot-1--toggle");
    removeClass(diceTwoArray[2][0], "dice-2__letter-R--toggle");
    removeClass(diceTwoArray[3][0], "dice-2__letter-C--toggle");
};

function resetDiceThree() { 
    removeClass(diceThreeArray[0][0], "dice-3__letter-L--toggle");
    removeClass(diceThreeArray[1][0], "dice-3__dot-1--toggle");
    removeClass(diceThreeArray[2][0], "dice-3__letter-R--toggle");
    removeClass(diceThreeArray[3][0], "dice-3__letter-C--toggle");
};

function rollDiceOne() {
    getDiceOneElements();
    diceOneRandomVal = Math.floor(Math.random() * 1000 + 1);
    if (diceOneRandomVal >= 501 && diceOneRandomVal <= 666) {
        resetDiceOne();
        console.log(`L: between 501 and 666 ::: ${diceOneRandomVal}`);
        diceOneArray[0][0].classList.toggle("dice-1__letter-L--toggle");
    } else if(diceOneRandomVal > 0 && diceOneRandomVal <= 500) {
        resetDiceOne();
        console.log(`Dot: between 0 and 500 ::: ${diceOneRandomVal}`);
        diceOneArray[1][0].classList.toggle("dice-1__dot-1--toggle");
    } else if (diceOneRandomVal >= 667 && diceOneRandomVal <= 833){
        resetDiceOne();
        console.log(`R: between 667 and 833 ::: ${diceOneRandomVal}`);
        diceOneArray[2][0].classList.toggle("dice-1__letter-R--toggle");
    } else {
        resetDiceOne();
        console.log(`C: 834 plus ::: ${diceOneRandomVal}`);
        diceOneArray[3][0].classList.toggle("dice-1__letter-C--toggle");
    }
}

function rollDiceTwo() {
    getDiceTwoElements();
    diceTwoRandomVal = Math.floor(Math.random() * 1000 + 1);
    if (diceTwoRandomVal > 334 && diceTwoRandomVal < 500) {
        resetDiceTwo();
        console.log(`L: between 334 and 500 ::: ${diceTwoRandomVal}`);
        diceTwoArray[0][0].classList.toggle("dice-2__letter-L--toggle");
    } else if(diceTwoRandomVal >= 501 && diceTwoRandomVal <= 1000) {
        resetDiceTwo();
        console.log(`Dot: between 501 and 1000 ::: ${diceTwoRandomVal}`);
        diceTwoArray[1][0].classList.toggle("dice-2__dot-1--toggle");
    } else if (diceTwoRandomVal >= 168 && diceTwoRandomVal <= 333){
        resetDiceTwo();
        console.log(`R: between 168 and 333 ::: ${diceTwoRandomVal}`);
        diceTwoArray[2][0].classList.toggle("dice-2__letter-R--toggle");
    } else {
        resetDiceTwo();
        console.log(`C: under 167 ::: ${diceTwoRandomVal}`);
        diceTwoArray[3][0].classList.toggle("dice-2__letter-C--toggle");
    }
}

function rollDiceThree() {
    getDiceThreeElements();
    diceThreeRandomVal = Math.floor(Math.random() * 1000 + 1);
    if (diceThreeRandomVal >= 834 && diceThreeRandomVal <= 1000) {
        resetDiceThree();
        console.log(`L: between 834 and 1000 ::: ${diceThreeRandomVal}`);
        diceThreeArray[0][0].classList.toggle("dice-3__letter-L--toggle");
    } else if(diceThreeRandomVal >= 334 && diceThreeRandomVal <= 834) {
        resetDiceThree();
        console.log(`Dot: between 334 and 834 ::: ${diceTwoRandomVal}`);
        diceThreeArray[1][0].classList.toggle("dice-3__dot-1--toggle");
    } else if (diceThreeRandomVal > 0 && diceThreeRandomVal <= 167){
        resetDiceThree();
        console.log(`R: between 0 and 167 ::: ${diceThreeRandomVal}`);
        diceThreeArray[2][0].classList.toggle("dice-3__letter-R--toggle");
    } else {
        resetDiceThree();
        console.log(`C: between 168 and 333 ::: ${diceThreeRandomVal}`);
        diceThreeArray[3][0].classList.toggle("dice-3__letter-C--toggle");
    }
}

function playGame() {
    getDiceOneElements();
    rollDiceOne();
    rollDiceTwo();
    rollDiceThree();
}



document.getElementById("body").addEventListener("click", playGame);

