import { useEffect, useState } from "react"

const UseEstado = () =>{
    const[stateCar, setStateCar] = useState(false)
    const [contar, setContar] = useState(0)
  
    const encenderApagar = ()=>{
      setStateCar(!stateCar);
      setContar(contar +1)
    }
    useEffect(()=>{
    }, [contar])
  
    return (
        <>
        <h3>El carro esta: {stateCar ? "Encendido": "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}> Encender / Apagar</button>
        </>
    )
}

export default UseEstado