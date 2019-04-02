const formName = document.querySelector('.form__name');
const formEmail = document.querySelector('.form__email');
const outputName = document.querySelector('.form__output-name');
const outputEmail = document.querySelector('.form__output-email');
const button = document.querySelector('.form__standart-button');

formName.addEventListener('focusout', () => {
    if (formName.value == '') {
        outputName.style.opacity = '0';
        button.removeAttribute("disabled");
    } else if (!isNaN(formName.value)) {
        outputName.style.opacity = '1';
        button.setAttribute("disabled", "true");
        outputName.style.background = '#e75735';
        outputName.innerHTML = "error";
    } else {
        outputName.style.opacity = '1';
        outputName.style.background = '#4eb7a8';
        outputName.innerHTML = "thanks!";
        button.removeAttribute("disabled");
    }
});

formEmail.addEventListener('focusout', () => {
    if (formEmail.value == '') {
        outputEmail.style.opacity = '0';
        button.removeAttribute("disabled");
    } else if (!isNaN(formEmail.value) || !formEmail.value.includes("@", 0)) {
        outputEmail.style.opacity = '1';
        button.setAttribute("disabled", "true");
        outputEmail.style.background = '#e75735';
        outputEmail.innerHTML = "error";
    } else {
        outputEmail.style.opacity = '1';
        outputEmail.style.background = '#4eb7a8';
        outputEmail.innerHTML = "thanks!";
        button.removeAttribute("disabled");
    }
});