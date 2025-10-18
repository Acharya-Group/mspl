import React from 'react'
import { FaFacebookF  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';
const HeaderTop = () => {
  return (
  <div className="bg-primary text-white">
  <div className="flex sm:justify-between justify-center flex-wrap items-center w-full sm:px-3">
    <div className='flex items-center col1 gap-2 order-3 lg:order-1 pb-3 sm:pt-2 lg:pt-0 lg:pb-0 pt-0 px-3 sm:px-0'>
        <Link className='flex text-xs gap-1 sm:text-sm font-medium items-center hover:underline transition-all duration-300' href="tel:+91 8930300615"><FaPhoneVolume size={'15px'} />+91 8930300615</Link>
        <Link className='flex text-xs gap-1 sm:text-sm font-medium items-center hover:underline transition-all duration-300' href="mailto:yogacertificationbody@gmail.com"><IoMdMail size={'18px'} />yogacertificationbody@gmail.com</Link>
    </div>
    <div className='flex col1 justify-center w-full sm:w-[unset] items-center bg-blue-300 lg:!bg-transparent order-1 lg:order-2'>
        <a className='py-3 sm:py-2 text-xs sm:text-sm px-2 sm:px-3 border-r-[2px] hover:bg-blue-800 transition-all duration-300 border-l-[2px] border-white' href="">Login</a>

        <a href='' className="relative text-xs sm:text-sm flex py-3 sm:py-2 px-3 hover:bg-blue-800 border-r-[2px] border-white">
          <span className="absolute inline-flex lg:h-3 h-2 w-2 lg:w-3 animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex lg:h-3 h-2 w-2 lg:w-3 rounded-full bg-white"></span>Register
          </a>
        <a className='py-3 sm:py-2 text-xs sm:text-sm px-2 sm:px-3 border-r-[2px] hover:bg-blue-800 transition-all duration-300 border-white' href="">Book Exam</a>
        <a className='py-3 sm:py-2 text-xs sm:text-sm px-2 sm:px-3 border-r-[2px] hover:bg-blue-800 transition-all duration-300 border-white' href="">Exam Calender</a>
    </div>
    <div className='flex col1 sm:border-b-[2px] lg:border-b-0 lg:order-3 border-white order-2 pt-2 sm:pt-0 sm:pb-0 pb-1 px-3 sm:px-0'>
        <a className='p-2 sm:border-r-[2px] sm:border-l-[2px] border-white hover:bg-blue-700 transition-all duration-300' href=""><FaFacebookF  size={'20px'} /></a>
        <a className='p-2 sm:border-r-[2px] border-white hover:bg-pink-500 transition-all duration-300' href=""><FaInstagram size={'20px'} /></a>
        <a className='p-2 sm:border-r-[2px] border-white hover:bg-green transition-all duration-300' href=""><FaWhatsapp size={'20px'} /></a>
        <a className='p-2 sm:border-r-[2px] border-white hover:bg-blue-700 transition-all duration-300' href=""><RiTwitterXFill size={'20px'} /></a>
    </div>
  </div>
</div>

  )
}

export default HeaderTop