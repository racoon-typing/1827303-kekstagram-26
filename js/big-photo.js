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

  function clickHandlerByEsc (e) {
    if (e.key === 'Escape') {
      modalWindow.classList.add('hidden');
    }
  }

  if (modalWindow.classList.contains('hidden') === true) {
    document.removeEventListener('keydown', clickHandlerByEsc);
  }

  document.addEventListener('keydown', clickHandlerByEsc);
}

closeModalWindow ();

// Удаляет комментарии
// const commentList = document.querySelector('.social__comments');
// const commentItem = document.querySelector('.social__comment');


// Добавляет комментарии
const commentList = document.querySelector('.social__comments');
const tempalteCommentItem = document.querySelector('#comment-item')
  .content
  .querySelector('.social__comment');

const createComment = simylarData();

// Руслан
// function creteCommentItems (comment) {
//   const itemsContainer = [];

//   for (let i = 0; i < comment.length; i++) {
//     const similarComment = tempalteCommentItem.cloneNode(true);

//     similarComment.querySelector('.social__picture').src = comment[i].avatar;
//     similarComment.querySelector('.social__picture').alt = comment[i].name;
//     similarComment.querySelector('.social__text').textContent = comment[i].message;

//     itemsContainer.push(similarComment);
//   }
//   return itemsContainer;
// }

// const newCommentList = creteCommentItems(createComment.comments);
// commentList.appendChild(newCommentList);

function creteCommentItems (comment) {
  const similarComment = tempalteCommentItem.cloneNode(true);

  // similarComment.querySelector('.social__picture').src = comment.avatar;
  similarComment.querySelector('.social__picture').alt = comment.name;
  similarComment.querySelector('.social__text').textContent = comment.message;

  commentList.appendChild(similarComment);
}

creteCommentItems(createComment.comments);






// console.log(createComment.comments.length);

// createComment.forEach(({comments}) => {
//   comments.forEach(({avatar, name, message}) => {
//     for (let i = 0; i < comments.length; i++) {
//       const similarComment = tempalteCommentItem.cloneNode(true);

//       similarComment.querySelector('.social__picture').src = avatar;
//       similarComment.querySelector('.social__picture').alt = name;
//       similarComment.querySelector('.social__text').textContent = message;

//       addCommentList.appendChild(similarComment);
//     }
//   });
// });

// commentList.appendChild(addCommentList);


// Добавляет описание для BigPhoto
const commentDescription = document.querySelector('.social__caption');

const createDescription = simylarData();

createDescription.forEach(({description}) => {
  commentDescription.textContent = description;
});

