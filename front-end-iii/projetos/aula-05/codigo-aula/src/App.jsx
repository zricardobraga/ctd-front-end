import User from "./components/User/Index";
import styles from "./App.module.css";

//um array(lista) de objetos
const listaDeUsuarios = [
  {
    userName: "José Ricardo",
    image: "http://github.com/zricardobraga.png",
  },
  {
    userName: "José Ricardo clone1",
    image: "http://github.com/zricardobraga.png",
  },
  {
    userName: "José Ricardo clone2",
    image: "http://github.com/zricardobraga.png",
  },
];

function App() {
  return (
    <main className={styles.main}>
      {/* se o lista de usuários for verdadeiro, executa o map para percorrer e mostrar os objetos que estão dentro do <App/> */}
      <section id="card" className={styles.cardSection}>
        <h2>Usuários</h2>
        <div className={styles.cardContainer}>
          {listaDeUsuarios &&
            listaDeUsuarios.map((user, index) => {
              return <User key={index} user={user} />;
            })}
        </div>
      </section>
    </main>
  );
}

export default App;
