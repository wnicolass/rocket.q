import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//take all buttons that has been read
const checkButtons = document.querySelectorAll(".actions a.check");

//adding a click event that opens the modal in every button that have a check class
checkButtons.forEach(button => {
    button.addEventListener('click', handleClick);
});

//take all buttons that has ben closed
const deleteButtons = document.querySelectorAll(".actions a.delete");

//adding a click event that opens the modal in every button that have a delete class
deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
    event.preventDefault();
    const text = check ? "Mark as read" : "Delete";
    const slug = check ? "check" : "delete";
    const roomId = document.querySelector('#room-id').dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} this question`
    modalDescription.innerHTML = `Are you sure that you wish to ${text.toLowerCase()} this question?`;
    modalButton.innerHTML = `Yes, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    modal.open();
}
