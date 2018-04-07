const about = document.querySelector('.about');
const landing = document.querySelector('.landing-container');
const nav = document.querySelector('.navbar');
const navMenu = document.querySelector('#navbarNavDropdown');
// const navIcon = document.querySelector('.navbar-icon');

window.addEventListener('scroll', () =>{
    if (!navMenu.classList.contains('show')){
        if (window.scrollY >= (5)) {
            nav.classList.remove('navbar-landing', 'navbar-dark');
            nav.classList.add('navbar-bg','navbar-light');
        } else {
            nav.classList.add('navbar-landing', 'navbar-dark');    
            nav.classList.remove('navbar-bg','navbar-light');
        }
    }    
});

$('.navbar-toggler').click(() => {
    // nav.classList.remove('navbar-landing', 'navbar-dark');
    // nav.classList.add('navbar-bg', 'navbar-light');
    if (nav.classList.contains('navbar-landing') || window.scrollY < 5){
        nav.classList.toggle('navbar-landing');
        nav.classList.toggle('navbar-light');
        nav.classList.toggle('navbar-bg');
        nav.classList.toggle('navbar-dark');
    }
});

const pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight/2,
    cell_size: 70,
    x_colors: ["#5d007c","#72105f","#995201","#d64e00"],
    y_colors: 'match_x',
});
pattern.canvas(document.getElementById('myCanvas'));

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();
    
    $('.landing-title').css({
        'transform' : 'translate(0px, -' + wScroll/8 + '%)'
    });
});