import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const messege = document.querySelector(".feedback-form textarea");
const STORAGE_KEY = "feedback-form-state";

const userData = {
    "email": "",
    "messege": ""
}

form.addEventListener("submit", onFormSubmit);
email.addEventListener("input", throttle(onTextareaInput, 500));
messege.addEventListener("input", throttle(onTextareaInput, 500));
 
populateTextarea()

function onFormSubmit(evt) {
evt.preventDefault();

evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
userData.email = email.value;
userData.messege = messege.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}



function populateTextarea() {
    const saveMessenge = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(saveMessenge);

    if(parseData) {
        console.log(parseData)
        email.value = parseData.email || ""
        messege.value = parseData.messege || ""
        }
}

