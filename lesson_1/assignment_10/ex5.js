//My Solution
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function countImages(node) {
    if (node instanceof HTMLImageElement) {
      imageCount += 1;
    }
}

function countPNGs(node) {
    if (node instanceof HTMLImageElement && node.src.match(/[.]png/g)) {
      pngCount += 1;
    }
}

let imageCount = 0;
walk(document, countImages);
console.log(imageCount);

let pngCount = 0;
walk(document, countPNGs);
console.log(pngCount);





//LS Solution - used a trigger
// let images = [];
// walk(document, node => {
//   if (node.nodeName === 'IMG') {
//     images.push(node);
//   }
// });

// console.log(images.length);                      // 48 total images

// let pngCount = images.filter(img => img.getAttribute('src').match(/png$/)).length;

// console.log(pngCount);                           // 23 images in png format