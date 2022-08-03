import { openModalWindow } from './big-photo.js';
import { getInvsibleComment, countvisibleComment, getVisibleComment } from './comment.js';
// import { debounce } from './util.js';

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

// const RERENDER_DELAY = 500;

function appendPhoto () {
  simylarListElement.appendChild(miniatureList);
}

// function setDebounce (cb) {
//   cb();
// }

function comparePhoto(data) {
  formFilter.addEventListener('click', (evt) => {
    const photoElements = document.querySelectorAll('.picture');

    if (evt.target.id === 'filter-default') {
      for (let i = 0; i <= photoElements.length; i++) {
        if (photoElements[i]) {
          photoElements[i].remove();
        }
      }

      data
        .slice()
        .forEach(createSimilarPhoto);

      appendPhoto ();
    }

    if (evt.target.id === 'filter-random') {
      for (let i = 0; i <= photoElements.length; i++) {
        if (photoElements[i]) {
          photoElements[i].remove();
        }
      }

      data
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .forEach(createSimilarPhoto);

      appendPhoto ();
    }

    if (evt.target.id === 'filter-discussed') {
      for (let i = 0; i <= photoElements.length; i++) {
        if (photoElements[i]) {
          photoElements[i].remove();
        }
      }

      data
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .forEach(createSimilarPhoto);

      appendPhoto ();
    }
  });
}

export { renderSimilarList };
