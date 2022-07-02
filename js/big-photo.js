import {simylarData} from './data.js';
import {simylarListElement} from './miniature.js';

const modalWindow = document.querySelector('.big-picture');
const commentDescription = document.querySelector('.social__caption');

const bigPhoto = document.querySelector('.big-picture__img');
const commentCount = document.querySelector('.comments-count');
const likesCount = document.querySelector('.likes-count');
const miniPhoto = document.querySelector('.picture__img');



function openModalWindow () {
  for (let i = 0; i < simylarListElement.children.length; i++) {
    simylarListElement.children[i].addEventListener('click', (evt) => {
      evt.preventDefault();

        modalWindow.classList.remove('hidden');

        bigPhoto.children[0].src = miniPhoto.src;
        commentCount.textContent = comments.length;
        likesCount.textContent = likes;
      });
    });
  }

  const likesCounter = document.querySelector('.social__comment-count');
  likesCounter.classList.add('hidden');

  const uploadComment = document.querySelector('.comments-loader');
  uploadComment.classList.add('hidden');

  const tegBody = document.querySelector('body');
  tegBody.classList.add('modal-open');
}

openModalWindow ();


//Правильно
const buttonClose = document.querySelector('#picture-cancel');
buttonClose.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  const tegBody = document.querySelector('body');
  tegBody.classList.remove('modal-open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalWindow.classList.add('hidden');
  }
});

if (modalWindow.classList.contains('hidden')) {
  document.removeEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalWindow.classList.add('hidden');
    }
  });
}


// Неправильно
const commentList = document.querySelector('.social__comments');
const tempalteCommentItem = document.querySelector('#comment-item')
  .content
  .querySelector('.social__comment');

const simylarNewComment = simylarData();

const addCommentList = document.createDocumentFragment();

simylarNewComment.forEach(({comments, description}) => {
  const simylarComment = tempalteCommentItem.cloneNode(true);
  simylarComment.querySelector('.social__picture').src = comments.avatar;
  simylarComment.querySelector('.social__picture').alt = comments.name;
  simylarComment.querySelector('.social__text').textContent = comments.message;
  commentDescription.textContent = description;

  addCommentList.appendChild(simylarComment);
});

commentList.appendChild(addCommentList);
