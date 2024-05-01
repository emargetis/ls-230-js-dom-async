let thumbCaptions = document.querySelectorAll(".thumbcaption");
let thumbCaptionsArr = Array.prototype.slice.call(thumbCaptions);

thumbCaptionsArr.map(thumb => thumb.textContent.trim());

//LS solution
let nodes = document.querySelectorAll('.thumbcaption');
let captions = [];

for (let index = 0; index < nodes.length; index += 1) {
  captions.push(nodes[index].textContent.trim());
}

console.log(captions);