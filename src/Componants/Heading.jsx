import React, {  useState } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { selectTotalItem } from '../features/counter/counterSlice'
import { useSelector } from 'react-redux'

import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const Heading = () => {
const totalItem = useSelector(selectTotalItem);

 

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
  

  return (
    <div>
      <Navbar />
      <div className="bg-[#F5F5F3] py-8 px-4">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          
        
          <div className="relative">
            <div 
              className="flex items-center gap-1 px-2 py-2 bg-white cursor-pointer" 
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <HiBars3BottomLeft className="text-[20px]" />
              <p className="text-[17px] text-[#262626]">Shop by Category</p>
            </div>

            <div className={`absolute left-0 z-40 top-12 mt-2 w-[200px] bg-[#262626] overflow-hidden shadow-lg transition-all duration-500 ${isOpen2 ? "max-h-[320px]" : "max-h-0"}`}>
              <ul className="flex flex-col text-white/70">
                <Link to="/accessories" className="px-6 py-4 border-b border-[#D8D8D8]/30 focus:outline-none focus:text-white focus:pl-8 duration-500  text-sm">Accessories</Link>
                <Link to="/banner" className="px-6 py-4 border-b border-[#D8D8D8]/30 focus:outline-none focus:text-white focus:pl-8  duration-500  text-sm">Furniture</Link>
                <Link to="/" className="px-6 py-4 border-b border-[#D8D8D8]/30 focus:outline-none focus:text-white focus:pl-8  duration-500  text-sm">Electronics</Link>
                <Link  className="px-6 py-4 border-b border-[#D8D8D8]/30 focus:outline-none focus:text-white focus:pl-8  duration-500  text-sm">Clothes</Link>
                <Link  className="px-6 py-4 border-b border-[#D8D8D8]/30 focus:outline-none focus:text-white focus:pl-8  duration-500  text-sm">Bags</Link>
                <Link  className="px-6 py-4 border-b border-[#D8D8D8]/30 focus:outline-none focus:text-white focus:pl-8 duration-500 text-sm">Home appliances</Link>
              </ul>
            </div>
          </div>

      
          <div className="relative w-[40%] md:w-[600px]">
            <input
              type="text"
              placeholder="Search Products"
              
              className="w-full h-[50px] px-5 bg-white text-sm outline-none placeholder:text-[#C4C4C4]"
            />
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#262626] cursor-pointer" /></div>
          
         

          
          <div className="flex items-center gap-8 text-[#262626]">
            <div className="relative">
              <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <FaUser className="text-[20px]" />
                <FaCaretDown className={`text-[20px] duration-500 ${isOpen ? "rotate-180" : ""}`} />
              </div>

              <div className={`absolute right-0 z-40 top-10 mt-2 w-[150px] bg-[#262626] rounded-md overflow-hidden shadow-lg transition-all duration-500 ${isOpen ? "max-h-[270px]" : "max-h-0"}`}>
                <ul className="flex flex-col text-white/70">
                  <Link to="/profile" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Profile</Link>
                  <Link to="/signup" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Sign Up</Link>
                  <Link to="/login" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Login</Link>
                </ul>
              </div>
            </div>
            
            <Link to="/cart" className="relative cursor-pointer">
              <FaShoppingCart className="text-[25px]" />
              <span className='absolute rounded-full flex justify-center items-center -top-[10px] -right-[15px] w-[20px] h-[20px] font-medium text-white bg-[#222222]'>
                {totalItem}
              </span>
            </Link>



          </div>
 </div>
        </div>
      </div>
    
  )
}

export default Heading;