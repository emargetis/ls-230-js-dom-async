document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let firstNumber = Number(document.querySelector('#first-number').value);
    let secondNumber = Number(document.querySelector('#second-number').value);
    let operator = document.querySelector('#operator').value;
    
    let finalValue;
    
    if (operator === '+') {
      finalValue = firstNumber + secondNumber;
    } else if (operator === '-') {
      finalValue = firstNumber - secondNumber;
    } else if (operator === '/') {
      finalValue = firstNumber / secondNumber;
    }  else if (operator === '*') {
      finalValue = firstNumber * secondNumber;
    }
    
    document.querySelector('#result').textContent = finalValue;
  });
})