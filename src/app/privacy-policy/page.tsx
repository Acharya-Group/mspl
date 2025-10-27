import CommonHero from '@/components/common/CommonHero'
import Privacy from '@/components/ui/Privacy'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Privacy Policy" />
    <Privacy/>
    </>
  )
}

export default page