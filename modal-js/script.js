const buttonOpenModal = document.querySelector('.modal-btn');
const modalBackgroundActive = document.querySelector('.modal-bg');
const buttonCloseModal = document.querySelector('.modal-close');

buttonOpenModal.addEventListener('click', () => {
        modalBackgroundActive.classList.add('bg-active');
});


buttonCloseModal.addEventListener('click', () => {
        modalBackgroundActive.classList.remove('bg-active');
});  