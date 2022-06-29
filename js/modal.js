import {simylarData} from './data.js';

const modalWindow = document.querySelector('.big-picture');
modalWindow.classList.remove('hidden');

const bigImgWrapper = modalWindow.querySelector('.big-picture__img');

const simylarModalPhoto = simylarData();

simylarModalPhoto.forEach(({url, likes, comments}) => {
  const bigImg = bigImgWrapper.children[0];
  bigImg.src = url;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = likes;

  const commentCount = document.querySelector('.comments-count');
  commentCount.textContent = comments.length;
});

const commentItem = document.querySelector('.social__comment').cloneNode(true);

console.log(commentItem);

// const commentList = document.createDocumentFragment();

// function createCommentElement ({description}) {
//   const socailItem = document.querySelector('.social__comment');
//   const newItem = socailItem.slice;

//   const textDescription = document.querySelector('.social__caption');
//   textDescription.textContent = description;
// }

function openModalWindow () {
  // const likesCounter = document.querySelector('.social__comment-count');
  // likesCounter.classList.add('hidden');

  const uploadComment = document.querySelector('.comments-loader');
  uploadComment.classList.add('hidden');

  const tegBody = document.querySelector('body');
  tegBody.classList.add('modal-open');
}

openModalWindow();

function closeModalWindow () {
  const closeButton = document.querySelector('#picture-cancel');
  closeButton.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
  });
}

closeModalWindow();
