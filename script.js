'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = number;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';

  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No number';
    document.querySelector('.score').textContent = score;
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'You are correct!! 🎈';

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#f4acb7';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' 📈 Too high!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' Game Over!!!';
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' 📉 Too low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' Game Over!!!';
    }
  }
});
