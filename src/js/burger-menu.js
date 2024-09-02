// Function to toggle navigation and burger menu visibility
function toggleNav() {
  const nav = document.querySelector('.about-us-nav');
  const burgerMenu = document.querySelector('.burger-menu');

  if (nav && burgerMenu) {
    // Toggle 'active' class to show/hide elements
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  } else {
    console.error('Navigation or burger menu elements not found');
  }
}

// Add event listener to the burger menu container after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuContainer = document.querySelector('.burger-menu-container');

  if (burgerMenuContainer) {
    burgerMenuContainer.addEventListener('click', toggleNav);
  } else {
    console.error('Burger menu container not found');
  }
});