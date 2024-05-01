//My Solution
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


function paragraphCounter(node) {
    if (node.nodeName === "P") {
      paragraphs += 1;
    }
}



let paragraphs = 0;
walk(document, paragraphCounter);
console.log(paragraphs);

//LS Solution
let count = 0;
walk(document, node => {
  if (node.nodeName === 'P') {
    count++;
  }
});

console.log(count);                              // 5