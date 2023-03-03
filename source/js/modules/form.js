import {closeModal} from './modal.js';

const form = document.querySelector('.new-shop__form');

const initForm = () => {
  if (form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      closeModal();
    });
  }
};

export {initForm};
