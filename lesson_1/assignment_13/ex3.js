let tocNumbers = document.querySelectorAll('.tocnumber');
let tocNumbersArr = Array.prototype.slice.call(tocNumbers);

tocNumbersArr.forEach(num => {
  if(Number(num.textContent.trim()) % 2 === 1 ) {
    num.parentNode.style.color = 'green';
  }
})

//LS solution
let links = document.querySelectorAll('.toc a');

for (let index = 0; index < links.length; index += 1) {
  if (index % 2 === 1) {
    links[index].style.color = 'green';
  }
}
