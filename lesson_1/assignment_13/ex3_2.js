document.querySelectorAll('.toc a').forEach((link, idx) => {
  if (idx % 2 === 1) {
    link.style.color = 'green';
  }
})