import Barra from './organism/navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './page/inicio'
import Productos from './page/productos'
import Carrito from './page/carrito'
import DetalleProducto from './page/detalleProducto'
import Login from './page/login'
import Registro from './page/registro'
import Pago from './page/pago'
import Admin from './page/admin'
import Operador from './page/operador'
import Reparto from './page/reparto'

function App() {
  

  return (
    <>

    <Barra />

    <Routes>
      <Route
      path='/inicio'
      element={<Inicio/>}/>
       <Route
      path='/productos'
      element={<Productos/>}/>
      <Route
      path='/carrito'
      element={<Carrito/>}/>
      <Route path='/producto/:id'
      element={<DetalleProducto/>}/>
      <Route path='/login' 
      element={<Login/>}/>
      <Route path='/registro' 
      element={<Registro/>}/>
      <Route path='/pago' 
      element={<Pago/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/operador' element={<Operador/>}/>
      <Route path='/reparto' element={<Reparto/>}/>

    
    </Routes>
    </>

    
    
    
  )
}

export default App
