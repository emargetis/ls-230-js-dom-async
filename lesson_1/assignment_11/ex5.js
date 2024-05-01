let divClasses = document.getElementsByClassName("intro");

for (let outIdx = 0; outIdx < divClasses.length; outIdx += 1) {
  let paragraphs = divClasses[outIdx].getElementsByTagName("p");
  
  for (let inIdx = 0; inIdx < paragraphs.length; inIdx += 1) {
    paragraphs[inIdx].classList.add("article-text");
  }
}