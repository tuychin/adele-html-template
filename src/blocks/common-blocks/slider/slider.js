import { ready } from '../../../js/utils';

ready(() => {

  const slider = document.querySelector('.slider'),
        sliderItems = document.querySelector('.slider__slides'),
        prev = document.querySelector('.slider__control_prev'),
        next = document.querySelector('.slider__control_next');

  function slide(wrapper, items, prev, next) {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.querySelectorAll('.slider__item'),
        slidesLength = slides.length,
        slideSize = items.querySelector('.slider__item').offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

    // clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add('slider_loaded');

    // slider dots
    generateDots();

    // mouse events
    items.onmousedown = dragStart;

    // touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // click events
    prev.addEventListener('click', function () { shiftSlide(-1) });
    next.addEventListener('click', function () { shiftSlide(1) });

    // transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart (e) {
      e = e || window.event;
      e.preventDefault();
      posInitial = items.offsetLeft;
      
      if (e.type == 'touchstart') {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }

    function dragAction (e) {
      e = e || window.event;
      
      if (e.type == 'touchmove') {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd (e) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, 'drag');
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, 'drag');
      } else {
        items.style.left = (posInitial) + "px";
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
      items.classList.add('slider__slides_shifting');
      
      if (allowShift) {
        if (!action) { posInitial = items.offsetLeft; }

        if (dir == 1) {
          items.style.left = (posInitial - slideSize) + "px";
          index++;      
        } else if (dir == -1) {
          items.style.left = (posInitial + slideSize) + "px";
          index--;      
        }
      };

      dotActive();
      allowShift = false;
    }
      
    function checkIndex (){
      items.classList.remove('slider__slides_shifting');

      if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
      }

      if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
      }
      
      allowShift = true;
    }
    
    function generateDots() {
      const dots = document.querySelector('.slider__dots'),
            dot = document.createElement('span');

      function addArrows(parentNode) {
        const arrowLeft = document.createElement('span'),
              arrowRight = document.createElement('span');

        arrowLeft.classList.add('slider__arrow', 'slider__arrow_left');
        arrowRight.classList.add('slider__arrow', 'slider__arrow_right');
        parentNode.prepend(arrowLeft);
        parentNode.append(arrowRight);
      }

      dot.classList.add('slider__dot');

      for (let i = 0; i < slidesLength; i++) {
        let cloneDot = dot.cloneNode(true);

        dots.append(cloneDot);
      }

      addArrows(dots);
      dotActive();
    }

    function dotActive() {
      const dotsCollection = document.querySelectorAll('.slider__dot');      

      for (let i = 0; i < dotsCollection.length; i++) {
        const dot = dotsCollection[i],
              lastDotIndex = dotsCollection.length-1,
              firstDot = dotsCollection[0],
              lastDot = dotsCollection[lastDotIndex];
      
        if (index === 0 || index === (lastDotIndex + 1)) {
          firstDot.classList.add('slider__dot_active');
        } else {
          firstDot.classList.remove('slider__dot_active');
        }

        if (index === -1) {
          lastDot.classList.add('slider__dot_active');
        } else {
          lastDot.classList.remove('slider__dot_active');
        }

        if (index !== 0 & index !== (lastDotIndex + 1) & index === i) {
          dot.classList.add('slider__dot_active');
        } else if (index !== -1) {
          dot.classList.remove('slider__dot_active');
        }

      }
    }

  }

slide(slider, sliderItems, prev, next);

});