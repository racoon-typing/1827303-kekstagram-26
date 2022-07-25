import './miniature.js';
import './big-photo.js';
import './user-form.js';
import './scale.js';
import './effect.js';
import {renderSimilarList} from './miniature.js';

fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    renderSimilarList(data);
  })
  .catch((err) => {
    console.error(err);
  });

