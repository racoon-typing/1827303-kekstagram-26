// Показывает окно
const form = document.querySelector('.img-upload__overlay');
form.classList.remove('hidden');

const uploadPhotoImg = document.querySelector('.img-upload__preview img');

const uploadPhoto = document.querySelector('#upload-file');

function openUploadPhoto () {
  uploadPhoto.addEventListener('change', () => {
    document.body.classList.add('modal-open');
    form.classList.remove('hidden');

    console.log(uploadPhoto.value);

    const fileReader = new FileReader();
    fileReader.onload = function () {
      uploadPhotoImg.src = fileReader.result;
    };
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

  uploadPhoto.value = '';
  // console.log(uploadPhoto.value);

}

closenUploadPhoto();

const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');

// function changeScaleValue () {
//   let scaleValue = document.querySelector('.scale__control--value').value;
//   console.log(scaleValue);

//   buttonScaleSmaller.addEventListener('click', (evt) => {
//     evt.preventDefault();

//     const newScaleValue = scaleValue * 0.25;

//     console.log(newScaleValue);
//   });
// }

// changeScaleValue();

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
