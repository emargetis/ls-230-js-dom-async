let toggleLink = document.querySelector('#toggle');
let notice = document.querySelector('#notice');
toggleLink.onclick = function (e) {
  e.preventDefault();
  notice.classList.toggle('hidden');
  notice.classList.toggle('visible');
}

notice.onclick = function (e) {
  e.preventDefault();
  e.target.classList.toggle('hidden');
  e.target.classList.toggle('visible');
}