// Показывает окно загрузки фото
const form = document.querySelector('.img-upload__overlay');
// form.classList.remove('hidden');

const uploadPhotoImg = document.querySelector('.img-upload__preview img');
const uploadPhoto = document.querySelector('#upload-file');

function openUploadPhoto () {
  uploadPhoto.addEventListener('change', () => {
    document.body.classList.add('modal-open');
    form.classList.remove('hidden');

    // Подставляет изображение в инпут
    // const fileReader = new FileReader();
    // fileReader.onload = function () {
    //   uploadPhotoImg.src = fileReader.result;
    // };
  });
}

openUploadPhoto();

// Скрывает окно загрузки фото
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

  uploadPhoto.value = '';
}

closenUploadPhoto();

// Изменеят знаяение Scale
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const inputScaleValue = document.querySelector('.scale__control--value');
const scaleValue = document.querySelector('.scale__control--value');
const scaleValueNumber = parseInt(scaleValue.value, 10);

function changeScaleValue () {

  buttonScaleSmaller.addEventListener('click', () => {
    const scaleContol = 25;
    const scaleValueResult = `${scaleValueNumber - scaleContol}%`;
    scaleValue.value = scaleValueResult;
    return scaleValue.value;
  });

  buttonScaleBigger.addEventListener('click', () => {
    const scaleContol = 25;
    scaleValue.value = `${scaleValueNumber + scaleContol}%`;
    return scaleValue.value;
  });
}

console.log(scaleValue.value);

changeScaleValue();

// Добавляет эффект на фото
function createEffect () {
  const effectControlItem = document.querySelectorAll('.effects__radio');
  for (let i = 0; i < effectControlItem.length; i++) {
    effectControlItem[i].addEventListener('click', () => {
      uploadPhotoImg.className = '';
      const cssEffectByPhoto = `effects__preview--${effectControlItem[i].value}`;
      uploadPhotoImg.classList.add(cssEffectByPhoto);

      if (cssEffectByPhoto === 'effects__preview--none') {
        uploadPhotoImg.className = '';
      }
    });
  }
}

createEffect ();

// Проверка формы
const pristine = new Pristine(form);

// Проверка поля хэштег
function validateHashtag (value) {
  return value.length <= 20;
}

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtag);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
