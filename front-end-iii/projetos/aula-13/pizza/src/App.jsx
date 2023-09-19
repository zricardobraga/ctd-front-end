import { useState } from "react"
import Pedido from "./components/Pedido/Index"
function App() {

  const [cancelaPedido, setCancelaPedido] = useState(true)

  const cancela = () => {
    setCancelaPedido((valorAnterior) => !valorAnterior)
    if(cancelaPedido) {
      alert("Pedido cancelado")
      console.log("Componente foi atualizado")
    }
    
  }

  return (
    <>
      <button onClick={cancela}>
        {cancelaPedido ? 'Cancela' : 'Mantem pedido'}
      </button>
      {cancelaPedido &&(<Pedido />)}
    </>
  )
}

export default App
