//My Solution
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let firstWords = [];

function paragraphFirstWord(node) {
    if (node.nodeName === "P") {
      let text = node.textContent;
      console.log(text);
      firstWords.push(text.match(/\b[a-zA-Z0-9]+\b/g)[0]);
    }
}

walk(document, paragraphFirstWord);

console.log(firstWords);


//LS Solution
let words = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    let text = node.firstChild.data.trim();
    let firstWord = text.split(' ')[0];
    words.push(firstWord);
  }
});

console.log(words);  // ["A", "The", "The", "Where", "And"]
