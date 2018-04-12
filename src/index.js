const about = document.querySelector('.about');
const landing = document.querySelector('.landing-container');
const nav = document.querySelector('.navbar');
const navMenu = document.querySelector('#navbarNavDropdown');

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
    if (nav.classList.contains('navbar-landing') || window.scrollY < 5){
        nav.classList.toggle('navbar-landing');
        nav.classList.toggle('navbar-light');
        nav.classList.toggle('navbar-bg');
        nav.classList.toggle('navbar-dark');
    }
});

const pattern = Trianglify({
    width: window.innerWidth,
    cell_size: 70,
    // x_colors: ["#5d007c","#72105f","#995201","#d64e00"],
    // x_colors: ["#3dabc6","#93d9ea","#b2dde8","#f2f6f7"],
    // x_colors: ["#8123af","#a674bf","#cfbcd8","#f5f2f7"],
    x_colors: ["#290238","#421155","#7A4A8D","9A73A9"],
    y_colors: 'match_x',
});
pattern.canvas(document.getElementById('myCanvas'));

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();    
    $('.landing-title').css({
        'transform' : 'translate(0px, -' + wScroll/8 + '%)'
    });
});