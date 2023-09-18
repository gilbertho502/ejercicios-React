import { useState } from 'react'
import sonriente from './assets/sonriente.png'
import './App.css'

function App() {

  const estilo1 = {backgroundColor: 'white', color: 'black'}
  const estilo2 = {backgroundColor: 'green'}

  const [contenido, setContenido ] = useState(' ')
  const [color, setColor] = useState(estilo1)

  const escribir = ()=> {
    setContenido('Gilbert')
  }
  const imagen = () => {
    setContenido(<img src={sonriente} />)
  }
  const fondo = () => {
    setColor (estilo2)
  }
  const reiniciar = () => {
    setContenido('')
    setColor(estilo1)
  }

  return (
    <div className="App">
      <button onClick={()=> escribir()}>Boton 1</button>
      <button onClick={()=>imagen()}>Boton 2</button>
      <button onClick={()=>fondo()}>Boton 3</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <div className='box' style={color}>
        {contenido}
      </div>
      
    </div>
  )
}

export default App
