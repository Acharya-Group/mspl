import CommonHero from '@/components/common/CommonHero'
import AboutSection from '@/components/ui/AboutSection'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="About Us" />
    <AboutSection/>
    </>
  )
}

export default page