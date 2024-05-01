let collection = document.getElementsByTagName("p");
let collectionArray = Array.prototype.slice.call(collection);
collectionArray.forEach((paragraph) =>
  paragraph.classList.add("article-text")
);