let nav = document.querySelector('nav');
let btn = document.querySelector('button');

btn.addEventListener('click',function() {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});
