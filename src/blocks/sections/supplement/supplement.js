import { ready } from '../../../js/utils';
import modal from '../../common-blocks/popup/popup.js';

ready(() => {
  const popupForm = document.querySelector('.intro__popup-form');

  const supplementSection = document.querySelector('.supplement');
  const supplementBtn = supplementSection.querySelector('.supplement__button');

  modal(popupForm, supplementBtn);

});