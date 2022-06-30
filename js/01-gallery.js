import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const pictures = [];
const gallery = document.querySelector('.gallery');
const options = {
    onClose: (instance) => {
        document.removeEventListener('keyup', escapeListener)
    },
    onShow: (instance) => {
        document.addEventListener('keyup', escapeListener);
    }
}
let modal;

galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('gallery__item');
    
    const link = document.createElement('a');

    link.classList.add('gallery__link');
    link.href = item.original;

    const picture = document.createElement('img');
    picture.src = item.preview;
    picture.alt = item.description;
    picture.classList.add('gallery__image');
    picture.width = '340';
    picture.dataset.sourse = item.original;

    link.append(picture);
    div.append(link);

    pictures.push(div);
})
gallery.append(...pictures);


gallery.addEventListener('click', galleryClicker);

function galleryClicker(event, ){
    const target = event.target
    event.preventDefault();
    if(target.classList.contains('gallery__image')){
        modal = basicLightbox.create(`<img src="${target.dataset.sourse}" width="1280">`, options);
        modal.show();
    }
}

function escapeListener(event){
    if(event.key === "Escape"){
        modal.close();
    }
}
