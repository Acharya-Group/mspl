import CommonHero from '@/components/common/CommonHero'
import Faqs from '@/components/ui/Faqs'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Faqs" />
    <Faqs/>
    </>
  )
}

export default page