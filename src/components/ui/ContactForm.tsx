"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-gray-50 overflow-hidden py-10 lg:py-16">
      {/* Decorative big circle */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-b to-primary from-green bottom-1/2 right-1/2 transform translate-x-[-40%] translate-y-[38%]"></div>
      <div className="absolute w-[360px] h-[360px] bg-gray-50 rounded-full bottom-[50%] right-[50%] transform translate-x-[-40%] translate-y-[38%]"></div>

      <div className="container">
          <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 relative z-10">
            {/* Contact Info */}
            <div className="p-10 relative">
              <h3 className="text-2xl font-semibold text-teal-500 mb-4">Let's get in touch</h3>
              <p className="text-gray-600 mb-6">
                Explore our contact options and reach out to us for yoga certification inquiries,
                health tips, or general questions. Our team is here to guide you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-primary mr-3" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="text-primary mr-3" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhone className="text-primary mr-3" />
                  <p>123-456-789</p>
                </div>
              </div>
              {/* Social Media */}
              <div className="mt-8">
                <p className="text-gray-600 mb-2">Connect with us:</p>
                <div className="flex space-x-2">
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-green text-white hover:scale-105 transition-transform">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-green text-white hover:scale-105 transition-transform">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-green text-white hover:scale-105 transition-transform">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-green text-white hover:scale-105 transition-transform">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-primary to-green relative p-10 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute w-[130px] h-[130px] rounded-full bg-gradient-to-tr from-green animate-pulse to-transparent top-[130px] -right-10"></div>
              <div className="absolute w-[80px] h-[80px] rounded-full bg-gradient-to-tr from-primary animate-pulse to-transparent top-2 right-8"></div>
              <div className="absolute w-6 h-6 bg-primary rotate-45 top-12 -left-3"></div>
              <form className="relative z-10 space-y-4" autoComplete="off">
                <h3 className="text-white text-xl font-semibold mb-4">Contact us</h3>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white resize-none focus:outline-none focus:ring-2 focus:ring-white transition min-h-[120px]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-teal-500 font-semibold py-2 rounded-md hover:bg-transparent hover:text-white border border-white transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ContactForm;
