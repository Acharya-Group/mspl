"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navDropdowns } from "@/utils/data";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import Image from "next/image";

const Nav = () => {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const isLinkActive = (href: string) => pathname === href;

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="bg-[#14AEE4] text-white shadow">
        <div className="container mx-auto !px-3 sm:!px-4">
          <div className="flex justify-between items-center py-4 sm:py-2 lg:py-0">
            {/* Logo for mobile */}
            <div className="bg-white sm:p-2 py-1 px-2 flex items-center gap-2 lg:hidden rounded-md">
              <Image
                height={10}
                width={50}
                className="object-contain h-auto w-[70px] sm:w-[80px] md:w-[80px]"
                src="/images/group-logo.png"
                alt="logo"
              />
              <div>
                <h1 className="text-[10px] font-nunito font-semibold text-blue">
                  MSPL - PERSONNEL CERTIFICATION BODY
                </h1>
                <h3 className="text-[8px] text-black lg:text-base font-semibold">
                  Approved By: (YCB), (Ministry Of Ayush, Govt Of India)
                </h3>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className={`pb-1 ${
                    isLinkActive("/")
                      ? "border-b-2 border-white text-white"
                      : "text-white/90"
                  } hover:text-white transition`}
                >
                  Home
                </Link>
              </li>

              {navDropdowns.map((dropdown, index) => (
                <li
                  key={index}
                  className="relative group py-3"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-white font-medium"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === index ? null : index
                      )
                    }
                  >
                    {dropdown.title}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  {activeDropdown === index && (
                    <div className="absolute left-0 top-full w-52 z-[1200] max-h-[220px] overflow-y-auto dropdownScrollbar bg-white rounded shadow-md">
                      <div className="w-full">
                        {dropdown.links.map((link, i) =>
                          link.type === "submenu" ? (
                            <div key={i}>
                              <div className="px-4 pt-2 font-semibold text-gray-700 cursor-default">
                                {link.name}
                              </div>
                              {link.sublinks?.map((sublink, j) => (
                                <Link
                                  key={j}
                                  href={sublink.href ?? "#"}
                                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={i}
                              href={link.href ?? "#"}
                              className="relative group block px-4 py-2 z-0 text-sm text-gray-700 overflow-hidden 
  before:content-[''] before:absolute before:top-0 before:left-0 before:h-full 
  before:w-[2%] before:bg-primary before:transition-all before:duration-500 
  hover:before:w-full hover:text-white"
                            >
                              <span className="group-hover:!text-black z-10 relative">{link.name}</span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}

              <li>
                <Link
                  href="/contact"
                  className={`pb-1 ${
                    isLinkActive("/contact")
                      ? "border-b-2 border-white text-white"
                      : "text-white"
                  } hover:text-white transition`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpenSidebar(true)}
              className="text-white focus:outline-none lg:hidden"
            >
              <HiOutlineMenu size={30} />
            </button>

            {/* Pay Fees Button */}
            <Link className="hidden lg:inline" href="/">
              <button className="text-white uppercase bg-green py-3 px-2 focus:outline-none">
                Pay Fees
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black/40 z-[1200] transition-opacity duration-300 ${
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenSidebar(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-[1300] transform transition-transform duration-300 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="text-gray-800 text-lg font-semibold">Menu</span>
          <button onClick={() => setOpenSidebar(false)}>
            <HiOutlineX size={24} className="text-gray-700" />
          </button>
        </div>

        <ul className="flex flex-col">
          <li>
            <Link
              href="/"
              className={`block px-5 py-3 text-sm font-medium ${
                isLinkActive("/")
                  ? "text-[#14AEE4] bg-gray-100"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#14AEE4]"
              }`}
              onClick={() => setOpenSidebar(false)}
            >
              Home
            </Link>
          </li>

          {navDropdowns.map((dropdown, index) => (
            <li key={index}>
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                {dropdown.title}
                {openDropdown === index ? (
                  <HiChevronUp className="w-5 h-5" />
                ) : (
                  <HiChevronDown className="w-5 h-5" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="bg-gray-50">
                  {dropdown.links.map((link, i) =>
                    link.type === "submenu" ? (
                      <li key={i}>
                        <button
                          className="w-full flex justify-between items-center px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() =>
                            setOpenSubDropdown(
                              openSubDropdown === i ? null : i
                            )
                          }
                        >
                          {link.name}
                          {openSubDropdown === i ? (
                            <HiChevronUp className="w-4 h-4" />
                          ) : (
                            <HiChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openSubDropdown === i ? "max-h-[400px]" : "max-h-0"
                          }`}
                        >
                          <ul className="bg-white">
                            {link.sublinks?.map((sublink, j) => (
                              <li key={j}>
                                <Link
                                  href={sublink.href}
                                  className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#14AEE4]"
                                  onClick={() => setOpenSidebar(false)}
                                >
                                  {sublink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ) : (
                      <li key={i}>
                        <Link
                          href={link.href ?? "#"}
                          className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#14AEE4]"
                          onClick={() => setOpenSidebar(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
