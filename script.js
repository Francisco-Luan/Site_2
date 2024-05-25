const menu = document.querySelector('.menu');
const navMenu = document.querySelectorAll('.nav-menu');

menu.addEventListener('click', () -> {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})