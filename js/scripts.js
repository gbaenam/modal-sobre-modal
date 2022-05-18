const buttonOpenModal = document.getElementById('button-open-modal'),
    modal = document.querySelector('.modal'),
    modalContent = modal.querySelector('.modal__content'),
    buttonOpenOtherModal = document.getElementById('button-open-other-modal'),
    modalNew = document.querySelector('.modalnew'),
    modalNewContent = document.querySelector('.modalnew__content'),
    buttonCloseOtherModal = document.getElementById('button-close-other-modal')


// Función abril modal
const openModal = e => {
    e.stopPropagation()
    if (e.target === buttonOpenModal) {
        modal.style.visibility = 'visible';
        modalContent.classList.add('modal__show')
    } else {
        modalNew.style.visibility = 'visible'
        modalNewContent.classList.add('modalnew__show')
    }
}

buttonOpenModal.addEventListener('click', openModal)

buttonOpenOtherModal.addEventListener('click', openModal)


// Función cerrar modal
const closeModal = e => {
    e.stopPropagation()
    if (e.target === modal) {
        modalContent.classList.remove('modal__show')
        setTimeout(() => modal.style.visibility = 'hidden',1000)
    } else if (e.target === modalNew || e.target === buttonCloseOtherModal) {
        modalNewContent.classList.remove('modalnew__show')
        setTimeout(() => modalNew.style.visibility = 'hidden',1000)

        modalContent.classList.remove('modal__show')
        setTimeout(() => modal.style.visibility = 'hidden',1500)
    }
}

modal.addEventListener('click', closeModal)

modalNew.addEventListener('click', closeModal)


