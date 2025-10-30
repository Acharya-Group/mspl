import CommonHero from '@/components/common/CommonHero'
import Candidate from '@/components/ui/Candidate'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Candidate" />
    <Candidate/>
    </>
  )
}

export default page