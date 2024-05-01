document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.ceil(Math.random() * 100);
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let messageElement = document.querySelector('p');
  let newGameLink = document.querySelector('a');
  let guessButton = document.querySelector('[type="submit"]');
  let guesses;
  let message;
  
  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    messageElement.textContent = 'Guess a number from 1 to 100, inclusive';
    guessButton.disabled = false;
    guessButton.style.background = "linear-gradient(to bottom, #CC183E 0%, #780E24 100%)";
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (input.value.search(/\D/) !== -1) {
      messageElement.textContent = "Please enter a valid number";
      return;
    }
    
    let guess = parseInt(input.value, 10);
    guesses += 1;
    
    if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else if (guess < answer) {
      message = `My number is higher than ${guess}`;
    } else {
      guessButton.disabled = true;
      guessButton.style.background = "gray";
      message = `You got it! My number is ${answer} and it took you ${guesses} guesses.`;
    }
    
    messageElement.textContent = message;
  });
  
  newGameLink.addEventListener('click', (e) => {
    e.preventDefault();
    newGame();
  });
  
  newGame();
  
})