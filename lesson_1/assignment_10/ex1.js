//My Solution
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


function callbackWalk(node) {
  if (node.nodeName === "H1") {
    node.style.color = "red";
    node.style.fontSize = "48 px";
  }
}

walk(document, callbackWalk);

//LS Soution
let html = document.childNodes[1]; // skip doctype
let body = html.lastChild;         // skip head and text nodes
let heading = body.childNodes[1];  // skip text node
heading.style.color = 'red';
heading.style.fontSize = '48px';