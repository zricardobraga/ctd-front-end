// Este método nos permite criar elementos dentro do React.
const e = React.createElement;


// Este é um componente React!
const Button = () => e(
    'button',
    { onClick: () => alert("Você clicou!") },
    'Clique aqui!'
);


// Selecionamos o div dentro do nosso index.html
const domContainer = document.querySelector('#button_container');




// Aqui chamamos um método do React que cria a base
// para podermos utilizar a biblioteca dentro do nosso  <div>.
const root = ReactDOM.createRoot(domContainer);


// Com o método render, vamos exibir o componente Button
root.render(e(Button));
