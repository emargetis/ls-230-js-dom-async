document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector("#apples");
  const replay = document.querySelector("#replay");
  
  let randomWord = (function () {
    let wordArray = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"]; 
    return function() {
        return wordArray.splice(Math.floor(wordArray.length * Math.random()), 1)[0];
    };
  })();
  
  let Game = {
    init: function() {
      this.hideReplayLink();
      this.word = randomWord();
      if (!this.word) {
        this.displayMessage("Sorry, I've run out of words");
        return this;
      }
      this.word = this.word.split("");
      this.wordCopy = [...this.word];
      
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.allowedIncorrectGuesses = 6;
      this.correctSpaces = 0;
      
      this.createBlanks();
      this.bindEvents();
    },
    
    createBlanks() {
      let existingSpans = letters.querySelectorAll("span");
      existingSpans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      
      let newSpanHTML = `<span></span>`;
      this.word.forEach(letter => {
        letters.insertAdjacentHTML('beforeend', newSpanHTML);
      });
      
      this.spaces = document.querySelectorAll("#spaces span");
    },
    
    displayMessage(messageText) {
      message.textContent = messageText;
    },
    
    processGuess(e) {
      let guess = e.key.toLowerCase();
        
      if (this.isLowerCaseLetter(guess) && this.notAlreadyGuessed(guess)) { //check to see if the guess is valid
        this.lettersGuessed.push(guess);
        this.displayAdditionalGuess(guess);

        if (this.isCorrectGuess(guess)) {
          this.removeGuessedLetters(guess);
          this.displayCorrectGuess(guess);
          if (this.userWon()) {
            this.displayWin();
          }
        } else {
          this.incorrectGuesses += 1;
          this.removeAppleOnDisplay();
          if (this.userLost()) {
            this.displayLoss();
          }
        }
      }
    },
    
    isLowerCaseLetter(guess) {
      return guess >= 'a' && guess <= 'z';
    },
    
    notAlreadyGuessed(guess) {
      return this.lettersGuessed.indexOf(guess) === -1;
    },
    
    displayAdditionalGuess(guess) {
      let newSpanHTML = `<span>${guess}</span>`;
      guesses.insertAdjacentHTML('beforeend', newSpanHTML);
    },
    
    isCorrectGuess(guess) {
      return this.wordCopy.indexOf(guess) !== -1;
    },
    
    removeGuessedLetters(guess) {
      while (this.wordCopy.indexOf(guess) !== -1) {
        this.wordCopy.splice(this.wordCopy.indexOf(guess), 1); //FIremove multiple guesses
      }
    },
    
    displayCorrectGuess(guess) {
      this.word.forEach((letter, idx) => {
        if (letter === guess) {
          this.spaces[idx].textContent = guess;
        }
      });
    },
  
    userWon() {
      return this.wordCopy.length === 0;
    },
    
    displayWin() {
      this.displayMessage('You win!');
      document.body.classList.add('win');
      this.unbindKeypressListener();
      this.showReplayLink();
    },
    
    removeAppleOnDisplay() {
      apples.className = "";
      apples.classList.add(`guess_${this.incorrectGuesses}`);
    },
    
    userLost() {
      return this.incorrectGuesses === this.allowedIncorrectGuesses;
    },
    
    displayLoss() {
      this.displayMessage('You lose :(');
      document.body.classList.add('lose');
      this.unbindKeypressListener();
      this.showReplayLink();
    },
    
    unbindKeypressListener() {
      document.removeEventListener('keyup', this.processGuess);
    },
    
    removeGuesses() {
      while(guesses.children.length > 1) {
        guesses.lastChild.remove();
      }
    },
    
    showReplayLink() {
      replay.classList.add("visible");
    },
    
    hideReplayLink() {
      replay.classList.remove("visible");
    },
    
    resetGame() {
      apples.className = "";
      document.body.className = "";
      this.removeGuesses();
      this.displayMessage();
      this.init();
    },
    
    bindEvents() {
      document.addEventListener('keyup', (e) => this.processGuess(e));
    },
  };
  
  Game.init();
  
  replay.addEventListener('click', (e) => {
    e.preventDefault();
    Game.resetGame();
  });
});