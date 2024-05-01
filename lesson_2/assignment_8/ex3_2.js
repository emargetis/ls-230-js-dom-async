document.addEventListener('mousemove', (e) => {
  let xCoor = e.clientX;
  let yCoor = e.clientY;
  
  let xEle = document.querySelector('.x');
  
  xEle.style.top = String(yCoor) + 'px';
  xEle.style.left = String(xCoor) + 'px';
});

document.addEventListener('keyup', (e) => {
  let keyPressed = e.key.toLowerCase();
  let xEleHor = document.querySelector('.horizontal');
  let xEleVer = document.querySelector('.vertical');

  if (keyPressed === 'b') {
    xEleHor.style.background = 'blue';
    xEleVer.style.background = 'blue';
  } else if (keyPressed === 'g') {
    xEleHor.style.background = 'green';
    xEleVer.style.background = 'green';      
  } else if (keyPressed === 'r') {
    xEleHor.style.background = 'red';
    xEleVer.style.background = 'red';      
  } else {
    xEleHor.style.background = 'black';
    xEleVer.style.background = 'black';  
  }
});