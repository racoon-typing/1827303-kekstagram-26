import './miniature.js';
import './big-photo.js';
import './user-form.js';
import './scale.js';
import './effect.js';
import { renderSimilarList } from './miniature.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
// import { closeModalWindow } from './big-photo.js';
// import { setUserForm } from './user-form.js';

// аргументы передать то что нужно, и сделать сообщение об ошибке
const loadPhoto = getData(renderSimilarList, showAlert);
loadPhoto();

// setUserForm();
