function temaEscuro() {
    let temaBody = document.querySelector('body');
    let temaCartao = document.querySelectorAll('.container');
    console.log(temaCartao); 
    temaBody.classList.toggle('dark');
    temaCartao.classList.replace('dark');


    // menu.style.backgroundColor = 'white';
}