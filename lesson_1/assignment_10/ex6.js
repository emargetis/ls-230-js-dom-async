function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function changeLinksRed(node) {
  if (node.nodeName === "A") {
    node.style.color = "red";
  }
}

walk(document, changeLinksRed);

//LS Solution
walk(document, node => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});