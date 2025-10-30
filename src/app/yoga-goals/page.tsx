import CommonHero from '@/components/common/CommonHero'
import YogaGoals from '@/components/ui/YogaGoals'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Yoga Education Goals" />
    <YogaGoals/>
    </>
  )
}

export default page