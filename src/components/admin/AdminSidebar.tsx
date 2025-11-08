'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowRight } from "react-icons/fa";
import { DiApple } from "react-icons/di";
import {
  Home,
  MessageSquare,
  Image as LucideImage,
  Mail,
  PlusSquare,
  List,
  X,
  User,
  Video,
  FileText,
  LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

type MenuItem = {
  name: string
  href?: string
  icon:LucideIcon
  children?: MenuItem[]
}

interface AdminSidebarProps {
  isSidebarOpen: boolean
  onClose: () => void
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', href: '/admin', icon: Home },
  {
    name: 'Profile',
    icon: User,
    children: [{ name: 'Change Password', href: '/admin/change-password', icon: FileText }],
  },
  { name: 'Event', href: '/admin/event', icon: FileText },
  {
    name: 'Exam Calender',
    icon: LucideImage,
    children: [
        { name: 'Add Calender', href: '/admin/add-calender', icon: PlusSquare },
      { name: 'All Sliders', href: '/admin/all-calender', icon: List },
    ],
  },
  {
    name: 'Slider',
    icon: LucideImage,
    children: [
        { name: 'Add Slider', href: '/admin/add-slider', icon: PlusSquare },
      { name: 'All Sliders', href: '/admin/all-sliders', icon: List },
    ],
  },
  {
    name: 'Testimonial',
    icon: LucideImage,
    children: [
        { name: 'Add Testimonial', href: '/admin/add-testimonial', icon: PlusSquare },
      { name: 'All Testimonial', href: '/admin/all-testimonial', icon: List },
    ],
  },
  {
    name: 'Faq',
    icon: LucideImage,
    children: [
        { name: 'Add Faq', href: '/admin/add-faq', icon: PlusSquare },
      { name: 'All Faq', href: '/admin/all-faq', icon: List },
    ],
  },
  {
    name: 'Notice',
    icon: LucideImage,
    children: [
        { name: 'Add Notice', href: '/admin/add-notice', icon: PlusSquare },
      { name: 'All Notice', href: '/admin/all-notice', icon: List },
    ],
  },
  {
    name: 'Blog',
    icon: LucideImage,
    children: [
        { name: 'Add Blog', href: '/admin/add-blog', icon: PlusSquare },
      { name: 'All Blog', href: '/admin/all-blog', icon: List },
    ],
  },
 
  {
    name: 'Videos',
    icon: Video,
    children: [
        { name: 'Add Video', href: '/admin/add-video', icon: PlusSquare },
      { name: 'All Videos', href: '/admin/all-video', icon: List },
    ],
  },
  {
    name: 'Gallery',
    icon: LucideImage,
    children: [
        { name: 'Add Gallery', href: '/admin/add-gallery', icon: PlusSquare },
      { name: 'All Gallery', href: '/admin/all-gallery', icon: List },
    ],
  }, 
  { name: 'SEO', href: '/admin/seo', icon: FileText },
  { name: 'Contact Enquiries', href: '/admin/contact-enquiries', icon: Mail },
  { name: 'Feedback & Compl.', href: '/admin/complaints-feedback', icon: MessageSquare },
]

export default function AdminSidebar({ isSidebarOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    )
  }

  return (
    <div
      className={`w-64 bg-white text-gray-800 h-screen fixed top-0 left-0 transform transition-transform duration-300 z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Header */}
      <Link href="/admin" className="px-4 py-2 border-b border-gray-300 flex justify-between items-center">
        <div className='flex items-center gap-2'>
        <Image unoptimized src="/images/mspl-logo.png" alt="Company Logo" width={49} height={49} className="object-cover" />
          <h4 className='text-xs font-bold'>MSPL - PERSONNEL CERTIFICATION BODY</h4>

        </div>
        <button onClick={onClose} className="md:hidden text-gray-800 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </Link>

      {/* Menu */}
      <nav className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
        <ul className="space-y-2 pb-10">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isOpen = openMenus.includes(item.name)
            const isActive = item.href === pathname

            return (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`flex w-full items-center group justify-between px-2 py-2 rounded-lg hover:bg-green ${
                        isOpen ? 'font-semibold' : ''
                      }`}
                    >
                      <span className="flex items-center group-hover:text-white">
                        <DiApple className="w-5 h-5 mr-2 group-hover:text-white" />
                        {item.name}
                      </span>
                       
                      {isOpen ?  <FaArrowRight className="w-5 h-5 mr-2 group-hover:text-white rotate-90 transition-all duration-200" />
                        : <FaArrowRight className="w-5 h-5 mr-2 group-hover:text-white transition-all duration-200" />
}
                    </button>

                    {isOpen && (
                      <ul className="pl-8 mt-1 space-y-1">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon
                          return (
                            <li key={child.name}>
                              <Link
                                href={child.href || '#'}
                                className={`flex items-center p-2 rounded-lg hover:bg-green hover:text-white ${
                                  child.href === pathname ? 'font-semibold' : ''
                                }`}
                              >
                                <ChildIcon className="w-4 h-4 mr-2" />
                                {child.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={`flex items-center p-2 rounded-lg hover:text-white transition-all duration-300 hover:bg-green ${
                      isActive ? 'font-semibold' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
