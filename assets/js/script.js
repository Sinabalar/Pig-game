'use stirct';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const mainScore0El = document.getElementById('score--0');
const mainScore1El = document.getElementById('score--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScorePlayer0 = document.getElementById('current--0');
const currentScorePlayer1 = document.getElementById('current--1');

let mainScore, currentScore, activePlayer, isPlaying;

const init = function () {
    mainScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;

    currentScorePlayer0.textContent = 0;
    currentScorePlayer1.textContent = 0;
    mainScore0El.textContent = 0;
    mainScore1El.textContent = 0;

    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    btnRoll.classList.remove('hidden', 'btn--finished--game');
    btnHold.classList.remove('hidden', 'btn--finished--game');
    btnNew.classList.remove('btn--new--finished--game');
    dice.classList.add('hidden');

};
init();
//dice rolling algoritm

const randomRangeNum = function (max = 6, min = 1) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}

const swichPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    dice.classList.add('dice--player--changed');
};

const gameIsFinished = function () {
    btnRoll.classList.add('btn--finished--game', 'hidden');
    btnHold.classList.add('btn--finished--game', 'hidden');
    btnNew.classList.add('btn--new--finished--game');
    dice.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
};


btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        const randomNum = Math.trunc(Math.random() * 6) + 1;
        let diceNum = randomRangeNum();
        switch (randomNum) {
            case 1:
                diceNum = randomRangeNum(6, 1);
                break;
            case 2:
                diceNum = randomRangeNum(2, 1);
                break;
            case 3:
                diceNum = randomRangeNum(3, 1);
                break;
            case 4:
                diceNum = randomRangeNum(4, 1);
                break;
            case 5:
                diceNum = randomRangeNum(5, 1);
                break;
            case 6:
                diceNum = randomRangeNum(6, 1);
                break;
        }
        dice.classList.remove('hidden');
        dice.classList.remove('dice--player--changed');
        dice.src = `assets/images/dice-${diceNum}.png`;

        if (diceNum !== 1) {
            currentScore += diceNum;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            swichPlayer();
        };
    };
});

btnHold.addEventListener('click', function () {
    if (isPlaying) {
        mainScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = mainScore[activePlayer]
        if (mainScore[activePlayer] >= 100) {
            isPlaying = false;
            gameIsFinished();
        } else {
            swichPlayer();
        };
    };
});

btnNew.addEventListener('click', init);
