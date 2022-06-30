import {simylarData} from './data.js';

const simylarListElement = document.querySelector('.pictures');
const simylarPhotoTempalate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const modalWindow = document.querySelector('.big-picture');
const bigPhoto = document.querySelector('.big-picture__img');

const simylarPhoto = simylarData();

const miniatureList = document.createDocumentFragment();

simylarPhoto.forEach(({url, likes, comments}) => {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;

  simylarElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalWindow.classList.remove('hidden');
    bigPhoto.children[0].src = url;
  });

  miniatureList.appendChild(simylarElement);
});

simylarListElement.appendChild(miniatureList);

