const miniPhoto = document.querySelectorAll('.picture');
const modalWindow = document.querySelector('.big-picture');
const bigPhoto = document.querySelector('.big-picture__img').children[0];


for (let i = 0; i < miniPhoto.length; i++) {
  const itemLink = miniPhoto[i];
  itemLink.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalWindow.classList.remove('hidden');

    const urlMiniPhoto = document.querySelector('.picture__img').src;
    console.log(urlMiniPhoto);

    // bigPhoto.src = urlMiniPhoto;
  });
}

const buttonClose = document.querySelector('#picture-cancel');
buttonClose.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});





// import {simylarData} from './data.js';




// const bigImgWrapper = modalWindow.querySelector('.big-picture__img');

// const simylarModalPhoto = simylarData();

// const commentList = document.querySelector('.social__comments');
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
