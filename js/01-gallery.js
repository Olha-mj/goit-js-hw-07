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

function closeEscape(event) {
    if (event.key === 'Escape' && instance) {
        instance.close();
        window.removeEventListener('keydown', closeEscape);
    }
}

function onClick(event) {
    event.preventDefault();

    if (event.target.tagName !== 'IMG') {
        return;
    }

    const imgSource = event.target.dataset.source;

    instance = basicLightbox.create(`
        <img src="${imgSource}" width="800" height="600">
    `, {
        onShow: () => {
            window.addEventListener('keydown', closeEscape);
        },
        onClose: () => {
            window.removeEventListener('keydown', closeEscape);
        }
    });

    instance.show();
}

galleryList.addEventListener('click', onClick);



