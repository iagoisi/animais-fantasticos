export default function initModal() {

const buttonOpen = document.querySelector("[data-modal='open']");
const buttonClose = document.querySelector("[data-modal='close']");
const containerModal = document.querySelector("[data-modal='container']");
const classe = "ativo"

function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle(classe);
}

function clickOutModal(event) {
    if(event.target === this)
        toggleModal(event);
}

if(buttonOpen && buttonClose && containerModal) {





    buttonOpen.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutModal);
}
}

