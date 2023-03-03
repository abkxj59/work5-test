const menu = document.querySelector('.nav');
const openButton = document.querySelector('.main-header__menu-button');
const overlay = document.querySelector('.page__main');

const initMenu = () => {
  if (menu) {
    openButton.addEventListener('click', () => {
      menu.classList.toggle('nav--opened');
    });
    overlay.addEventListener('click', () => {
      if (menu.classList.contains('nav--opened')) {
        menu.classList.remove('nav--opened');
      }
    });
  }
};

export {initMenu};
