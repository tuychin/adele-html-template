import { ready } from '../../../js/utils';
import modal from '../../common-blocks/popup/popup.js';

ready(() => {
  const introSection = document.querySelector('.intro');

  const popupVideo = introSection.querySelector('.intro__popup-video');
  const videoBtn = introSection.querySelector('.intro__video-btn');

  const popupForm = introSection.querySelector('.intro__popup-form');
  const introBtn = introSection.querySelector('.intro__button');

  modal(popupForm, introBtn);
  modal(popupVideo, videoBtn);

});