import CommonHero from '@/components/common/CommonHero'
import AboutAyush from '@/components/ui/AboutAyush'
import React from 'react'

const page = () => {
  return (
    <>
      <CommonHero currentPage="About ayush" />
    <AboutAyush/>
    </>
  )
}

export default page