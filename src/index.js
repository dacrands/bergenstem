const about = document.querySelector('.about');
const landing = document.querySelector('.landing-container');
const nav = document.querySelector('.navbar');
const navIcon = document.querySelector('.navbar-icon');

window.addEventListener('scroll', () =>{
    if (window.scrollY >= ((landing.scrollHeight)/10)) {
        nav.classList.remove('navbar-landing', 'navbar-dark');
        nav.classList.add('navbar-bg','navbar-light');
    } else {
        nav.classList.add('navbar-landing', 'navbar-dark');    
        nav.classList.remove('navbar-bg','navbar-light');
    }
});

const pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight/2,
    cell_size: 70,
    x_colors: ["#d64e00","#995201","#72105f","#5d007c"],
    y_colors: 'match_x',
});
pattern.canvas(document.getElementById('myCanvas'));

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();
    
    $('.landing-title').css({
        'transform' : 'translate(0px, -' + wScroll/8 + '%)'
    });
});