const hamMenu = document.querySelector('.menu-hamburger');
const offscreen = document.querySelector('.nav__list_burger');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreen.classList.toggle('active');
});