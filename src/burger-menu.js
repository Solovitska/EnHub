// Функція для перемикання активного класу
function toggleNav() {
  const nav = document.querySelector('.about-us-nav');
  const burgerMenu = document.querySelector('.burger-menu');

  // Додаємо або прибираємо активний клас
  nav.classList.toggle('active');
  burgerMenu.classList.toggle('active');
}

// Додаємо слухач подій до меню-бургера
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuContainer = document.querySelector('.burger-menu-container');

  if (burgerMenuContainer) {
    burgerMenuContainer.addEventListener('click', toggleNav);
  }
});