import User from './User'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const jose = "José Ricardo"
  const url = "https://conteudo.imguol.com.br/c/entretenimento/97/2023/04/03/super-mario-bros-o-filme-debuta-esta-semana-nos-cinemas-de-todo-o-brasil-1680537744827_v2_1x1.jpg"
  return (
    <>
      <User dev={jose}> 
        {url}
      </User> 
    </>
  )
}

export default App
