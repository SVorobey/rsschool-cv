let humburger = document.querySelector('.page__humburger'),
    navMenu = document.querySelector(".nav__list");

humburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
}) 