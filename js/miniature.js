import { openModalWindow } from './big-photo.js';
import { getInvsibleComment, countvisibleComment, getVisibleComment } from './comment.js';

const simylarListElement = document.querySelector('.pictures');
const simylarPhotoTempalate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// const similarPhoto = simylarData();
const miniatureList = document.createDocumentFragment();

// Создание миниатюры
const filterPhoto = document.querySelector('.img-filters');
const formFilter = document.querySelector('.img-filters__form');

function createSimilarPhoto({ url, likes, comments, description }) {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;

  simylarElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalWindow(url, likes, comments, description);
    getInvsibleComment();
    countvisibleComment();
    getVisibleComment();
  });

  miniatureList.appendChild(simylarElement);
}

const renderSimilarList = (similarPhoto) => {
  similarPhoto
    .forEach(createSimilarPhoto);

  filterPhoto.classList.remove('img-filters--inactive');

  simylarListElement.appendChild(miniatureList);
  comparePhoto(similarPhoto);
};

function comparePhoto(similarPhoto) {
  formFilter.addEventListener('click', (evt) => {
    if (evt.target.id === 'filter-default') {
      simylarListElement.innerHTML = '';
      similarPhoto
        .slice()
        .forEach(createSimilarPhoto);
      simylarListElement.appendChild(miniatureList);
    }

    if (evt.target.id === 'filter-random') {
      simylarListElement.innerHTML = '';
      similarPhoto
        .slice()
        .slice(0, 10)
        .forEach(createSimilarPhoto);
      simylarListElement.appendChild(miniatureList);
    }

    // if (evt.target.id === 'filter-discussed') {

    // }
  });
}

export { renderSimilarList };
