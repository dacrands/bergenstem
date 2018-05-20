import './public/styles/index.css';
import './public/styles/menu.css';
import './public/styles/video.css';
import './public/styles/contact.css';
import './public/styles/project-index.css';
import './public/styles/3sp.css';

import './public/scripts/menu.js';
import './public/scripts/images.js';
import './public/scripts/video.js';

const about = document.querySelector('.about');
const landing = document.querySelector('.landing-container');
const nav = document.querySelector('.navbar');
const navMenu = document.querySelector('#navbar');

window.addEventListener('scroll', () =>{
    if (window.scrollY >= (5)) {
        nav.classList.remove('navbar__landing')
    } else {
        nav.classList.add('navbar__landing');    

    }
});

$('.navbar-toggler').click(() => {
    if (nav.classList.contains('navbar__landing') || window.scrollY < 5){
        nav.classList.toggle('navbar__landing');
    }
});

const pattern = Trianglify({
    width: window.innerWidth,
    cell_size: 15,
    variance: 60,
    stroke_width: 5,
    // x_colors: ["#5d007c","#72105f","#995201","#d64e00"],
    // x_colors: ["#111111","#222222","#444444","#666666"],
    // x_colors: ["#000000","#9B9A9A","#D2D0D0","#F7F7F7", "#FFFFFF"],    
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