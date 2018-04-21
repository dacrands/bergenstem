const menu = document.querySelector("nav");
const patties = document.querySelectorAll(".patty");
const resources = document.querySelector('.resources');
const toggleMenu = document.querySelector(".toggle-menu");
const toggleButton = document.querySelector(".toggle-button");
const resourceMenu = document.querySelector('.resource-menu');

console.log(menu.offsetHeight);
console.log(menu.offsetHeight);

if (window.innerWidth < 1000) {
    toggleMenu.classList.add('toggle-menu__show');
    if (toggleMenu.classList.toString().includes('toggle-menu__show')) {
        patties.forEach(patty => {
            patty.classList.remove('patty-collapse');
        });
    }
}

window.addEventListener('resize', () => {
  if (window.innerWidth <  1000) {
    console.log('happy');
    toggleMenu.classList.add('toggle-menu__show');
    if (toggleMenu.classList.toString().includes('toggle-menu__show')) {
        patties.forEach(patty => {
            patty.classList.remove('patty-collapse');
        });
    }
  }
});

toggleButton.addEventListener('click', () => {
  patties.forEach(patty => {
    patty.classList.toggle('patty-collapse');
  });
  toggleMenu.classList.toggle('toggle-menu__show');
});



resources.addEventListener('click', () => {
  resourceMenu.classList.toggle('resource-menu__show');
}); 
