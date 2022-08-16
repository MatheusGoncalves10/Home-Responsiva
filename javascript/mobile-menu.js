var menu = document.querySelector('nav ul');
var btnMenu = document.querySelector('.menu-icon');

function mostrarMenu(){
    if(menu.classList.contains('abrir')){
        menu.classList.remove('abrir');
    }
    else{
        menu.classList.add('abrir');
    }
}