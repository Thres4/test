'use strict';
//
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//
//strating element
score0El.textContent = 0;
score1EL.textContent = 0;
diceImage.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activeplayer = 0;
let playing = true;

const swithplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player0El.classList.toggle('.player--active');
  player1El.classList.toggle('.player--active');
};
//
//Rolling dice functionality
btnroll.addEventListener('click', function () {
  if (playing) {
    //
    //1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //

    //2.Display dice
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;
    //
    //check for 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
      current0El.textContent = currentScore;
    } else {
      // switch to next player
      swithplayer();
    }
  }
});
//
//3.check for rolled 1: if true, switch to next player
btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player score
    scores[activeplayer] += currentScore;
    //scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      playing = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('.player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
    }
    // finsh the game
    // switch to the next player
    swithplayer();
  }
});
