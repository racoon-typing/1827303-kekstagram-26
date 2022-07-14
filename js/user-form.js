// Показывает окно загрузки фото
const form = document.querySelector('.img-upload__overlay');
form.classList.remove('hidden');

const uploadPhotoImg = document.querySelector('.img-upload__preview img');
const uploadPhoto = document.querySelector('#upload-file');

function openUploadPhoto() {
  uploadPhoto.addEventListener('change', () => {
    document.body.classList.add('modal-open');
    form.classList.remove('hidden');

    let selectedFile = uploadPhoto.files[0];
    let fileUrl = URL.createObjectURL(selectedFile);

    uploadPhotoImg.src = fileUrl;
  });
}

openUploadPhoto();

// Скрывает окно загрузки фото
const buttonCloseUpload = document.querySelector('#upload-cancel');

function closenUploadPhoto() {
  buttonCloseUpload.addEventListener('click', () => {
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

// Изменеят значение Scale
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
let scaleValueNumber = parseInt(inputScale.value, 10);
const scaleContolStep = 25;

function changeScaleValue() {
  if (scaleValueNumber === 100) {
    buttonScaleBigger.disabled = true;
  }

  buttonScaleSmaller.addEventListener('click', () => {
    scaleValueNumber = scaleValueNumber - scaleContolStep;
    inputScale.value = `${scaleValueNumber}%`;

    // Проверка соответсвия условию от 25% до 100%
    if (scaleValueNumber === 25) {
      buttonScaleSmaller.disabled = true;
    }

    if (scaleValueNumber < 100) {
      buttonScaleBigger.disabled = false;
    }

    uploadPhotoImg.style.transform = `scale(${scaleValueNumber / 100})`;
    return inputScale.value;
  });

  buttonScaleBigger.addEventListener('click', () => {
    scaleValueNumber = scaleValueNumber + scaleContolStep;
    inputScale.value = `${scaleValueNumber}%`;

    // Проверка соответсвия условию от 25% до 100%
    if (scaleValueNumber === 100) {
      buttonScaleBigger.disabled = true;
    }

    if (scaleValueNumber > 25) {
      buttonScaleSmaller.disabled = false;
    }

    uploadPhotoImg.style.transform = `scale(${scaleValueNumber / 100})`;
    return inputScale.value;
  });

}

changeScaleValue();

// Добавляет эффект на фото
const rangeSlider = document.querySelector('.effect-level');

function createEffect() {
  const effectControlItem = document.querySelectorAll('.effects__radio');
  for (let i = 0; i < effectControlItem.length; i++) {
    effectControlItem[i].addEventListener('click', () => {
      uploadPhotoImg.className = '';
      const cssEffectByPhoto = `effects__preview--${effectControlItem[i].value}`;
      uploadPhotoImg.classList.add(cssEffectByPhoto);

      if (cssEffectByPhoto === 'effects__preview--none') {
        uploadPhotoImg.className = '';
      }

      const settingOfRangeTen = {
        start: [1],
        connect: 'lower',
        step: 0.1,
        range: {
          'min': 0,
          'max': 1
        }
      };

      const settingOfRangethirty = {
        start: [3],
        connect: 'lower',
        step: 0.1,
        range: {
          'min': 0,
          'max': 3
        }
      };

      if (cssEffectByPhoto === 'effects__preview--chrome') {
        // rangeSlider.noUiSlider.off();

        noUiSlider.create(rangeSlider, settingOfRangeTen);

        rangeSlider.noUiSlider.on('update', (values) => {
          let valueSlider = `grayscale(${values})`;
          console.log(valueSlider);
          uploadPhotoImg.style.filter = valueSlider;
        });
      }

      if (cssEffectByPhoto === 'effects__preview--sepia') {
        noUiSlider.create(rangeSlider, settingOfRangeTen);

        rangeSlider.noUiSlider.on('update', (values) => {
          let valueSlider = `sepia(${values})`;
          console.log(valueSlider);
          uploadPhotoImg.style.filter = valueSlider;
        });
      }

      if (cssEffectByPhoto === 'effects__preview--marvin') {
        noUiSlider.create(rangeSlider, {
          start: [100],
          connect: 'lower',
          step: 0.1,
          range: {
            'min': 0,
            'max': 100
          }
        });

        rangeSlider.noUiSlider.on('update', (values) => {
          let valueSlider = `invert(${values})`;
          console.log(valueSlider);
          uploadPhotoImg.style.filter = valueSlider;
        });
      }

      if (cssEffectByPhoto === 'effects__preview--phobos') {
        noUiSlider.create(rangeSlider, settingOfRangethirty);

        rangeSlider.noUiSlider.on('update', (values) => {
          let valueSlider = `blur(${values})`;
          console.log(valueSlider);
          uploadPhotoImg.style.filter = valueSlider;
        });
      }

      if (cssEffectByPhoto === 'effects__preview--heat') {
        noUiSlider.create(rangeSlider, settingOfRangethirty);

        rangeSlider.noUiSlider.on('update', (values) => {
          let valueSlider = `brightness(${values})`;
          console.log(valueSlider);
          uploadPhotoImg.style.filter = valueSlider;
        });
      }
    });
  }
}

createEffect();

// Проверка формы с помощью Pristine
const inputHashtag = form.querySelector('.text__hashtags');

form.addEventListener('submit', (evt) => {
  if (emailTest(inputHashtag)) {
    evt.preventDefault();
  }

  if (inputHashtag.value === '') {
    evt.preventDefault();
  }

  if (validateHashtagMinLength(inputHashtag)) {
    evt.preventDefault();
  }

  if (validateHashtagMaxLength(inputHashtag)) {
    evt.preventDefault();
  }

  if (!validateHashtagCamalCase(inputHashtag)) {
    evt.preventDefault();
  }

});

function emailTest(input) {
  return !/^#(?=.*[^0-9])[a-zа-яё0-9]{1,29}$/.test(input.value);
}

function validateHashtagMinLength(input) {
  return input.length <= 1;
}

function validateHashtagMaxLength(input) {
  return input.length >= 20;
}

function validateHashtagCamalCase(input) {
  return input == input.toUpperCase();
}

const pristine = new Pristine(form);

pristine.addValidator(inputHashtag, emailTest, 'Не подходит');
pristine.addValidator(inputHashtag, validateHashtagMinLength);
pristine.addValidator(inputHashtag, validateHashtagMaxLength);
pristine.addValidator(inputHashtag, validateHashtagCamalCase);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// function validateForm () {
//   form.addEventListener('submit', () => {

// // хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
// function validateHashtagCamalCase (value) {
//   return value == value.toUpperCase();
// }

// // хэш-теги разделяются пробелами;
// // один и тот же хэш-тег не может быть использован дважды;
// // let array = [];

// // function validateHashtagNotTwice (value) {
// //   array.push(value);

// //   if (array.includes(value)) {
// //     console.log('У вас 2 одинаковых хэштега');
// //   }
// // }

// // нельзя указать больше пяти хэш-тегов;
// // if (array.length == 5) {
// //   console.log('Максимальное количество хэштегов = 5');
// // }

//   // хэш-теги необязательны;
//   // console.log(inputHashtag.value);
//   // if (array.value = null) {
//   //   console.log('Хэштеги необязательны');
//   // }

// // если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
//   function focusOnInput () {
//     return inputHashtag.addEventListener('focus', () => {
//       document.removeEventListener('keydown', clickHandlerUploadByEsc);
//     });
//   }

//   function validateHashtagTabEsc () {
//     if () {

//     }
//   }

//   // Поле хэштег
//   // pristine.addValidator(inputHashtag, validateHashtagSymbol);
//   pristine.addValidator(inputHashtag, validateHashtagMaxLength);
//   pristine.addValidator(inputHashtag, validateHashtagMinLength);
//   pristine.addValidator(inputHashtag, validateHashtagCamalCase);
//   // pristine.addValidator(inputHashtag, validateHashtagNotTwice);
//   });
// }

// validateForm();

