import Barra from './organism/navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './page/inicio'
import Productos from './page/productos'

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

    
    </Routes>
    </>

    
    
    
  )
}

export default App
