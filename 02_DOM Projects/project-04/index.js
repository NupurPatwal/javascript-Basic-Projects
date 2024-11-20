const randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".gusses");
const remaining = document.querySelector(".lastResult");
const para = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

// playing the game
let playGame = true;

// validate guess: check krega ki value 1 or 100 k beech m h ya nahi or value is correct or not.
function validateGuess(guess) {}

// checking the guess: wheather the value is equal to the random no. agar h toh display message krdo.
function checkguess(guess) {}

// printing the messages:
function displayMessage(message) {}

// display the guess:
function displayGuess(guess) {}

function newGame() {}

function endGAme(params) {}

console.log(random);
submit.addEventListener(() => {
  if (userInput == random) {
    para.innerHTMl = `You guessed it right`;
  } else if (userInput >= random) {
    para.innerHTMl = `Lower`;
  } else {
    para.innerHTMl = `Higher`;
  }
});
