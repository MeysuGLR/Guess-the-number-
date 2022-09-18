'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
//Functions to manipulate elements
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const backgroundColor = function (colorReference) {
  document.querySelector(`body`).style.backgroundColor = colorReference;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector(`.number`).textContent = secretNumber;
};
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When no input/number
  if (!guess) {
    displayMessage(`😤That's not a number`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🤗 Congrats, you got the right number!!!`);
    displaySecretNumber(secretNumber);

    backgroundColor(`#60b347`);
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `🙄Too high!` : `😞 Too low!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`😈 You lost the game!`);
      displayScore(0);
    }
  }
});

// Play again
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  displayScore(score);
  displaySecretNumber(`?`);
  document.querySelector(`.guess`).value = ``;
  backgroundColor(`#222`);
  document.querySelector(`.number`).style.width = `15rem`;
});
