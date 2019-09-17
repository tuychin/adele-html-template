// set popupBtn class

import { ready, videoOff } from '../../../js/utils';

ready(() => {

  function modal() {
    const popupBtn = document.querySelector('.intro__video');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.popup__close-btn')
    const overlay = popup.querySelector('.popup__overlay');
    const popupVideo = popup.querySelector('iframe');
    
    popupBtn.addEventListener('click', (e) => {
      videoOff(popupVideo);
      e.preventDefault();
      popup.classList.toggle('popup_open');
      document.body.style.overflow = 'hidden';
    });
    
    overlay.addEventListener('click', (e) => {
      videoOff(popupVideo);
      popup.classList.remove('popup_open');
      document.body.style.overflow = 'visible';
    });
    
    closeBtn.addEventListener('click', (e) => {
      videoOff(popupVideo);
      popup.classList.remove('popup_open');
      document.body.style.overflow = 'visible';
    });
  }

  modal();

});