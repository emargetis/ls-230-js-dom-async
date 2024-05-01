let paragraphs = document.getElementsByTagName("P");

[...paragraphs].forEach((paragraph, index) => {
  if (index !== 0) {
    paragraph.classList.add('stanza');
  }
})