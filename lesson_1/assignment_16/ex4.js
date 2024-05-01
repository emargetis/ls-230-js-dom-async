document.getElementById('notice').onclick = function(e) {
  e.preventDefault();
  
  e.currentTarget.setAttribute('class', 'hidden');
};