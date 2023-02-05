// on click anywhere on the page, each die should toggle some classes on/off (i.e. display: none) based on a randomly assigned value

let diceOneRandomVal;
let diceTwoRandomVal;
let diceThreeRandomVal;

let diceOneArray;

function getDiceOneElements() {
    const diceOneDivL = document.getElementsByClassName("dice1-contents letter-L"); 
    const diceOneDiv = document.getElementsByClassName("dice1-contents dot-1");
    const diceOneDivR = document.getElementsByClassName("dice1-contents letter-R");
    const diceOneDivC = document.getElementsByClassName("dice1-contents letter-C");

    diceOneArray = [diceOneDivL, diceOneDiv, diceOneDivR, diceOneDivC];
    console.log(diceOneArray);
    
    return diceOneArray;
}

console.log("dice one elements: ", getDiceOneElements());


// console.log(diceOneDivL, diceOneDiv, diceOneDivR, diceOneDivC);


// *********** functionality of displaying the roll for dice one is working - but i need a way to toggle OFF the previously toggle class if clicked previously

function removeClass(element, className) {
    element.classList.remove(`${className}`)
};


function resetDisplay() {
    console.log(diceOneArray[0]);
    
    removeClass(diceOneArray[0][0], "dice-1__letter-L--toggle");
    removeClass(diceOneArray[1][0], "dice-1__dot-1--toggle");
    removeClass(diceOneArray[2][0], "dice-1__letter-R--toggle");
    removeClass(diceOneArray[3][0], "dice-1__letter-C--toggle");
};


function playGame() {
    getDiceOneElements();
    // declaring the random number associated with each die on the page
    diceOneRandomVal = Math.floor(Math.random() * 1000 + 1);
    diceTwoRandomVal = Math.floor(Math.random() * 1000 + 1);
    diceThreeRandomVal = Math.floor(Math.random() * 1000 + 1);


    // assigning a result to a range of values for each die on the page
    // between 1 and 224
    if (diceOneRandomVal > 0 && diceOneRandomVal < 225) {
        resetDisplay();
        console.log(`L: between 1 and 224 ::: ${diceOneRandomVal}`);
        // if the random number value for dice 1 is as noted, find the correct div and turn on the class called ...--toggle to change the display for that element to display: flex from display: none
        // select all elements with class name "dice-1"
        diceOneArray[0][0].classList.toggle("dice-1__letter-L--toggle");
    // between 225 and 500
    } else if(diceOneRandomVal > 224 && diceOneRandomVal < 501) {
        resetDisplay();
        console.log(`Dot: between 225 and 500 ::: ${diceOneRandomVal}`);
        diceOneArray[1][0].classList.toggle("dice-1__dot-1--toggle");
    // between 501 and 749
    } else if (diceOneRandomVal > 500 && diceOneRandomVal < 750){
        resetDisplay();
        console.log(`R: between 501 and 749 ::: ${diceOneRandomVal}`);
        diceOneArray[2][0].classList.toggle("dice-1__letter-R--toggle");
    // all other possible numbers
    } else {
        resetDisplay();
        console.log(`C: 750 plus ::: ${diceOneRandomVal}`);
        diceOneArray[3][0].classList.toggle("dice-1__letter-C--toggle");
    }
}



document.getElementById("body").addEventListener("click", playGame);

