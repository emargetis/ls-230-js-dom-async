let randomWord = (function () {
  let wordArray = ['hello', 'hi'];

  return function() {
    return wordArray.splice(Math.floor(wordArray.length * Math.random()), 1)[0];
  };
})();

console.log(randomWord());
console.log(randomWord());
console.log(randomWord());