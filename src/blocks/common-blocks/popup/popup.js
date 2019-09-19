// set popupBtn class

import { videoOff } from '../../../js/utils';

function modal(container) {
  const popupBtn = container.querySelector('.intro__video');
  const popup = container.querySelector('.popup');
  const closeBtn = container.querySelector('.popup__close-btn')
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

export default modal;
