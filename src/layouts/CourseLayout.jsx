import { Outlet } from 'react-router-dom'
import CourseMenu from '../components/Routing/CourseMenu'

const CourseLayout = () => {
  return (
    <>
      <CourseMenu />
      <Outlet></Outlet>
    </>
  )
}

export default CourseLayout
