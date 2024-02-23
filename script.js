document.addEventListener("DOMContentLoaded", init, false);

let stud;

function init() {
    stud = document.querySelector("#stud");

    let elem = Array.from(document.querySelectorAll("#form_stud textarea"));
    elem.forEach(e => e.addEventListener("input", handleChange, false));

    let cached = getForm();
    if (cached) {
        console.log("cached retrieve");
        stud.value = cached.stud;
    }

    document.querySelector('#mainForm').addEventListener('submit', () => {
    window.localStorage.removeItem('form');
  }, false);
}

function handleChange(e) {
    console.log('handleChange');
    let form = {};
    form.stud = stud.value;
    saveForm(form);
}

function saveForm(form) {
    let f = JSON.stringify(form);
    window.localStorage.setItem('stud', f);
}

function getForm() {
    let f = window.localStorage.getItem('stud');
    if (f) return JSON.parse(f);
}
