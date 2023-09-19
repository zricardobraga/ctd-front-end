import { useState } from "react";
import styles from "./app.module.css";

function App() {
  //states que serão usados para o preenchimento do form
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //handler dos eventos de cada input
  const onChangeUserName = (event) => setUserName(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  //handler do evento do onSubmit
  const onSubmitForm = (event) => {
    event.preventDefault();
    // Realizamos as validações com os valores armazenados
    // no estado
    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);
    // Se ao menos uma das validações for falsa
    // exibimos uma mensagem de erro
    if (!isPasswordValid || !isUsernameValid) {
      alert("Alguns dos dados inseridos não são corretos");
    } else {
      // No momento, exibiremos apenas o nome de usuário
      alert(`Bem-vindo: ${userName}`);
    }
  };

  //função que valida o nome do usuário
  const validateUserName = (userName) => {
    // Apaga os espaços em branc
    const withoutSpaces = userName.trim();
    return withoutSpaces >= 3 ? true : false;
  };

  //função que valida o password
  const validatePassword = (password) => {
    // Apaga os espaços em branco
    const withoutSpaces = password.trim();
    // Separamos a string em um array para uso posterior
    // percorra-o e valide se existe ao menos um número
    const passwordAsArray = withoutSpaces.split("");
    // Some nos devolve true se ao menos uma das
    // iterações for verdadeira
    const hasNumber = passwordAsArray.some((char) => {
      // Se o valor for NaN, ele não é um número
      if (isNaN(char)) {
        return false;
      } else {
        return true;
      }
    });
    // Validamos a extensão, e que exista ao menos um número
    if (withoutSpaces.length > 5 && hasNumber) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Login</h1>
          <form onSubmit={onSubmitForm} className={styles.form}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={userName}
              onChange={onChangeUserName}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={onChangePassword}
            />
            <button disabled={userName === "" && password === ""} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
export default App;
