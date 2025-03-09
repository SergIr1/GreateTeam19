(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-burger-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelectorAll('[data-menu-burger-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-menu-burger]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.forEach(el => el.addEventListener('click', toggleModal));
  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
