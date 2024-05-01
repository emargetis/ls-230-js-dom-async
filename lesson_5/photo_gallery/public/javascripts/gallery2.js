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
      renderPhotoInformation(photos[0].id);
      getComments(photos[0].id)
      slideShow.init();
      likeAndFavoriteButtons.init();
      commentForm.init();
    })
  
  function renderPhotoInformation(idx) {
    let photo = photos.filter(function(item) {
      return item.id === idx;
    })[0];
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
  
  const slideShow = {
    showPrevPhoto: function (e) {
      e.preventDefault();
      let prev = this.currentSlide.previousElementSibling;
      if (!prev) {
        prev = this.lastSlide;
      }
      this.renderPhotoContent(prev.getAttribute("data-id"));
      this.hidePhoto(this.currentSlide);
      this.displayPhoto(prev);
      this.currentSlide = prev;
    },
    
    showNextPhoto: function (e) {
      e.preventDefault();
      let next = this.currentSlide.nextElementSibling;
      if (!next) {
        next = this.firstSlide;
      }
      this.renderPhotoContent(next.getAttribute("data-id"));
      this.hidePhoto(this.currentSlide);
      this.displayPhoto(next);
      this.currentSlide = next;
    },
    
    renderPhotoContent: function(id) {
      renderPhotoInformation(+id);
      getComments(id);
    },
    
    hidePhoto: function(currentPhoto) {
      currentPhoto.classList.replace('visible', 'hidden');
    },
  
    displayPhoto: function(nextPhoto) {
      nextPhoto.classList.replace('hidden', 'visible');
    },

    bind: function() {
      let nextButton = this.slideshow.querySelector('.next');
      nextButton.addEventListener('click', (e) => { this.showNextPhoto(e) });
      let prevButton = this.slideshow.querySelector('.prev');
      prevButton.addEventListener('click', (e) => { this.showPrevPhoto(e) });
    },
    
    init: function() {
      this.slideshow = document.querySelector('#slideshow');
      let slides = document.querySelectorAll('figure');
      this.firstSlide = slides[0];
      this.lastSlide = slides[slides.length - 1];
      this.currentSlide = this.firstSlide;
      this.bind();
    }
  };
  
  const likeAndFavoriteButtons = {
    postData: function(e) {
      e.preventDefault();
      let button = e.target;
      let buttonType = button.getAttribute("data-property");
      if (buttonType) {
        fetch(button.href, {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: 'photo_id=' + button.getAttribute('data-id'),
        })
        .then(response => response.json())
        .then(json => {
          button.textContent = button.textContent.replace(/\d+/, json.total);
          fetch('/photos')
            .then(response => response.json())
            .then(json => {
              photos = json;
            });
        });
      }
    },
    
    bind: function() {
      this.infoSection.addEventListener('click', (e) => this.postData(e))
    },
    
    init: function() {
      this.infoSection = document.querySelector("section > header");
      this.bind();
    }
  }


  const commentForm = {
    postData: function(e) {
      e.preventDefault();
      
      let formData = new URLSearchParams(new FormData(this.form)).toString();
      
      fetch(this.form.getAttribute('action'), {
        method: this.form.getAttribute('method'),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: formData,
      })
      .then(response => response.json())
      .then(json => {
        this.renderNewComment(json);
        this.resetForm();
      })
      
    },
    
    renderNewComment: function(json) {
      let commentSection = document.querySelector('#comments ul');
      commentSection.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: [json]}));
    },
    
    resetForm: function() {
      this.form.reset();
    },

    bind: function() {
      this.form.addEventListener('submit', (e) => this.postData(e));
    },
    
    init: function() {
      this.form = document.querySelector('form');
      this.bind();
    }
    
  }
})