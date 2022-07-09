// Показывает окно
const form = document.querySelector('.img-upload__overlay');


const uploadPhoto = document.querySelector('#upload-file');
uploadPhoto.addEventListener('change', () => {
  console.log('Загрузилось');
  form.classList.remove('hidden');
});
