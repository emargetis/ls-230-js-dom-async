document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector(".text-field");
  let content = document.querySelector(".content");
  let cursorId = null;
  
  textField.addEventListener('click', (e) => {
    e.stopPropagation();
    textField.classList.add('focused');
    cursorId = cursorId || startCursor();
  });
  
  document.addEventListener('click', (e) => {
    textField.classList.remove('focused');
    stopCursor(cursorId);
  });
  
  function startCursor() {
    return setInterval(() => {
      textField.classList.toggle("cursor");
    }, 500);
  }
  
  function stopCursor(id) {
    textField.classList.remove("cursor");
    clearInterval(id);
    cursorId = null;
  }
  
  document.addEventListener('keydown', (e) => {
    if (textField.classList.contains('focused')) {
      if (e.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1); 
      } else {
        content.textContent += e.key;
      }
    }
  });
  
})