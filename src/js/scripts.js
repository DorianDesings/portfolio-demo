const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', e => {
  if (e.target.classList.contains('toggle--show')) {
    e.target.classList.add('toggle--close');
  } else {
    e.target.classList.add('toggle--show');
  }
});
