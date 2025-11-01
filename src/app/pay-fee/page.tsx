import CommonHero from '@/components/common/CommonHero'
import PayFee from '@/components/ui/PayFee'
import React from 'react'

const page = () => {
  return (
    <>
       <CommonHero currentPage="Pay Fee" />
       <PayFee/>
    </>
  )
}

export default page