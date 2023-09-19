import { useEffect, useState } from "react";

export default function Pedido() {
    const [pizza, setPizza] = useState("")
    
    useEffect(() => {
        setTimeout(() => {setPizza("Pizza")
        console.log("Componente foi atualizado")
        }, 2000)
    }, [])

    return (
            <h1>Seu pedido: {pizza}</h1>            
    );
}