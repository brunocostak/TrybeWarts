const checkboxChecked = document.querySelector("body > main > section > form > fieldset:nth-child(9) > label > input[type=checkbox]")
const submitBtn = document.querySelector("body > main > section > form > fieldset.btn-container > input")

checkboxChecked.addEventListener('change', isChecked)
function isChecked(){
    submitBtn.disabled = !checkboxChecked.checked;
}