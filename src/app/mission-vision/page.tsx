import CommonHero from '@/components/common/CommonHero'
import MissionAndVision from '@/components/ui/MissionAndVision'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Mission & Vision" />
    <MissionAndVision/>
    </>
  )
}

export default page