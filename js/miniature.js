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


function getInvsibleComment () {
  let j = 5;
  for (let i = 0; i <= commentList.length; i++) {

    if (commentList.length > 5) {
      commentList[j].classList.add('hidden');
      j++;
    }
  }
  // commentList.forEach(hideComment(commentList));

  // if (commentList.length === comments.length) {
  //   uploadComment.classList.add('hidden');
  // }
}

function getVisibleComment () {
  buttonLoadComment.addEventListener('click', () => {
    console.log('click');

    for (let i = 6; i <= commentList.length; i++) {
      console.log(i);
      commentList[i].classList.remove('hidden');
      console.log(commentList[i]);

    }
  });
}

function createSimilarPhoto ({url, likes, comments, description}) {
  const simylarElement = simylarPhotoTempalate.cloneNode(true);
  simylarElement.querySelector('.picture__img').src = url;
  simylarElement.querySelector('.picture__likes').textContent = likes;
  simylarElement.querySelector('.picture__comments').textContent = comments.length;

  simylarElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalWindow(url, likes, comments, description);
    // getInvsibleComment();
    getVisibleComment();
  });

  miniatureList.appendChild(simylarElement);
}

similarPhoto.forEach(createSimilarPhoto);

simylarListElement.appendChild(miniatureList);
