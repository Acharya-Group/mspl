import CommonHero from '@/components/common/CommonHero'
import ComplainFeedback from '@/components/ui/ComplainFeedback'
import React from 'react'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Complaint And Feedback" />
    <ComplainFeedback/>
    </>
  )
}

export default page