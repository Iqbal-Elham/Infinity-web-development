const hum = document.querySelector('.humbarger');
const navMenu = document.querySelector('.menu');

hum.addEventListener('click', () => {
  hum.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach((n) => n.addEventListener('click', () => {
  hum.classList.remove('active');
  navMenu.classList.remove('active');
}));