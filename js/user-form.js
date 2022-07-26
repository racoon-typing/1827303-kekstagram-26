// Показывает окно загрузки фото
const formOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const uploadPhotoImg = document.querySelector('.img-upload__preview img');
const uploadPhoto = document.querySelector('#upload-file');

function openUploadPhoto() {
  uploadPhoto.addEventListener('change', () => {
    document.body.classList.add('modal-open');
    formOverlay.classList.remove('hidden');

    const selectedFile = uploadPhoto.files[0];
    const fileUrl = URL.createObjectURL(selectedFile);

    uploadPhotoImg.src = fileUrl;
  });
}

openUploadPhoto();

// Скрывает окно загрузки фото
const buttonCloseUpload = document.querySelector('#upload-cancel');
const inputHashtag = form.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

function closeUploadPhoto() {
  buttonCloseUpload.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    formOverlay.classList.add('hidden');
  });

  uploadPhoto.value = '';

  function clickHandlerUploadByEsc(e) {
    if (e.key === 'Escape') {
      if (document.activeElement === inputHashtag || document.activeElement === inputComment) {
        return;
      }

      formOverlay.classList.add('hidden');
    }
  }

  if (formOverlay.classList.contains('hidden') === true) {
    document.removeEventListener('keydown', clickHandlerUploadByEsc);
  }

  document.addEventListener('keydown', clickHandlerUploadByEsc);
}

closeUploadPhoto();

// Проверка формы с помощью Pristine
const HASHTAG_REGEX = /^#[A-Za-zА-Яа-яЁё0-9]{1,20}$/;

function emailTest(value) {
  const hashtags = value.split(' ');

  return hashtags.every((hashtag) => HASHTAG_REGEX.test(hashtag));
}

function validateHashtagMaxLength(value) {
  const hashtags = value.split(' ');

  return hashtags.length <= 5;
}

function validateHashtagIsUnique(value) {
  const hashtags = value.split(' ');
  const hashtagSet = new Set(hashtags);

  return hashtags.length === hashtagSet.size;
}

// Кэмел кэйс
// function validateHashtagCamalCase(input) {
//   return input == input.toUpperCase();
// }

// Комментарий
function validateCommentMaxLength(value) {
  return value.length <= 140;
}

const pristine = new Pristine(form);

// Валидаторы поля хэштега
pristine.addValidator(inputHashtag, emailTest);
pristine.addValidator(inputHashtag, validateHashtagMaxLength);
pristine.addValidator(inputHashtag, validateHashtagIsUnique);

// Валидаторы поля комментария
pristine.addValidator(inputComment, validateCommentMaxLength);

// const submitButton = document.querySelector('.img-upload__submit');

// const blockSubmitButton = () => {
//   submitButton.disabled = true;
//   submitButton.textContent = 'Сохраняю...';
// };

// const unblockSubmitButton = () => {
//   submitButton.disabled = false;
//   submitButton.textContent = 'Сохранить';
// };

// Сообщение об успехе
const inputScale = document.querySelector('.scale__control--value');
const tempalteSuccessMessage = document.querySelector('#success')
  .content
  .querySelector('.success');

function resetSettings () {
  inputScale.value = '100%';
  uploadPhotoImg.classList.remove();
  inputHashtag.value = '';
  inputComment.value = '';
  uploadPhoto.value = '';
}

function getSuccessMessage() {
  resetSettings ();
  formOverlay.classList.add('hidden');

  const successMessage = tempalteSuccessMessage.cloneNode(true);
  document.body.append(successMessage);

  const sectionSuccessElement = document.querySelector('.success');
  sectionSuccessElement.classList.remove('hidden');

  const onSuccessButton = document.querySelector('.success__button');
  onSuccessButton.addEventListener('click', () => {
    sectionSuccessElement.classList.add('hidden');
    successMessage.remove();
  });

  function clickHandlerByEsc(e) {
    if (e.key === 'Escape') {
      sectionSuccessElement.classList.add('hidden');
      successMessage.remove();
    }
  }
  // Проверка с хидден
  // sectionSuccessElement.classList.contains('hidden') === true

  if (!successMessage) {
    document.removeEventListener('keydown', clickHandlerByEsc);
  }

  document.addEventListener('keydown', clickHandlerByEsc);

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.success__inner')) {
      sectionSuccessElement.classList.add('hidden');
    }
  });
}

// Сообщение об ошибке
const tempalteErrorMessage = document.querySelector('#error')
  .content
  .querySelector('.error');

function getErrorMessage() {
  const errorMessage = tempalteErrorMessage.cloneNode(true);
  document.body.append(errorMessage);

  const sectionErrorElement = document.querySelector('.error');
  sectionErrorElement.classList.remove('hidden');
  formOverlay.classList.add('hidden');

  const onErrorButton = document.querySelector('.error__button');
  onErrorButton.addEventListener('click', () => {
    formOverlay.classList.remove('hidden');
    errorMessage.remove();
  });

  function clickHandlerByEsc(e) {
    if (e.key === 'Escape') {
      formOverlay.classList.remove('hidden');
      errorMessage.remove();
    }
  }

  if (!errorMessage) {
    document.removeEventListener('keydown', clickHandlerByEsc);
  }

  document.addEventListener('keydown', clickHandlerByEsc);

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.error__inner')) {
      formOverlay.classList.remove('hidden');
      errorMessage.remove();
    }
  });
}

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://26.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          mode: 'no-cors',
          body: formData,
        },
      ).then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onFail();
        }
      }
      ).catch(() => {
        onFail();
      });

      // blockSubmitButton();
      // sendData(
      //   () => {
      //     onSuccess();
      //     unblockSubmitButton();
      //   },
      //   () => {
      //     showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      //     unblockSubmitButton();
      //   },
      //   new FormData(evt.target),
      // );
    }
  });
};

export { setUserFormSubmit, getSuccessMessage, getErrorMessage};
