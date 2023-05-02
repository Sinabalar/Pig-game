'use stirct';
const screenSizes = ["max-width:46.43em", "max-width:44.12em"];

const mediaQuery0 = window.matchMedia(`(${screenSizes[0]})`);
const mediaQuery1 = window.matchMedia(`(${screenSizes[1]})`);

const nameEl = document.querySelectorAll('.name');
const currentLabel = document.querySelectorAll('.current-label')

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
    } else {
        nameEl.forEach((element) => {
            function resetFontSize() {
                element.style.fontSize = "3.6rem";
            }
            resetFontSize();
        });

        document.querySelector('.main').classList.remove('phone--mode--main');
        document.body.classList.remove('phone--mode--body')
    }
}
mediaQuery0Func(mediaQuery0)
mediaQuery1Func(mediaQuery1)

mediaQuery0.addListener(mediaQuery0Func)
mediaQuery1.addListener(mediaQuery1Func)