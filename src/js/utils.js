const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}


function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}


const videoOff = (elem) => {
    
  if (elem.getAttribute('src')) {
    let oldAttr = elem.getAttribute('src');

    elem.setAttribute('src', '');
    elem.setAttribute('src', oldAttr);
  }

}

export {
  ready,
  animate,
  videoOff
};