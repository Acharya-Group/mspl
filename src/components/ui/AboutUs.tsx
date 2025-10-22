import React from 'react'
import Para from '../common/Para'
import SubHeading from '../common/SubHeading'
import { FaStar } from "react-icons/fa6";
import Button from '../common/Button';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section>
      <div className='container py-10 lg:py-12'>
        <div className="flex flex-wrap">
          <div className='lg:w-7/12 pe-4'>
            <SubHeading content="About MSPL-PERSONNEL CERTIFICATION BODY" />
            <Para className='py-3' content="(MSPL- Personnel Certification Body) was established to act as a Centre of Excellence in the field of Yoga. As the demand for the system of Yoga is increasing rapidly at the global level, the Institute is striving hard to fulfill the current need and demand. MSPL is backed by devoted, highly qualified and experienced Assessment personnel and offering customer oriented certification in an efficient and cost effective manner. The word Yoga is derived from Sanskrit Yuj – which means to unite or integrate. The Hon’ble Prime Minister has desired to spread India’s traditional knowledge worldwide with credible systems which shall provide India the leadership in assuring quality of Yoga practices across the world. The Ministry of AYUSH in pursuance of the above and in the wake of declaration of International Day of Yoga recognizes there" />
            <Link href='/about'><Button content="Read More" /></Link>
          </div>
        <div className="lg:w-5/12 flex w-full flex-col sm:flex-row gap-4 pt-5 lg:pt-0">
        {/* Box 1 – Notice Board */}
        <div className="w-full sm:w-1/2 commonShadow min-h-[220px] rounded-xl overflow-hidden">
          <div className="bg-green w-full rounded-t-lg">
            <h3 className="text-xl font-bold text-white flex justify-between items-center px-3 py-2">
              <FaStar /> Notice Board <FaStar />
            </h3>
          </div>
          <div className="bg-white text-gray-700 p-4 text-sm leading-relaxed overflow-y-scroll">
            <ul className="list-disc pl-5 space-y-2 max-h-[200px]">
              <li>Admission for Yoga Instructor Program is now open.</li>
              <li>Workshop on Holistic Health on 5th November 2025.</li>
              <li>New course materials are available for download.</li>
              <li>Final exam schedule will be released soon.</li>
              <li>Admission for Yoga Instructor Program is now open.</li>
              <li>Workshop on Holistic Health on 5th November 2025.</li>
              <li>New course materials are available for download.</li>
              <li>Final exam schedule will be released soon.</li>
            </ul>
          </div>
        </div>
        {/* Box 2 – News & Events */}
        <div className="w-full sm:w-1/2 commonShadow min-h-[220px] rounded-xl overflow-hidden">
          <div className="bg-green w-full rounded-t-lg">
            <h3 className="text-xl font-bold text-white flex justify-between items-center px-3 py-2">
              <FaStar /> News & Events <FaStar />
            </h3>
          </div>
          <div className="bg-white text-gray-700 p-4 text-sm leading-relaxed overflow-y-scroll">
            <ul className="list-disc pl-5 space-y-2 max-h-[200px]">
              <li>International Yoga Day celebration on 21st June 2025.</li>
              <li>Special guest lecture by Dr. Meena Sharma next week.</li>
              <li>New branch opening soon in Bangalore.</li>
              <li>Annual Yoga Fest registrations start from 1st Dec 2025.</li>
            </ul>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs