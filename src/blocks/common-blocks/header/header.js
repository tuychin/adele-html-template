import { ready } from '../../../js/utils';

ready(() => {

  function header() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar__item');
    const headerLogo = document.querySelector('.header__logo');
  
    toggleBtn.addEventListener('click', (e) => {
      navbar.classList.toggle('navbar_open');
      toggleBtn.classList.toggle('toggle-btn_open');
    });
  
    for (let link of navbarLinks) {
      link.addEventListener('click', (e) => {
        navbar.classList.remove('navbar_open');
        toggleBtn.classList.remove('toggle-btn_open');
      });
    }
  
    headerLogo.addEventListener('click', (e) => {
      e.preventDefault();
      navbar.classList.remove('navbar_open');
      toggleBtn.classList.remove('toggle-btn_open');
    });
  }

  header();

});