function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementsByTagName(tagName) {
  let matches = [];
  let nodes = document.body.childNodes;

  for (let index = 0; index < nodes.length; index += 1) {
    if (nodes[index].tagName === tagName) {
      matches.push(nodes[index]);
    }
  }

  return matches;
}

function addClassToElements(elementArr, className) {
  elementArr.forEach(node => elementArr.classList.add(className));
}

addClassToElements(getElementsByTagName("P"), "article-text");


//LS Solution
function getElementsByTagName(tagName) {
  let matches = [];

  walk(document.body, (node) => {
    if (node.nodeName.toLowerCase() === tagName) {
      matches.push(node);
    }
  });

  return matches;
}

getElementsByTagName("p").forEach((paragraph) =>
  paragraph.classList.add("article-text")
);