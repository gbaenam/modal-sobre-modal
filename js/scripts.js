const openModal = document.querySelector('.wrapper__button'),
    modal = document.querySelector('.modal'),
    modalContent = modal.querySelector('.modal__content'),
    openOtherModal = document.querySelector('.modal__button'),
    modalNew = document.querySelector('.modalnew'),
    modalNewContent = document.querySelector('.modalnew__content'),
    modalNewButton = document.querySelector('.modalnew__button')


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

openOtherModal.addEventListener('click', e => {
    e.stopPropagation()
    modalNew.style.visibility = 'visible'
    modalNewContent.classList.add('modalnew__show')
})

modalNewButton.addEventListener('click', e => {
    e.stopPropagation()
    modalNewContent.classList.remove('modalnew__show')
    modalNew.style.visibility = 'hidden'
})

