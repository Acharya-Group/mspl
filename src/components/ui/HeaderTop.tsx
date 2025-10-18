import React from 'react'
import { FaFacebookF  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';
const HeaderTop = () => {
  return (
  <div className="bg-primary text-white">
  <div className="container flex sm:justify-between justify-center flex-wrap items-center w-full">
    <div className='flex items-center col1 gap-2 order-3 lg:order-1 pb-3 pt-2'>
        <Link className='flex text-xs gap-1 sm:text-sm font-medium items-center hover:underline transition-all duration-300' href="tel:+91 8930300615"><FaPhoneVolume size={'15px'} />+91 8930300615</Link>
        <Link className='flex text-xs gap-1 sm:text-sm font-medium items-center hover:underline transition-all duration-300' href="mailto:yogacertificationbody@gmail.com"><IoMdMail size={'18px'} />yogacertificationbody@gmail.com</Link>
    </div>
    <div className='flex col1 items-center bg-blue-300 lg:!bg-transparent order-1 lg:order-2'>
        <a className='py-2 text-sm px-3 border-r-[2px] hover:bg-blue-800 transition-all duration-300 border-l-[2px] border-white' href="">Login</a>
        
        <a href='' className="relative flex py-2 px-3 hover:bg-blue-800 border-r-[2px] border-white"><span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-white opacity-75"></span><span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>Register</a>
        <a className='py-2 text-sm px-3 border-r-[2px] hover:bg-blue-800 transition-all duration-300 border-white' href="">Book Exam</a>
        <a className='py-2 text-sm px-3 border-r-[2px] hover:bg-blue-800 transition-all duration-300 border-white' href="">Exam Calender</a>
    </div>
    <div className='flex col1 sm:border-b-[2px] lg:border-b-0 lg:order-3 border-white order-2'>
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