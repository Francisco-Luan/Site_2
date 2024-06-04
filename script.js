const menu = document.querySelector('.menu');
const navMenu = document.querySelectorAll('.nav-menu');

menu.addEventListener('click', (){
    menu.classListtoggle('ativo');
    navMenu.classList.toggle('ativo');
})