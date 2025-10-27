import CommonHero from '@/components/common/CommonHero'
import AboutYcb from '@/components/ui/AboutYcb'
import React from 'react'

const page = () => {
  return (
    <>
      <CommonHero currentPage="About ycb" />
    <AboutYcb/>
    </>
  )
}

export default page