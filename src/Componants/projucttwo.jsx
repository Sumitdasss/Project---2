import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/counter/counterSlice'

const Projucttwo = ({Product}) => {
  const dispatch = useDispatch();

  if (!Product) return null; 
  return (
    <div className="max-w-[1440px] mx-auto">
  <div className="max-w-[350px] group relative cursor-pointer mb-10">
      <div className="relative overflow-hidden ">
    <img 
  src={Product.images[0]} 
  alt={Product.title}
  className="w-full h-[370px] object-contain"
/>
        
        <div className="absolute top-5 left-5 bg-[#262626] text-white text-[14px] font-bold px-8 py-2">
          New
        </div>

        <div className="absolute bottom-[-150px] left-0 w-full bg-white p-6 transition-all duration-500 group-hover:bottom-0">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-end gap-4 text-[#767676] hover:text-[#262626] hover:font-bold duration-300">
              Add to Wish List <FaHeart className="text-black" />
            </li>
            <li className="flex items-center justify-end gap-4 text-[#767676] hover:text-[#262626] hover:font-bold duration-300">
              Compare <TfiReload className="text-black font-bold" />
            </li>
            <button onClick={()=>dispatch(addToCart(Product))}   className="flex items-center justify-end gap-4 text-[#262626] font-bold duration-300">
              Add to Cart <FaShoppingCart className="text-black" />
            </button>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-[20px] font-bold text-[#262626]">{Product.title}</h3>
          <p className="text-[#767676] text-[16px] mt-2">{Product.color}</p>
        </div>
        <div className="text-right">
          <p className="text-[16px] text-[#262626] font-bold">${Product.price}</p>
          <p className="text-[#767676] text-[14px] line-through">
            {Product.discountPercentage}% Off
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projucttwo