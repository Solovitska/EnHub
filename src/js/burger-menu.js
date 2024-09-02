function toggleNav() {
  const nav = document.querySelector('.about-us-nav');
  const burgerMenu = document.querySelector('.burger-menu');

  console.log('Nav:', nav);
  console.log('Burger Menu:', burgerMenu);

  if (nav && burgerMenu) {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  } else {
    console.error('Navigation or burger menu elements not found');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuContainer = document.querySelector('.burger-menu-container');

  console.log('Burger Menu Container:', burgerMenuContainer);

  if (burgerMenuContainer) {
    burgerMenuContainer.addEventListener('click', toggleNav);
  } else {
    console.error('Burger menu container not found');
  }
});