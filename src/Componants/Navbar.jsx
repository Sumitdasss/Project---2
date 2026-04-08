import React from 'react'
import img1 from'/src/assets/OREBI©.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div>
        <div className="max-w-[1440px] bg-white mx-auto ">
            <div className="flex justify-between items-center h-[80px]">
                <div className="w-[40%] ">
                    <img src={img1} alt="" />
                </div>
                <div className="w-[60%] ">
                    <ul className='flex gap-x-10 duration-300'>
<Link to="/" className="font-medium text-[18px] text-[#767676] hover:text-[#222222] hover:font-bold cursor-pointer transition-all duration-700 ease-in-out">
  Home
</Link>
<li className="font-medium text-[18px] text-[#767676] hover:text-[#222222] hover:font-bold cursor-pointer transition-all duration-700 ease-in-out">
  About
</li>
<li className="font-medium text-[18px] text-[#767676] hover:text-[#222222] hover:font-bold cursor-pointer transition-all duration-700 ease-in-out">
  Contact
</li>
<Link to="/shop"  className="font-medium text-[18px] text-[#767676] hover:text-[#222222] hover:font-bold cursor-pointer transition-all duration-700 ease-in-out">
  Shop
</Link>
                 

                        
                    </ul>
                </div>
            </div>
        </div>






    </div>
  )
}

export default Navbar