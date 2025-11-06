import CommonHero from '@/components/common/CommonHero'
import ExamCalender from '@/components/ui/ExamCalender'

const page = () => {
  return (
    <>
    <CommonHero currentPage="Yoga Exam Calendar" />
    <ExamCalender/>
    </>
  )
}

export default page