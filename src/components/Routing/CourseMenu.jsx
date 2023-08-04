import { NavLink } from 'react-router-dom'
const CourseMenu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="courses/react">React</NavLink>
      <NavLink to="courses/javascript">JavaScript</NavLink>
      <NavLink to="courses/python">Python</NavLink>
      <NavLink to="courses/node-js">Node JS</NavLink>
    </nav>
  )
}

export default CourseMenu
