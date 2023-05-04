'use stirct';
const screenSizes = ["max-width:46.43em", "max-width:44.12em"];

const mediaQuery0 = window.matchMedia(`(${screenSizes[0]})`);
const mediaQuery1 = window.matchMedia(`(${screenSizes[1]})`);

const nameEl = document.querySelectorAll('.name');
const currentLabel = document.querySelectorAll('.current-label');
const diceButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const diceButtonOrginalText = document.querySelector('.btn--roll').textContent;
const iconDice = document.createElement("ion-icon");
const iconHold = document.createElement("ion-icon");
const holdButton = document.querySelector('.btn--hold');
const holdButtonOrginalText = document.querySelector('.btn--hold').textContent;



const mediaQuery0Func = function (querry) {
    if (querry.matches) {
        nameEl.forEach((element) => {
            function modifyFontSize() {
                element.style.fontSize = "3.6rem";
            }
            modifyFontSize();
        });

    } else {
        nameEl.forEach((element) => {
            function resetFontSize() {
                element.style.fontSize = "";
            }
            resetFontSize();
        });
    }
}

const mediaQuery1Func = function (querry) {
    if (querry.matches) {
        nameEl.forEach((element) => {
            function modifyFontSize() {
                element.style.fontSize = "2.4rem";
            }
            modifyFontSize();
        });

        document.querySelector('.main').classList.add('phone--mode--main');
        document.body.classList.add('phone--mode--body')
        iconDice.setAttribute("name", "dice");
        iconHold.setAttribute("name", "pause-circle");
        diceButton.textContent = "";
        holdButton.textContent = "";
        diceButton.appendChild(iconDice);
        holdButton.appendChild(iconHold);
        diceButton.classList.add('btn--roll--phone');
        holdButton.classList.add('btn--hold--phone');
        newButton.classList.add('btn--new--phone');
        dice.classList.add('dice--phone');
        iconDice.classList.add('btn--icon');
        iconHold.classList.add('btn--icon');
    } else {
        nameEl.forEach((element) => {
            function resetFontSize() {
                element.style.fontSize = "3.6rem";
            }
            resetFontSize();
        });

        document.querySelector('.main').classList.remove('phone--mode--main');
        document.body.classList.remove('phone--mode--body')
        iconHold.remove();
        iconDice.remove()
        diceButton.classList.remove('btn--roll--phone');
        holdButton.classList.remove('btn--hold--phone');
        newButton.classList.remove('btn--new--phone');
        dice.classList.remove('dice--phone');
        diceButton.textContent = diceButtonOrginalText;
        holdButton.textContent = holdButtonOrginalText;

    }
}
mediaQuery0Func(mediaQuery0)
mediaQuery1Func(mediaQuery1)

mediaQuery0.addListener(mediaQuery0Func)
mediaQuery1.addListener(mediaQuery1Func)