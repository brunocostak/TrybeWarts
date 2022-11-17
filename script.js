const checkboxChecked = document.querySelector("body > main > section > form > fieldset:nth-child(9) > label > input[type=checkbox]");
const submitBtn = document.querySelector("body > main > section > form > fieldset.btn-container > button");
const textarea =document.querySelector("#evaluation-form > fieldset.comment-container > label > textarea");
const numCounter = document.querySelector("#counter")
const login = document.querySelector("body > header > form > input:nth-child(1)")
const senha = document.querySelector("body > header > form > input:nth-child(2)")
const submitLogin = document.querySelector("body > header > form >.btn.btn-primary")
const maxNum = 500;

checkboxChecked.addEventListener('change', isChecked)
function isChecked(){
    submitBtn.disabled = !checkboxChecked.checked;
}

textarea.addEventListener('keyup', counterChar);

function counterChar(){
    let numOfChar = textarea.value.length;
    let counter = maxNum - numOfChar
    numCounter.textContent = `Caracteres restantes: ${counter}/500`
}
submitLogin.addEventListener('click', ()=>{
    defaultLogin()
})
function defaultLogin(){
    if(login.value == 'tryber@teste.com' && senha.value == '123456'){
        alert('Olá, Tryber!')
    }else{
        alert('Email ou senha inválidos.')
    }
}