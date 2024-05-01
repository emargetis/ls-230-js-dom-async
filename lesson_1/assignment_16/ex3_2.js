let toggleLink = document.querySelector('#toggle');
let notice = document.querySelector('#notice');
toggleLink.onclick = function (e) {
  e.preventDefault();
  notice.classList.toggle('hidden');
  notice.classList.toggle('visible');
}