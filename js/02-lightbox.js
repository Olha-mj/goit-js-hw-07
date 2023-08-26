import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, description, original }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img 
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`);

  

galleryList.insertAdjacentHTML('beforeend', markup.join(''));

galleryList.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

}

const lightbox = new SimpleLightbox('.gallery a', 
{sourceAttr: 'href', captions: true, captionsData: 'alt', captionDelay: 250});
