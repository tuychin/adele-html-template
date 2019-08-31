import { ready } from '../utils';

ready(() => { 
  const toggleBtn = document.querySelector('.navbar__toggle-btn');
  const navbar = document.querySelector('.navbar__list');

  toggleBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('navbar__list_active');
  });
});