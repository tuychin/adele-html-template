import { ready } from '../utils';

ready(() => {
  const videoBtn = document.querySelector('.buttons__video');
  
  videoBtn.addEventListener('click', (e) => {
    e.preventDefault();

  });

});