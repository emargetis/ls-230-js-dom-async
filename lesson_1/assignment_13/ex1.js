let h2s = document.querySelectorAll('h2')
let h2Array = Array.prototype.slice.call(h2s);
h2Array.map(ele => {ele.textContent.split(/\s/g).length});