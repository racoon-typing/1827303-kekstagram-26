import { simylarData } from './data.js';

const listElement = document.querySelectorAll('.picture');
const modalWindow = document.querySelector('.big-picture');
const commentCount = document.querySelector('.comments-count');
const bigPhoto = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentDescription = document.querySelector('.social__caption');

const likesCounter = document.querySelector('.social__comment-count');
likesCounter.classList.add('hidden');

const uploadComment = document.querySelector('.comments-loader');
uploadComment.classList.add('hidden');



// Открывает модальное окно
function openModalWindow({ url, description, likes, comments }) {

  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

    bigPhoto.src = url;
  commentCount.textContent = comments.length;
  likesCount.textContent = likes;
  commentDescription.textContent = description;
}

// Удаляет комментарии
const commentListItem = document.querySelector('.social__comments');



const tempalteCommentItem = document.querySelector('#comment-item')
  .content
  .querySelector('.social__comment');


createNewComment.forEach(({ comments }) => {
  comments.forEach(({ avatar, name, message }) => {
    const similarComment = tempalteCommentItem.cloneNode(true);

    similarComment.querySelector('.social__picture').src = avatar;
    similarComment.querySelector('.social__picture').alt = name;
    similarComment.querySelector('.social__text').textContent = message;

    commentListItem.appendChild(similarComment);
  });
});


  });

}

openModalWindow();

// Закрывает модальное окно
function closeModalWindow() {
  const buttonClose = document.querySelector('#picture-cancel');
  buttonClose.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    const tegBody = document.querySelector('body');
    tegBody.classList.remove('modal-open');
  });

  function clickHandlerByEsc(e) {
    if (e.key === 'Escape') {
      modalWindow.classList.add('hidden');
    }
  }

  if (modalWindow.classList.contains('hidden') === true) {
    document.removeEventListener('keydown', clickHandlerByEsc);
  }

  document.addEventListener('keydown', clickHandlerByEsc);
}

closeModalWindow();


