import { ready } from '../../js/utils';

ready(() => {
  // set popupBtn class
  const popupBtn = document.querySelector('.buttons__video');
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.popup__close-btn')
  const overlay = popup.querySelector('.popup__overlay');

  const videoOff = () => {
    const popupContent = popup.querySelector('.popup__content').children;

    for (let content of popupContent) {
      if (content.getAttribute('src')) {
        let oldAttr = content.getAttribute('src');

        content.setAttribute('src', '');
        content.setAttribute('src', oldAttr);
      }
    }
  }
  
  popupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.toggle('popup_open');
  });

  overlay.addEventListener('click', (e) => {
    videoOff();
    popup.classList.remove('popup_open');
  });

  closeBtn.addEventListener('click', (e) => {
    videoOff();
    popup.classList.remove('popup_open');
  });

});