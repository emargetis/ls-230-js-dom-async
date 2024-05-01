let paragraphs = document.getElementsByTagName("P");

[...paragraphs].forEach(paragraph => {
  console.log(paragraph.textContent.trim().split(/\s/)[0]);
})