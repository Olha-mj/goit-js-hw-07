import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, description, original }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`);

  

galleryList.insertAdjacentHTML('beforeend', markup.join(''));


let instance = null; 

function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const imgSource = event.target.dataset.source;

    instance = basicLightbox.create(`
        <img src="${imgSource}" width="800" height="600">
    `);

    instance.show();

    window.addEventListener('keydown', onEsc);
}

function onEsc(event) {
    if (event.key === 'Escape' && instance) { 
        instance.close();
        window.removeEventListener('keydown', onEsc);
    }
}

galleryList.addEventListener('click', onClick);





