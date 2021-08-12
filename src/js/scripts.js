const toggleMenu = document.getElementById('toggle-menu');
const toggleBar = document.getElementById('toggle-bar');

toggleMenu.addEventListener('click', () => {
  toggleBar.classList.toggle('active');
});
