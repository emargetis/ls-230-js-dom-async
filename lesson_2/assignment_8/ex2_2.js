document.addEventListener('mousemove', (e) => {
  let xCoor = e.clientX;
  let yCoor = e.clientY;
  
  let xEle = document.querySelector('.x');
  
  xEle.style.top = String(yCoor) + 'px';
  xEle.style.left = String(xCoor) + 'px';
  
})