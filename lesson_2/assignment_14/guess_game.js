document.addEventListener('DOMContentLoaded', event => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let displayMessage = document.querySelector('p');
  let newGameLink = document.querySelector('a');
  let guessButton = document.querySelector('input[type="submit"]');
  let answer;
  let guesses;
  
  function newGame() {
    answer = Math.ceil(Math.random() * 100);
    guesses = 0;
    displayMessage.textContent = 'Please guess a number between 1 and 100';
  }
  
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    
    let guess = parseInt(input.value, 10);
    let message;
    
    if (isNaN(guess)) {
      message = 'Please enter a valid integer';
    } else {
      guesses += 1;
    }
    
    if (guess === answer) {
      message = 'You got it!';
      guessButton.disabled = true;
      guessButton.style.background = 'gray';
      guessButton.style['box-shadow'] = 'none';
    } else if(guess > answer) {
      message = `The answer is lower than ${String(guess)}`;
    } else if (guess < answer) {
      message = `The answer is higher than ${String(guess)}`;
    }

    displayMessage.textContent = message;
  });
  
  
  newGameLink.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });
  
  newGame();
});