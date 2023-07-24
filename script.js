'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const inputNum = document.querySelector('.input');
const result = document.querySelector('.result');
const message = document.querySelector('.message');
const scoreValue = document.querySelector('.score');
const highScoreValue = document.querySelector('.highscore');

let randomNum = Math.floor(Math.random() * 20) + 1;
let highScore, win;

const check = function (text) {
  if (!win) {
    message.textContent = text;
    scoreValue.textContent--;
    if (scoreValue.textContent <= 0) {
      score = 0;
      scoreValue = score;
      message.textContent = '💥 You lost the game!';
    }
  }
};

const guess = function () {
  const input = Number(inputNum.value);
  if (!win && !input) message.textContent = '⛔ No number!';

  if (input && scoreValue.textContent > 0) {
    if (input === randomNum) {
      result.textContent = randomNum;
      document.body.style.backgroundColor = '#60b347';
      result.style.width = '30rem';
      message.textContent = '🎉 Correct Number!';
      win = true;
      if (scoreValue.textContent > highScoreValue.textContent) {
        highScore = scoreValue.textContent;
        highScoreValue.textContent = highScore;
      }
    }

    if (input < randomNum) check('📉 Too low!');
    if (input > randomNum) check('📈 Too high!');
  }
};

const again = function () {
  randomNum = Math.floor(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  scoreValue.textContent = '20';
  result.textContent = '?';
  inputNum.value = '';
  result.style.width = '18rem';
  win = false;
};

btnCheck.addEventListener('click', guess);
btnAgain.addEventListener('click', again);
