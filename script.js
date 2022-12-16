function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = menu.querySelector('.burger-menu__button');
    let lines = menu.querySelector('.burger-menu__icon');
    let links = menu.querySelector('.burger-menu__link');
    let overlay = menu.querySelector('.burger-menu__overlay');
    let body = document.querySelector('body');

    button.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    lines.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    links.addEventListener('click', () => toggleMenu);
    overlay.addEventListener('click', () => toggleMenu);

    function toggleMenu(){
        if (menu.classList.contains('burger-menu__active')) {
            menu.classList.remove('burger-menu__active');
            body.style.overflow = 'visible';
        } else {
            menu.classList.add('burger-menu__active');
            body.style.overflow = 'hidden';
        }
    }
}

burgerMenu('.burger-menu');