import Barra from './organism/navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './page/inicio'
import Productos from './page/productos'
import Carrito from './page/carrito'
import DetalleProducto from './page/detalleProducto'

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

    
    </Routes>
    </>

    
    
    
  )
}

export default App
