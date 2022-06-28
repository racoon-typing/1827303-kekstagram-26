import {simylarData} from './data.js';

const modalWindow = document.querySelector('.big-picture');
modalWindow.classList.remove('hidden');

const bigImgWrapper = modalWindow.querySelector('.big-picture__img');

const simylarModalPhoto = simylarData();
const modalList = document.createDocumentFragment();

simylarModalPhoto.forEach(({url, likes, comments}) => {
  const bigImg = bigImgWrapper.children[0];
  bigImg.src = url;



  // const simylarElement = simylarPhotoTempalate.cloneNode(true);
  // simylarElement.querySelector('.picture__img').src = url;
  // simylarElement.querySelector('.picture__likes').textContent = likes;
  // simylarElement.querySelector('.picture__comments').textContent = comments;

  modalList.appendChild(simylarElement);
});

