'use stirct';
const screenSizes = ["max-width:44.12em"];


const mediaQuery1 = window.matchMedia(`(${screenSizes[0]})`);

const nameEl = document.querySelectorAll('.name');
const scoreEl = document.querySelectorAll('.score');
const currentLabel = document.querySelectorAll('.current-label');
const diceButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const diceButtonOrginalText = document.querySelector('.btn--roll').textContent;
const iconDice = document.createElement("ion-icon");
const iconHold = document.createElement("ion-icon");
const holdButton = document.querySelector('.btn--hold');
const holdButtonOrginalText = document.querySelector('.btn--hold').textContent;


const mediaQuery1Func = function (querry) {
    if (querry.matches) {

        iconDice.setAttribute("name", "dice");
        iconHold.setAttribute("name", "pause-circle");
        diceButton.textContent = "";
        holdButton.textContent = "";
        diceButton.appendChild(iconDice);
        holdButton.appendChild(iconHold);
        diceButton.classList.add('btn--roll--phone');
        holdButton.classList.add('btn--hold--phone');
        dice.classList.add('dice--phone');
        iconDice.classList.add('btn--icon');
        iconHold.classList.add('btn--icon');



    } else {

        iconHold.remove();
        iconDice.remove()
        diceButton.classList.remove('btn--roll--phone');
        holdButton.classList.remove('btn--hold--phone');
        dice.classList.remove('dice--phone');
        diceButton.textContent = diceButtonOrginalText;
        holdButton.textContent = holdButtonOrginalText;

    }
}


mediaQuery1Func(mediaQuery1)
mediaQuery1.addListener(mediaQuery1Func)