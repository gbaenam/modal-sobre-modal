const buttonOpenModal = document.getElementById('button-open-modal'),
    modal = document.querySelector('.modal'),
    modalContent = modal.querySelector('.modal__content'),
    buttonOpenOtherModal = document.getElementById('button-open-other-modal'),
    modalNew = document.querySelector('.modalnew'),
    modalNewContent = document.querySelector('.modalnew__content'),
    buttonCloseOtherModal = document.getElementById('button-close-other-modal')


// Función abril primer modal
const openModal = e => {
    e.stopPropagation()
    modal.style.visibility = 'visible';
    modalContent.classList.add('modal__show')
}
buttonOpenModal.addEventListener('click', openModal)


// Función cerrar primer modal
const closeModal = e => {
    e.stopPropagation()
    if (e.target.classList.contains('modal') || (e.target.classList.contains('modalnew__button'))) {
        modalContent.classList.remove('modal__show')
        modal.style.visibility = 'hidden'
    }
}
modal.addEventListener('click', closeModal)


// Función abrir segundo modal
const openOtherModal = e => {
    e.stopPropagation()
    modalNew.style.visibility = 'visible'
    modalNewContent.classList.add('modalnew__show')
}
buttonOpenOtherModal.addEventListener('click', openOtherModal)


// Función cerrar segundo modal
const closeOtherModal = e => {
    e.stopPropagation()
    modalNewContent.classList.remove('modalnew__show')
    modalNew.style.visibility = 'hidden'
    closeModal(e)
}
buttonCloseOtherModal.addEventListener('click', closeOtherModal)

