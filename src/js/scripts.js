const mainNav = document.getElementById('main-nav');
const toggleMenu = document.getElementById('toggle-menu');
const toggleBar = document.getElementById('toggle-bar');
const headerElement = document.getElementById('header');

toggleMenu.addEventListener('click', () => {
  toggleBar.classList.toggle('active');
  mainNav.classList.toggle('main-nav--show');
  header.classList.toggle('header--blur');
});
