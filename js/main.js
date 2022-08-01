import './miniature.js';
import './big-photo.js';
import './user-form.js';
import './scale.js';
import './effect.js';
import { renderSimilarList } from './miniature.js';
import { getData} from './api.js';
import { showAlert } from './util.js';
import { setUserFormSubmit, getSuccessMessage, getErrorMessage } from './user-form.js';

const loadPhoto = getData(renderSimilarList, showAlert);
loadPhoto();

setUserFormSubmit(getSuccessMessage, getErrorMessage);
