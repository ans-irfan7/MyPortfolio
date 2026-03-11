const min = 1;
const max = 100;
let randomNumber = generateRandomNumber();
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

function generateRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

guessBtn.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < min || userGuess > max) {
    message.textContent = `⚠️ Please enter a number between ${min} and ${max}`;
    message.style.color = 'orange';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = 'green';
    attemptsDisplay.textContent = `You guessed it in ${attempts} attempts.`;
    guessBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "red";
  }

  guessInput.value = '';
  guessInput.focus();
});

resetBtn.addEventListener('click', () => {
  randomNumber = generateRandomNumber();
  attempts = 0;
  message.textContent = '';
  attemptsDisplay.textContent = '';
  guessBtn.disabled = false;
  guessInput.value = '';
  guessInput.focus();
});
