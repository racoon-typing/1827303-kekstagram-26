import {simylarData} from './data.js';

const listElement = document.querySelectorAll('.picture');
const modalWindow = document.querySelector('.big-picture');
const commentCount = document.querySelector('.comments-count');
const bigPhoto = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');

// Открывает модальное окно
function openModalWindow () {
  for (let i = 0; i < listElement.length; i++) {
    listElement[i].addEventListener('click', (evt) => {
      evt.preventDefault();

      modalWindow.classList.remove('hidden');

      bigPhoto.children[0].src = listElement[i].children[0].src;
      commentCount.textContent = listElement[i].querySelector('.picture__comments').textContent;
      likesCount.textContent = listElement[i].querySelector('.picture__likes').textContent;

      const likesCounter = document.querySelector('.social__comment-count');
      likesCounter.classList.add('hidden');

      const uploadComment = document.querySelector('.comments-loader');
      uploadComment.classList.add('hidden');

      const tegBody = document.querySelector('body');
      tegBody.classList.add('modal-open');
    });
  }
}

openModalWindow ();

// Закрывает модальное окно
function closeModalWindow () {
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
}

closeModalWindow ();

// Удаляет комментарии
const commentList = document.querySelector('.social__comments');
// const commentItem = document.querySelector('.social__comment');

// for (let i = 0; i < commentList.children.length; i++) {
//   commentItem.remove();
// }

// let value = 0;

// while (value < commentList.children.length) {
//   value++;
//   commentItem.remove();
// }

// Добавляет комментарии
const tempalteCommentItem = document.querySelector('#comment-item')
  .content
  .querySelector('.social__comment');

const createCommnet = simylarData();

const addCommentList = document.createDocumentFragment();

// Руслан

createCommnet.forEach(({comments}) => {
  for (let i = 0; i < comments.length; i++) {
    comments.forEach(({avatar, name, message}) => {
      const similarComment = tempalteCommentItem.cloneNode(true);

      similarComment.querySelector('.social__picture').src = avatar;
      similarComment.querySelector('.social__picture').alt = name;
      similarComment.querySelector('.social__text').textContent = message;

      addCommentList.appendChild(similarComment);
    });
  }
});

commentList.appendChild(addCommentList);


// Добавляет описание для BigPhoto
const commentDescription = document.querySelector('.social__caption');

const createDescription = simylarData();

createDescription.forEach(({description}) => {
  commentDescription.textContent = description;
});




// Мой вариант
// simylarNewComment.forEach(({comments, description}) => {
//   const simylarComment = tempalteCommentItem.cloneNode(true);

//   simylarComment.querySelector('.social__picture').src = comments.avatar;
//   simylarComment.querySelector('.social__picture').alt = comments.name;
//   simylarComment.querySelector('.social__text').textContent = comments.message;


//   commentDescription.textContent = description;

//   addCommentList.appendChild(simylarComment);
// });

// commentList.appendChild(addCommentList);
