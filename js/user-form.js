// Показывает окно
const form = document.querySelector('.img-upload__overlay');


const uploadPhoto = document.querySelector('#upload-file');
uploadPhoto.addEventListener('change', () => {
  console.log('Загрузилось');
  document.body.classList.add('modal-open');
  form.classList.remove('hidden');

  const fileImage = this.value;
  console.log(fileImage);

});
