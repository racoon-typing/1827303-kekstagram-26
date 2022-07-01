import {simylarData} from './data.js';

const modalWindow = document.querySelector('.big-picture');
const tegBody = document.querySelector('body');
const commentDescription = document.querySelector('.social__caption');

const buttonClose = document.querySelector('#picture-cancel');
buttonClose.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  tegBody.classList.remove('modal-open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalWindow.classList.add('hidden');
  }
});

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






// const bigImgWrapper = modalWindow.querySelector('.big-picture__img');

// const simylarModalPhoto = simylarData();

// const commentItem = document.querySelector('.social__comment').cloneNode(true);


// simylarModalPhoto.forEach(({url, likes, comments}) => {
//   const bigImg = bigImgWrapper.children[0];
//   bigImg.src = url;

//   const likesCount = document.querySelector('.likes-count');
//   likesCount.textContent = likes;

//   const commentCount = document.querySelector('.comments-count');
//   commentCount.textContent = comments.length;

//   // let i = 0;
  // while (i < comments.length) {
  //   commentList.appendChild(commentItem);
  //   i++;
  // }
// });

// const commentList = document.createDocumentFragment();



// function createNewComment () {
//   const commentItem = document.querySelector('.social__comment').cloneNode(true);

//   // simylarCommentItem.forEach({comments} => {
//   //   for (let i = 0; i < comments.length; i++) {
//   //     commentList.appendChild(commentItem);

//   //     commentItem.src = comments.avatar;
//   //     commentItem.alt = comments.name;

//   //     const textCommentItem = commentItem.querySelector('.social__text');
//   //     textCommentItem.textContent = comments.message;
//   //   }
//   });
// }

// createNewComment ();


// function createCommentElement ({description}) {
//   const socailItem = document.querySelector('.social__comment');
//   const newItem = socailItem.slice;

//   const textDescription = document.querySelector('.social__caption');
//   textDescription.textContent = description;
// }



// function openModalWindow () {
//   // const likesCounter = document.querySelector('.social__comment-count');
//   // likesCounter.classList.add('hidden');

//   const uploadComment = document.querySelector('.comments-loader');
//   uploadComment.classList.add('hidden');

//   const tegBody = document.querySelector('body');
//   tegBody.classList.add('modal-open');
// }

// openModalWindow();

// function closeModalWindow () {
//   const closeButton = document.querySelector('#picture-cancel');
//   closeButton.addEventListener('click', () => {
//     modalWindow.classList.add('hidden');
//   });
// }

// closeModalWindow();
