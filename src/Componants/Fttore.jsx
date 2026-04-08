import React from 'react'
import img1 from '/src/assets/Logo.png'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa6";

export const Fttore = () => {
  return (
    <div className="h-[430px] bg-[#F5F5F3]">
    <div className='max-w-[1440px] mx-auto '>
      
      <div className="flex justify-start gap-x-30">
         <div className="">
          <h4 className='text-[23px] font-bold text-[#262626] pt-[50px]'>MENU</h4>

          <ul className='text-[17px] font-normal text-[#6D6D6D] leading-10'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <li>Journal</li>
            
          </ul>
        </div>
        <div className="">
          <h4 className='text-[23px] font-bold text-[#262626] pt-[50px]'>SHOP</h4>

          <ul className='text-[17px] font-normal text-[#6D6D6D] leading-10'>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
            
          </ul>
        </div>
        <div className="">
           <h4 className='text-[23px] font-bold text-[#262626] pt-[50px]'>HELP</h4>

          <ul className='text-[17px] font-normal text-[#6D6D6D] leading-10'>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Special E-shop</li>
            <li>Shipping</li>
            <li>Secure Payments</li>
          
          </ul>
        </div>
        <div className="">
           <h4 className='text-[23px] font-bold text-[#262626] pt-[50px]'>(052) 611-5711<br></br>
company@domain.com</h4>

          <ul className='text-[17px] font-normal text-[#6D6D6D] leading-10'>
            <li>575 Crescent Ave. Quakertown, PA 18951</li>
          
            </ul>
        </div>
        <div className="pt-[50px]">
<img src={img1} alt=""  className=''/>
        </div>
       


      </div>

<div className="flex justify-between mt-[50px]">
  <div className="flex gap-x-9 text-[23px]">
    <FaFacebookF/>
    <FaLinkedinIn/>
    <FaInstagram/>
  </div>
  <div className="">
    <p className='text-[17px] font-normal text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
  </div>
</div>

    </div>

    </div>
  )
}
