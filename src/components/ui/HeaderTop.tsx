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
  <div className="container flex justify-between items-center">
    <div className='flex items-center gap-2'>
        <Link className='flex gap-1 font-medium items-center hover:underline transition-all duration-300' href="tel:+91 8930300615"><FaPhoneVolume size={'15px'} />+91 8930300615</Link>
        <Link className='flex gap-1 font-medium items-center hover:underline transition-all duration-300' href="mailto:yogacertificationbody@gmail.com"><IoMdMail size={'18px'} />yogacertificationbody@gmail.com</Link>
    </div>
    <div className='flex items-center'>
        <a className='py-2 text-sm px-3 border-r-[2px] hover:bg-green transition-all duration-300 border-l-[2px] border-white' href="">Login</a>
        <a className='py-2 text-sm px-3 border-r-[2px] border-white animate-bg-pulse' href="">Register</a> 
        <a className='py-2 text-sm px-3 border-r-[2px] hover:bg-green transition-all duration-300 border-white' href="">Book Exam</a>
        <a className='py-2 text-sm px-3 border-r-[2px] hover:bg-green transition-all duration-300 border-white' href="">Exam Calender</a>
    </div>
    <div className='flex'>
        <a className='p-2 border-r-[2px] border-l-[2px] border-white hover:bg-green transition-all duration-300' href=""><FaFacebookF  size={'20px'} /></a>
        <a className='p-2 border-r-[2px] border-white hover:bg-green transition-all duration-300' href=""><FaInstagram size={'20px'} /></a>
        <a className='p-2 border-r-[2px] border-white hover:bg-green transition-all duration-300' href=""><FaWhatsapp size={'20px'} /></a>
        <a className='p-2 border-r-[2px] border-white hover:bg-green transition-all duration-300' href=""><RiTwitterXFill size={'20px'} /></a>
        <a className='p-2 border-r-[2px] border-white hover:bg-green transition-all duration-300' href=""><FaLinkedinIn size={'20px'} /></a>
    </div>
  </div>
</div>

  )
}

export default HeaderTop