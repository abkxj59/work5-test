const modal = document.querySelector('.new-shop');
const addShopButton = document.querySelector('.shops__button-new');
const modalOverlay = document.querySelector('.new-shop__overlay');
const closeButton = document.querySelector('.new-shop__close');
const cancelButton = document.querySelector('.new-shop__cancel');


const openModal = () => {
  modal.classList.add('new-shop--opened');
};

const closeModal = () => {
  modal.classList.remove('new-shop--opened');
};

const initModal = () => {
  if (modal) {
    addShopButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    });
  }
};

export {initModal, closeModal};
