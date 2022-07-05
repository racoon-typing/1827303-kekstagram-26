import {simylarData} from './data.js';

const simylarListElement = document.querySelector('.pictures');
const simylarPhotoTempalate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const simylarPhoto = simylarData();

const miniatureList = document.createDocumentFragment();

function createSimilarPhoto ({url, likes, comments}) {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;

  miniatureList.appendChild(simylarElement);
}

simylarPhoto.forEach(createSimilarPhoto);

simylarListElement.appendChild(miniatureList);
