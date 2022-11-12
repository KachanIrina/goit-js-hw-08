// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);
console.log(`hello world`)

const gallery = document.querySelector(".gallery");

const markupGallery = createImgMarkup(galleryItems);

gallery.innerHTML = markupGallery;

gallery.addEventListener(`click`, onClick);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a>
</div>
`;
}).join("");

}

function onClick (evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== `IMG`){
        return;
        }

//     const instance = SimpleLightbox.create(`
//         <img src="${evt.target.dataset.source}"
//         alt = "${evt.target.alt}"
//         width="800" height="600">`)
// instance.show()

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
        `<img src="${evt.target.dataset.source}"
        alt = "${evt.target.alt}"
        width="800" height="600">`
});

}