import {simylarData} from './data.js';
import {openModalWindow} from './big-photo.js';

const simylarListElement = document.querySelector('.pictures');
const simylarPhotoTempalate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhoto = simylarData();

const miniatureList = document.createDocumentFragment();

const buttonLoadComment = document.querySelector('.comments-loader');

function getVsibleComment (comments) {
  let commentList = document.querySelector('.social__comments').children;

  let j = 5;
  for (let i = 0; i <= commentList.length; i++) {

    if (commentList.length > 5) {
      commentList[j].classList.add('hidden');
      j++;
    }
  }

  buttonLoadComment.addEventListener('click', () => {
    console.log('click');
    commentList[j].classList.remove('hidden');
  });

  // commentList.forEach(hideComment(commentList));

  // if (commentList.length === comments.length) {
  //   uploadComment.classList.add('hidden');
  // }
}

function createSimilarPhoto ({url, likes, comments, description}) {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;

  simylarElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalWindow(url, likes, comments, description);
    getVsibleComment(comments);
  });

  miniatureList.appendChild(simylarElement);
}

similarPhoto.forEach(createSimilarPhoto);

simylarListElement.appendChild(miniatureList);
