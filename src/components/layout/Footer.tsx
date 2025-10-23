import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  pages,
  projectsLink,
  downloads,
  socialLinks,
  support,
} from "@/utils/data";

const Footer = () => {
  // reusable footer section configuration
  const footerSections = [
    { title: "Pages", links: pages },
    { title: "Projects", links: projectsLink },
    { title: "Downloads", links: downloads },
    { title: "Support", links: support },
  ];

  return (
    <footer className="sm:pt-32 sm:mt-32 pt-20 mt-20 relative bg-gray-100">
      {/* Newsletter Section */}
      <div className="absolute left-1/2 sm:top-[10%] md:top-[12%] lg:top-[18%] -translate-x-1/2 -translate-y-full h-[160px] sm:h-[225px] w-[320px] sm:w-[600px] md:w-[750px] lg:w-[973px] mx-auto bg-gradient-to-r from-primary to-blue-400 rounded-2xl sm:px-12 px-4 flex flex-col items-center justify-center overflow-hidden">
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

        <form className="relative z-10 flex items-center justify-between mt-3 sm:mt-2 w-full max-w-[464px] h-[40px] sm:h-[52px] rounded-full shadow-xl ps-[22px] bg-white">
          <input
            className="w-full outline-none text-sm text-gray-600 placeholder-gray-600"
            type="email"
            placeholder="Enter your email"
          />
          <button className="flex justify-center items-center text-white min-w-[70px] h-[32px] sm:h-[36px] rounded-full bg-gradient-to-r from-green-400 to-blue-400 mx-1 sm:mx-2 group">
            <FaArrowRight className="transition-transform duration-300 ease-linear group-hover:translate-x-[7px]" />
          </button>
        </form>
      </div>

      {/* Footer Main Content */}
      <div className="container mx-auto px-4 pb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-6 mt-8 sm:mt-0">
          {/* Logo & Socials */}
          <div className="md:col-span-4">
            <Image
              src="/images/mspl-logo.png"
              alt="Achariya Group Logo"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-sm opacity-75 mb-3">
              (MSPL- Personnel Certification Body) was established to act as a
              Centre of Excellence in the field of Yoga. As the demand for Yoga
              is increasing rapidly at the global level, the Institute is
              dedicated to promoting holistic wellness.
            </p>

            <p className="font-semibold mb-2">Social Links</p>
            <ul className="flex gap-4 mt-2">
              {socialLinks.map(({ href, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-full border border-transparent bg-white hover:border-white bg-gradient-to-r hover:from-primary hover:to-green flex items-center justify-center text-green hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="md:col-span-2">
              <p className="text-lg font-semibold mb-3">{section.title}</p>
              <ul className="space-y-2 text-sm">
                {section.links.map((item, i) => (
                  <li key={i} className="flex gap-1 items-center group">
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 text-black transition-all duration-300 group-hover:text-primary" />
                    <Link
                      href={item.url}
                      target={"_blank"}
                      className="text-black font_medium transition-all duration-300 opacity-75 group-hover:underline group-hover:text-primary hover:opacity-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="p-3 bg-gradient-to-b to-primary from-green border-t text-white border-white mt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3">
        <p className="text-sm opacity-75 text-center">
          © {new Date().getFullYear()} All Rights Reserved{" "}
          <span className="font-semibold">
            (MSPL PERSONNEL CERTIFICATION BODY)
          </span>
        </p>
        <div className="flex gap-3">
          <Link
            href="/privacy-policy"
            className="text-sm opacity-75 hover:opacity-100 transition-all duration-300 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-conditions"
            className="text-sm opacity-75 hover:opacity-100 transition-all duration-300 hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
