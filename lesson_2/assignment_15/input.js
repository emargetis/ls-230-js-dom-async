document.addEventListener('DOMContentLoaded', event => {
  let textField = document.querySelector('.text-field');
  let cursorInterval;
  
  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      let contentDiv = textField.querySelector('.content');
      
      if (event.key === 'Backspace') {
        contentDiv.textContent = contentDiv.textContent.slice(0, -1);
      } else if (event.key.length === 1) {
        contentDiv.textContent += event.key;
      }
    }
  });
  
  document.addEventListener('click', event => {
    clearInterval(cursorInterval);
    cursorInterval = null;
    if (textField.classList.contains('focused')) {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });
   
})