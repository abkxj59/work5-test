const nativeSelects = document.querySelectorAll('select');
const customSelects = document.querySelectorAll('.new-shop__select-list');

const openSelect = (select) => {
  select.classList.toggle('new-shop__select-list--opened');
};

const initSelect = () => {
  if (nativeSelects && customSelects) {
    for (let i = 0; i < nativeSelects.length; i++) {
      nativeSelects[i].classList.remove('new-shop__select--nojs');
      customSelects[i].classList.remove('new-shop__select-list--nojs');

      customSelects[i].addEventListener('click', () => openSelect(customSelects[i]));

      const buttons = customSelects[i].children;
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', () => {
          for (let k = 0; k < buttons.length; k++) {
            buttons[k].classList.remove('new-shop__select-item--selected');
          }
          buttons[j].classList.add('new-shop__select-item--selected');
          nativeSelects[i].value = buttons[j].dataset.value;
        });
      }
    }
  }
};

export {initSelect};
