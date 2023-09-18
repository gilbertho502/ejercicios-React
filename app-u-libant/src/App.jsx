
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
// import { BootstrapComp } from './components/BootstrapComp'
// import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import QuienSoy from './pages/QuienSoy'
import UseEstado from './pages/UseEstado'

function App() {


  return (
    <>
    <h1>React </h1>

    <Router>
      <div>
        <Link to='/'>
          <Button>Inicio</Button>
        </Link>
        <Link to='/contacto'>
          <Button>Contacto</Button>
        </Link>
        <Link to='quien-soy'>
        <Button>Quien Soy</Button>
        </Link>
        <Link to='usar-estado'>
        <Button>Use State</Button>
        </Link>
      </div>

      <Routes>
        {/* <Route exact path='/' element={<Inicio/>} ></Route> */}
        <Route exact path='/contacto' element={<Contacto/>}>
        </Route>
        <Route exact path='/quien-soy' element={<QuienSoy/>}>
        </Route>
        <Route exact path='/usar-estado' element={<UseEstado/>}></Route>
      </Routes>
    </Router>
    
    {/* <BootstrapComp/> */}
   </>
  )
}

export default App
