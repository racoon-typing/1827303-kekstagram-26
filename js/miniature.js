import {simylarData} from './data.js';
import {openModalWindow} from './big-photo.js';

const simylarListElement = document.querySelector('.pictures');
const simylarPhotoTempalate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniatureList = document.createDocumentFragment();

function createSimilarPhoto ({url, likes, comments, description}) {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;
  simylarElement.addEventListner('click', (evt) => {
    evt.preventDefault();

    openModalWindow(url, likes, comments, description);
  });

  miniatureList.appendChild(simylarElement);
}

simylarData.forEach(createSimilarPhoto);

simylarListElement.appendChild(miniatureList);
