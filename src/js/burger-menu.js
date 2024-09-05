
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.about-us-nav');

  burger.addEventListener('click', function () {
    nav.classList.toggle('open');
    burger.classList.toggle('active');
  });
});