'use strict';
//DOM manipulation
console.log(document.querySelector('.message').textContent);
//class from the html file
//This pulls the text from the .message class aka "Start guesssing..."

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
//this is for the input value in the html file as a test value
console.log(document.querySelector('.guess').value);
//theb displaying that value to the console to check during the game's progression

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//changed from const so that we could reset stuff in the again btn
let score = 20;

let highscore = 0;

//refactoring with a function to limit repetitive code
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //value is a string.
  console.log(guess, typeof guess);

  //input is empty
  if (!guess) {
    displayMsg('🚫 No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMsg('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    //changes to CSS must be in a string --even if the value is a number

    //changes for highscore check
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low';
      displayMsg(guess > secretNumber ? '📈 Too high!' : '📉 Too low');

      document.querySelector('.score').textContent = score;
      displayMsg('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

/*1) .addEventListener is a method that asks for 2 arguments: 1 is the action we are reacting to (mice click, etc) and the second is a function expression for what to do with that action once event occurs

2) document.querySelector('.guess').value is taking: 
<input type="number" class="guess" />
        <button class="btn check">Check!</button>

        's value as the button is pressed. .guess is the parent class for the btn check. btn is left out because its the type of class presented (just like the "btn again" class)
*/
/////////////////////////////////////////////////////////////////
// CODING CHALLENGE #1
/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field 
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK! 

1) Understanding the problem
-What is considered to be a reset in this games function?
-


2) Breaking down into sub-problems


*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restoring initial conditions of message, score, number, and guess input
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMsg('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  //Restore the original background (#222) color and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  //I had an error here where I put a . in front of 'body
  document.querySelector('.number').style.width = '15rem';
});
