var menuOpen = document.querySelector('#menuOpen');
var menuClose = document.querySelector('#menuClose');
var sideNav = document.querySelector('#sideNav');
var body = document.querySelector('body');

menuOpen.addEventListener('click', function(){
    sideNav.style.left = '0';
    sideNav.style.boxShadow = '0 0 20px 20000000px rgba(0, 0, 0, 0.5)';
    body.style.overflow = 'hidden';    
})

menuClose.addEventListener('click', function(){
    sideNav.style.left = '-20%';
    sideNav.style.boxShadow = '';
    body.style.overflow = 'initial';
})