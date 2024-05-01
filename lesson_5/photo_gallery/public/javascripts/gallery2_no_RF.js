document.addEventListener('DOMContentLoaded', ()=> {
  let templates = {};
  let photos;

  document.querySelectorAll('[type="text/x-handlebars"]').forEach(template => {
    templates[template.id] = Handlebars.compile(template.innerHTML);
  });
  
  document.querySelectorAll('[data-type="partial"]').forEach(partial => {
    Handlebars.registerPartial(partial.id, partial.innerHTML);
  });
  
  Handlebars.registerHelper('ifFirst', function (index, options) {
    if(index === 0){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
    
  })
  
  function renderPhotos() {
    let slides = document.querySelector('#slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }
  
  fetch('/photos')
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0]);
      getComments(photos[0].id)
    });
  
  function renderPhotoInformation(photo) {
    let header = document.querySelector('section > header');
    header.innerHTML = "";
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }
  
  function getComments(id) {
    let commentSection = document.querySelector('#comments ul');
    commentSection.innerHTML = "";
    
    fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(comment_json => {
        commentSection.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: comment_json}));
      });
  }
  
  let nextPhotoElement = document.querySelector('.next');
  nextPhotoElement.addEventListener('click', (e) => {
    e.preventDefault();
    showNextPhoto();
  });
  
  async function showNextPhoto() {
    let currentPhotoElement = document.querySelector('.visible');
    let currentPhotoId = +currentPhotoElement.dataset.id;
    let currentPhotoPhotosIdx = photos.findIndex(photo => photo.id === currentPhotoId);
    
    let nextPhoto = photos[currentPhotoPhotosIdx + 1] || photos[0];
    let nextPhotoId = nextPhoto.id;
    let nextPhotoElement = document.querySelector(`[data-id="${nextPhotoId}"]`);
    
    await getComments(nextPhotoId);
    renderPhotoInformation(nextPhoto);
    
    hidePhoto(currentPhotoElement);
    displayPhoto(nextPhotoElement);
  }
  
  let previousPhotoElement = document.querySelector('.prev');
  previousPhotoElement.addEventListener('click', (e) => {
    e.preventDefault();
    showPreviousPhoto();
  });
  
  async function showPreviousPhoto() {
    let currentPhotoElement = document.querySelector('.visible');
    let currentPhotoId = +currentPhotoElement.dataset.id;
    let currentPhotoPhotosIdx = photos.findIndex(photo => photo.id === currentPhotoId);
    
    let prevPhoto = photos[currentPhotoPhotosIdx - 1] || photos[photos.length - 1];
    let prevPhotoId = prevPhoto.id;
    let prevPhotoElement = document.querySelector(`[data-id="${prevPhotoId}"]`);

    await getComments(prevPhotoId);
    renderPhotoInformation(prevPhoto);
    
    hidePhoto(currentPhotoElement);
    displayPhoto(prevPhotoElement);
  }
  
  function hidePhoto(currentPhoto) {
    currentPhoto.classList.replace('visible', 'hidden');
  }
  
  function displayPhoto(nextPhoto) {
    nextPhoto.classList.replace('hidden', 'visible');
  }
  
})