let images = document.getElementsByTagName("IMG");

console.log(images.length);

let pngCount = 0;

[...images].forEach(image => {
  if (image.getAttribute('src').includes('png')) {
    pngCount += 1;
  }
})

console.log(pngCount);