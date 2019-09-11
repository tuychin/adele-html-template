import { ready, animate } from '../../../js/utils';

ready(() => {

  const numbersSection = document.querySelector('.numbers');
  const numbers = numbersSection.querySelectorAll('.numbers__counter');

  const getCoords = (elem) => {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    }
  }

  const onSectionScroll = () => {
    let scrollCoords = getCoords(numbersSection);
    
    if (window.pageYOffset > (scrollCoords.top - 200)) {
      document.removeEventListener('scroll', onSectionScroll);

      animate({
        duration: 3000,
        timing: function circ(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw(progress) {
          numbers[0].innerHTML = Math.floor(progress * 100);
          numbers[1].innerHTML = Math.floor(progress * 60);
          numbers[2].innerHTML = Math.floor(progress * 900);                  
        }
      });
    }

    return ;
  }

  document.addEventListener('scroll', onSectionScroll);

});