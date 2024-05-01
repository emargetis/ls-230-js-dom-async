document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');
  let xAxis = String(event.clientX);
  let yAxis = String(event.clientY);
  
  x.style.left = xAxis + 'px';
  x.style.top = yAxis + 'px';
})

document.addEventListener('keydown', event => {
  let xHor = document.querySelector('.horizontal');
  let xVer = document.querySelector('.vertical');
  let key = event.key;
  
  switch(key.toLowerCase()) {
    case ('b'):
      xHor.style.background = 'blue';
      xVer.style.background = 'blue';
      break;
    case ('g'):
      xHor.style.background = 'green';
      xVer.style.background = 'green';
      break;
    case ('r'):
      xHor.style.background = 'red';
      xVer.style.background = 'red';
      break;
    default:
      xHor.style.background = 'black';
      xVer.style.background = 'black';
  }
})

//LS Solution
document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');
  x.style.left = event.clientX.toString() + 'px';
  x.style.top = event.clientY.toString() + 'px';
});

document.addEventListener('keyup', event => {
  let key = event.key;
  let color;

  if (key === 'r') {
    color = 'red';
  } else if (key === 'g') {
    color = 'green';
  } else if (key === 'b') {
    color = 'blue';
  }

  if (color) {
    let x = document.querySelector('.x');
    for (let index = 0; index < x.children.length; index += 1) {
      var child = x.children[index];
      child.style.background = color;
    }
  }
});