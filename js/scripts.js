const modal = document.querySelector('.modal'),
    modalContent = modal.querySelector('.modal__content'),
    openModal = document.querySelector('.wrapper__button')


openModal.addEventListener('click', e => {
    e.stopPropagation()
    modal.style.visibility = 'visible';
    modalContent.classList.add('modal__show')
})

modal.addEventListener('click', e => {
    e.stopPropagation()
    if (e.target.classList.contains('modal')) {
        modalContent.classList.remove('modal__show')
        modal.style.visibility = 'hidden'
    }
})


