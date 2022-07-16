import {simylarData} from './data.js';
import {openModalWindow} from './big-photo.js';

const simylarListElement = document.querySelector('.pictures');
const simylarPhotoTempalate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhoto = simylarData();

const miniatureList = document.createDocumentFragment();

const buttonLoadComment = document.querySelector('.comments-loader');
let commentList = document.querySelector('.social__comments').children;
let invisibleNumber = 0;

function getInvsibleComment () {
  let j = 5;
  for (let i = 0; i <= commentList.length; i++) {

    if (commentList.length > 5) {
      commentList[j].classList.add('hidden');
      j++;
    }

    if (commentList[i].classList.contains('hidden')) {
      invisibleNumber++;
      console.log(invisibleNumber);
    }
  }

}

function getVisibleComment () {
  buttonLoadComment.addEventListener('click', () => {

    for (let i = 0; i <= commentList.length; i++) {
      commentList[i].classList.remove('hidden');
    }

    if (commentList[i].classList.contains('hidden')) {
      invisibleNumber++;
      console.log(invisibleNumber);
    }
  });
}

getVisibleComment();

const commentVisible = document.querySelector('.comments-visible');
function commentCountVisible () {
  commentVisible.textContent = commentList.length - invisibleNumber;
}

function createSimilarPhoto ({url, likes, comments, description}) {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;

  simylarElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalWindow(url, likes, comments, description);
    getInvsibleComment();
    commentCountVisible();
  });

  miniatureList.appendChild(simylarElement);
}

similarPhoto.forEach(createSimilarPhoto);

simylarListElement.appendChild(miniatureList);
