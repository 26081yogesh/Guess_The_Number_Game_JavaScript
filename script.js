let secretNumber = Math.trunc(Math.random() * 20) + 1;
let chances = 20;
let highScore = 0;

function chancesLeft() {
  chances--;
  if (chances >= 1) document.querySelector('.score').textContent = chances;
  else {
    document.querySelector('.message').textContent = 'You Lost The Game';
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  chances = 20;

  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  if (!guessValue) {
    document.querySelector('.message').textContent = 'No Number Inserted';
  } else if (guessValue === secretNumber) {
    if (Number(document.querySelector('.score').textContent) > highScore) {
      highScore = Number(document.querySelector('.score').textContent);
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guessValue > secretNumber) {
    document.querySelector('.message').textContent = 'High';
    chancesLeft();
  } else if (guessValue < secretNumber) {
    document.querySelector('.message').textContent = 'Low';
    chancesLeft();
  }
});
