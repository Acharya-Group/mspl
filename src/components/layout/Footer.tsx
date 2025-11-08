import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  footerLinks,
  socialLinks,
} from "@/utils/data";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Para from "../common/Para";

const Footer = () => {

  return (
    <footer className="sm:pt-32 sm:mt-32 pt-20 mt-20 relative bg-gray-100">
      {/* Newsletter Section */}
      <div className="absolute left-1/2 sm:top-[7%] md:top-[10%] lg:top-[12%] xl:top-[17%] -translate-x-1/2 -translate-y-full h-40 sm:h-[225px] w-[320px] sm:w-[600px] md:w-[750px] lg:w-[973px] mx-auto bg-linear-to-r from-primary to-green rounded-2xl sm:px-12 px-4 flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/images/left-newslatter.svg"
          alt="left-lines"
          className="absolute top-0 left-0 z-0 pointer-events-none"
          width={400}
          height={400}
        />
        <Image
          src="/images/right-newslatter.svg"
          alt="right-lines"
          className="absolute top-0 right-0 z-0 pointer-events-none"
          width={400}
          height={400}
        />

        <h2 className="text-white font-semibold text-3xl xl:text-4xl sm:mb-4 text-center z-10">
          Join Free Demo
        </h2>

        <form className="relative z-10 flex items-center justify-between mt-3 sm:mt-2 w-full max-w-[464px] h-10 sm:h-[52px] rounded-full shadow-xl ps-[22px] bg-white">
          <input
            className="w-full outline-none text-sm text-gray-600 placeholder-gray-600"
            type="email"
            placeholder="Enter your email"
          />
          <button className="flex justify-center items-center text-white min-w-[70px] h-8 sm:h-9 rounded-full bg-linear-to-r from-green-400 to-blue-400 mx-1 sm:mx-2 group">
            <FaArrowRight className="transition-transform duration-300 ease-linear group-hover:translate-x-[7px]" />
          </button>
        </form>
      </div>

      {/* Footer Main Content */}
      <div className="container mx-auto px-4 sm:pb-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 mt-8 sm:mt-0 relative">
          <div className="absolute flex flex-col items-end lg:bottom-[-5%] sm:bottom-0 bottom-[-4%] md:bottom-[-10%] right-4">
              <Image
                src="/images/ycb-logo.png"
                alt="newsletter icon"
                width={90}
                height={150}
              />
              <h3 className="sm:text-base text-sm font-semibold">Approved By:- Yoga Certification Board</h3>
              <Para className="text-[12px]" content="Ministry of AYUSH, Government of India"/>
          </div>
          {/* Logo & About Section */}
          <div className="md:col-span-4">
            <Image
              src="/images/mspl-logo.png"
              alt="MSPL Logo"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              (MSPL- Personnel Certification Body) was established to act as a
              Centre of Excellence in the field of Yoga. As the demand for Yoga
              is increasing rapidly at the global level, the Institute is
              dedicated to promoting holistic wellness.
            </p>
            <div className="flex gap-3 items-center">
            
        <Link className='flex font-semibold hover:text-primary items-center hover:underline transition-all duration-300' href="tel:+91 8930300615"><FaPhoneVolume className="text-primary me-1" size={'15px'} />+91 89303-00615</Link>
        <Link className='flex font-semibold hover:text-primary items-center hover:underline transition-all duration-300' href="tel:+91 9991777717"><FaPhoneVolume className="text-primary me-1" size={'15px'} />+91 99917-77717</Link>

             
            </div>
        <Link className='flex mt-1 font-semibold items-center hover:underline transition-all duration-300' href="mailto:yogacertificationbody@gmail.com"><IoMdMail className="text-primary me-1" size={'18px'} />yogacertificationbody@gmail.com</Link>

            <p className="font-semibold mt-3 text-gray-800">Follow Us</p>
            <ul className="flex gap-2 mt-2">
              {socialLinks.map(({ href, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-linear-to-br from-primary to-green text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Sections (Dynamic Mapping) */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="md:col-span-2">
              <p className="text-lg font-semibold mb-3 text-gray-800">
                {section.title}
              </p>
              <ul className="space-y-2 text-sm">
                {section.links.map((item, i) => (
                  <li key={i} className="flex gap-1 items-center group">
                    <FaArrowRight className="-rotate-45 text-gray-700 group-hover:rotate-0 group-hover:text-primary transition-all duration-300" />
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"}
                      className="text-gray-700 opacity-80 transition-all duration-300 group-hover:text-primary group-hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="p-3 bg-linear-to-b to-primary from-green border-t text-white border-white mt-8">
        <p className="text-sm opacity-75 text-center pb-8 lg:pb-0">
          © {new Date().getFullYear()} All Rights Reserved{" "}
          <span className="font-semibold">
            (MSPL PERSONNEL CERTIFICATION BODY)
          </span>
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;
