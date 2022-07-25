import './miniature.js';
import './big-photo.js';
import './user-form.js';
import './scale.js';
import './effect.js';

fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json)
  .then((data) => {
    console.log(data);
  });

