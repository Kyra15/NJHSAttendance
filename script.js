const storageInput = document.querySelector('#stud');
const button = document.querySelector('#submitBtn');
const storedInput = localStorage.getItem('textinput')


if (storageInput) {
    storageInput.value = storedInput
}

const saveToLocalStorage = (e) => {
    e.preventDefault();
    localStorage.setItem('textinput', storageInput.value)
}

button.addEventListener('click', saveToLocalStorage)
