import {simylarData} from './data.js';

const modalWindow = document.querySelector('.big-picture');
modalWindow.classList.remove('hidden');

function openModalWindow () {
  const likesCounter = document.querySelector('.social__comment-count');
  likesCounter.classList.add('hidden');

  const uploadComment = document.querySelector('.comments-loader');
  uploadComment.classList.add('hidden');

  const tegBody = document.querySelector('body');
  tegBody.classList.add('modal-open');
}

openModalWindow();

const bigImgWrapper = modalWindow.querySelector('.big-picture__img');

const simylarModalPhoto = simylarData();
const modalList = document.createDocumentFragment();

simylarModalPhoto.forEach(({url, likes, comments}) => {
  const bigImg = bigImgWrapper.children[0];
  bigImg.src = url;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = likes;

  const commentCount = document.querySelector('.comments-count');
  commentCount.textContent = comments;

  modalList.appendChild(simylarModalPhoto);
});

const commentList = document.createDocumentFragment();

function createCommentElement ({description}) {
  const socailItem = document.querySelector('.social__comment');
  const newItem = socailItem.slice;

  const textDescription = document.querySelector('.social__caption');
  textDescription.textContent = description;
}

function closeModalWindow (evt) {
  evt.preventDefault();

  const closeButton = document.querySelector('#picture-cancel');
  closeButton.addEventListener('click', function () => {
    modalWindow.classList.add('hidden');
  });
}

closeModalWindow();
