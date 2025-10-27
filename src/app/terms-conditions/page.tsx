import CommonHero from '@/components/common/CommonHero'
import TermsConditions from '@/components/ui/TermsConditions'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Terms And Conditions" />
    <TermsConditions/>
    </>
  )
}

export default page