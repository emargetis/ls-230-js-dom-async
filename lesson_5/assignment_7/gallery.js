document.addEventListener('DOMContentLoaded', () => {
  let thumbnails = document.querySelector('ul');
  let mainImage = document.querySelector('figure > img');
  let figureList = document.querySelector('.figures').children;

  thumbnails.addEventListener('click', (e) => {
    //remove active class from allChildren
    let images = thumbnails.children;
    let indexSelected;
    let indexPrev;
    
    [...images].forEach((image, idx) => {
      if (image.firstElementChild.classList.contains('active')) {
        indexPrev = idx;
        image.firstElementChild.classList.remove('active');
      }
      
      if (image.firstElementChild === e.target) {
        indexSelected = idx;
      }
    });
    
    //place active class on correct thumnail
    event.target.classList.add('active');
    
    //remove previous selected image
    [...figureList][indexPrev].classList.replace('visible', 'hidden');
    
    //add newly selected image
    [...figureList][indexSelected].classList.replace('hidden', 'visible');
  })
})