// set popupBtn class

import { videoOff } from '../../../js/utils';

function modal(container, trigger) {
  const closeBtn = container.querySelector('.popup__close-btn')
  const overlay = container.querySelector('.popup__overlay');
  const popupVideo = container.querySelector('iframe');
  
  trigger.addEventListener('click', (e) => {

    if (popupVideo) {
      videoOff(popupVideo);
    }

    e.preventDefault();
    container.classList.toggle('popup_open');
    document.body.style.overflow = 'hidden';
  });
  

  overlay.addEventListener('click', (e) => {

    if (popupVideo) {
      videoOff(popupVideo);
    }

    container.classList.remove('popup_open');
    document.body.style.overflow = 'visible';
  });
  

  closeBtn.addEventListener('click', (e) => {

    if (popupVideo) {
      videoOff(popupVideo);
    }

    container.classList.remove('popup_open');
    document.body.style.overflow = 'visible';
  });
}

export default modal;
