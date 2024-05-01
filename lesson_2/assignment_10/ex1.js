document.querySelector('main').addEventListener('click', event => {
  alert(event.currentTarget.tagName);
});

document.querySelector('div').addEventListener('click', event => {
  alert(event.currentTarget.tagName);
});