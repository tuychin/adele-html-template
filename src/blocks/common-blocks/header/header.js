import { ready } from '../../../js/utils';

ready(() => {

  function header() {
    const toggleBtn = document.querySelector('.header__toggle-btn');
    const navbar = document.querySelector('.header__navbar');
    const navbarLinks = document.querySelectorAll('.header__item');
    const headerLogo = document.querySelector('.header__logo');
  
    toggleBtn.addEventListener('click', (e) => {
      navbar.classList.toggle('header__navbar_open');
      toggleBtn.classList.toggle('header__toggle-btn_open');
    });
  
    for (let link of navbarLinks) {
      link.addEventListener('click', (e) => {
        navbar.classList.remove('header__navbar_open');
        toggleBtn.classList.remove('header__toggle-btn_open');
      });
    }
  
    headerLogo.addEventListener('click', (e) => {
      e.preventDefault();
      navbar.classList.remove('header__navbar_open');
      toggleBtn.classList.remove('header__toggle-btn_open');
    });
  }

  header();

});