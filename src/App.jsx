
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Product from './Componants/product'
import Heading from './Componants/Heading'
import { Fttore } from './Componants/Fttore'
import Cart from './Componants/Cart'
import PCBuilder from './Componants/PCBuilder'
import SelectProductPage from './Componants/SelectProductPage'

function App() {
 
  return (

    <>
    
    <Heading/>
    <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/pc-builder" element={<PCBuilder />} />
    <Route path="/select-product" element={<SelectProductPage />} />
    
    </Routes>
    <Fttore/>
    
    </>
  )
}

export default App
