// Показывает окно
const form = document.querySelector('.img-upload__overlay');
form.classList.remove('hidden');

const uploadPhoto = document.querySelector('#upload-file');

function openUploadPhoto () {
  uploadPhoto.addEventListener('change', () => {
    console.log('Загрузилось');
    document.body.classList.add('modal-open');
    form.classList.remove('hidden');
  });
}

openUploadPhoto();

const buttonCloseUpload = document.querySelector('#upload-cancel');

function closenUploadPhoto () {
  buttonCloseUpload.addEventListener('click', ()=> {
    document.body.classList.remove('modal-open');
    form.classList.add('hidden');
  });

  function clickHandlerUploadByEsc(e) {
    if (e.key === 'Escape') {
      form.classList.add('hidden');
    }
  }

  if (form.classList.contains('hidden') === true) {
    document.removeEventListener('keydown', clickHandlerUploadByEsc);
  }

  document.addEventListener('keydown', clickHandlerUploadByEsc);
}

closenUploadPhoto();

const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');

function changeScaleValue () {
  let scaleValue = document.querySelector('.scale__control--value').value;
  console.log(scaleValue);

  buttonScaleSmaller.addEventListener('click', (evt) => {
    evt.preventDefault();

    scaleValue = scaleValue - 25%;

    console.log('Клик по кнопке');
  });
}

changeScaleValue();
