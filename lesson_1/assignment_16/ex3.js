document.getElementById('toggle').onclick = function(e) {
  e.preventDefault();
  
  let noticeElement = document.getElementById('notice');
  
  if (noticeElement.getAttribute('class') === 'hidden') {
    noticeElement.setAttribute('class', 'visible');
  } else {
    noticeElement.setAttribute('class', 'hidden');
  }
};

//LS Solution

document.getElementById('toggle').onclick = e => {
  e.preventDefault();
  let notice = document.getElementById('notice');
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};