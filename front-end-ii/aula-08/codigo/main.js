window.addEventListener('load', () => console.log("carregou"));

const userEmailRef = document.querySelector('#userEmail');
const userPasswordRef = document.querySelector('#userPassword');
const loginBtnRef = document.querySelector('#loginBtn')

var userData = {
    email: '', 
    senha: '' 
}

function validarEmail(email) {
    userData.email = email;
}

function validarSenha(senha) {
    userData.senha = senha;
}

function login(event) {
    event.preventDefault();
    console.log(userData);
}

userEmailRef.addEventListener('keyup', (event) => validarEmail(event.target.value));
userPasswordRef.addEventListener('keyup', (event) => validarSenha(event.target.value));
loginBtnRef.addEventListener('click', (event) => login(event));