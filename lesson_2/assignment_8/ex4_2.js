let characterLimit = 180;
let textArea = document.querySelector('textarea');
let counter = document.querySelector('.counter');
let button = document.querySelector('button');
counter.textContent = `${characterLimit} characters remaining`

document.addEventListener('keyup', () => {
  let currentCount = Number(textArea.value.length);
  counter.textContent = `${characterLimit - currentCount} characters remaining`;

  if (characterLimit - currentCount < 0) {
    textArea.classList.add('invalid');
    button.disabled = true;
  } else {
    textArea.classList.remove('invalid');
    button.disabled = false
  }
})