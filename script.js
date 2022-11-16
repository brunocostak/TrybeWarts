const checkboxChecked = document.querySelector("body > main > section > form > fieldset:nth-child(9) > label > input[type=checkbox]");
const submitBtn = document.querySelector("body > main > section > form > fieldset.btn-container > input");
const textarea =document.querySelector("#evaluation-form > fieldset.comment-container > label > textarea");
const numCounter = document.querySelector("#counter")
const maxNum = 500;

checkboxChecked.addEventListener('change', isChecked)
function isChecked(){
    submitBtn.disabled = !checkboxChecked.checked;
}

textarea.addEventListener('keyup', counterChar);

function counterChar(event){
    let numOfChar = textarea.value.length;
    let counter = maxNum - numOfChar
    numCounter.textContent = `Caracteres restantes: ${counter}/500`
}