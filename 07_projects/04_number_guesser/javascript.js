let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remainingGuesses');
const LowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  // check availability to play game.
  submit.addEventListener('click', function (e) {
    // add eventlistener for click on the input field.
    e.preventDefault(); // prevent from sending values to a server
    const guess = parseInt(userInput.value); // selecting and holding input value in a variable after converting into int.
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // check user input for (NaN ; < 1 ; > 100).
  if (isNaN(guess)) {
    alert(`Please enter a valid number.`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess); // push the guess number into prevguess array
    if (numGuess === 11) {
      updateGuess(guess);
      displayMessage(`Game Over!!! Random number was ${randomNumber}`);
      endGame();
    } else {
      updateGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // checks if the user input "guess" is equal, low or high from random
  if (guess === randomNumber) {
    displayMessage(`! You Guessed It Right !`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooooo hight`);
  }
}

function updateGuess(guess) {
  // clean values for next input + update guess slot & remaining guesses
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // just used to display a message in the 'p' tag element when called.
  LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // to reset the game
  userInput.value = ''; // clean input field
  userInput.setAttribute('disabled', ''); // set 'disabled' attribute to disable the input field.
  p.classList.add('button'); // adds class = "button" into "p" element
  p.innerHTML = '<h2 id = "newGame">Start new game</h2>';
  startOver.appendChild(p); // adds the new "p" element in ".resultParas" div.
  playGame = false;
  newGame();
}

function newGame() {
  // resets every value, attributes and elements
  const newGameButton = document.querySelector('#newGame'); // add eventlistener on the "start new game" button that we created
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
