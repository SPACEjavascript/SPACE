let btn = document.querySelector('.hamburger');
let modal = document.querySelector('.menu');
let close = document.querySelector('.close');


btn.addEventListener('click', () => {
    modal.classList.add('acitve__modal')
});
 
close.addEventListener('click', () => {
    modal.classList.remove('acitve__modal')
});
 