//My Solution
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function addStanza(node) {
    if (node.nodeName === "P" 
        && node !== Array.from(node.parentNode.childNodes).filter(node => node.nodeName ==="P")[0]) {
      node.classList.add("stanza");
    }
}

walk(document, addStanza);


//LS Solution - used a trigger
let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});
