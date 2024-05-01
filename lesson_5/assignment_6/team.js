document.addEventListener('DOMContentLoaded', () => {
  let team = document.querySelector('#team');
  let modalLayer = document.querySelector('.modal_layer');
  let modal = document.querySelector('.modal');
  
  //open modal
  team.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
      modal.classList.remove('hidden');
      modal.classList.add('visible');
      modalLayer.classList.remove('hidden');
      modalLayer.classList.add('visible');
      fillModal(e.target.dataset.block);
    }
  });
  
  //close modal
  let closeLink = document.querySelector('.close');
  function hideModal() {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
    modalLayer.classList.remove('visible');
    modalLayer.classList.add('hidden');
    clearModal();
  }

  closeLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal();
  });
  
  document.addEventListener('keyup', (e) => {
    if (e.key === "Escape") {
      hideModal();
    }
  });
  
  //could have put data directly into the html
  let dataStore = {
    kevin: {
      img: "images/img_kevin.jpg",
      alt: "Kevin Wang",
      name: "Kevin Wang",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    louis: {
      img: "images/img_louis.jpg",
      name: "Louis Burton",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    kasper: {
      img: "images/img_kasper.jpg",
      name: "Kasper Salto",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    chris: {
      img: "images/img_chris.jpg",
      name: "Chris Lee",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, 
  }
  
  function fillModal(name) {
  // <div class="modal hidden">
  //   <a href="#" class="close">Close</a>
  //   <img src="images/img_kevin.jpg" alt="Kevin Wang" />
  //   <h3>Kevin Wang</h3>
  //   <p>
  //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
  //   </p>
  // </div>
  
    //create image element
    let image = document.createElement('img');
    image.src = dataStore[name].img;
    image.alt = dataStore[name].name;
    
    //create name header
    let nameHeader = document.createElement('h3');
    nameHeader.textContent = dataStore[name].name;

    //create paragraph
    let bio = document.createElement('p');
    bio.textContent = dataStore[name].bio;
    
    //append elements to modal
    modal.appendChild(image);
    modal.appendChild(nameHeader);
    modal.appendChild(bio);
  }
  
  function clearModal () {
    let closeLink = document.querySelector('.close');
    
    while (modal.hasChildNodes()) {
      modal.firstChild.remove();
    }
    
    modal.appendChild(closeLink);
  }
  
  
})