console.log('hola');

window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.tree');

    const scrolled = window.pageYOffset;

    var ratio = scrolled * 0.2;

    target.style.transform = 'translate3d(0px,'+ratio+'px,0px)';



});

window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.dot');

    const scrolled = window.pageYOffset;

    var ratio = scrolled * 0.5;

    target.style.transform = 'translate3d(0px,'+ratio+'px,0px)';


});

