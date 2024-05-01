document.addEventListener('click', event => {
  let x = document.querySelector('.x');
  let xAxis = String(event.clientX);
  let yAxis = String(event.clientY);
  
  x.style.left = xAxis + 'px';
  x.style.top = yAxis + 'px';
})