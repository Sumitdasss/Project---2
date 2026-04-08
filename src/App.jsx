
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Product from './Componants/product'
import Heading from './Componants/Heading'
import { Fttore } from './Componants/Fttore'
import Cart from './Componants/Cart'

function App() {
  

  return (
    <>
    <Heading/>
    <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    
    </Routes>
    <Fttore/>
    </>
  )
}

export default App
