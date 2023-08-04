import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Routing/Home'
import Contacts from './components/Routing/Contacts'
import About from './components/Routing/About'
import NotFound from './components/Routing/NotFound'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Routing/Courses'
import SingleCourse from './components/Routing/SingleCourse'
import CourseLayout from './layouts/CourseLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CourseLayout />}>
            <Route path="courses" element={<Courses />}></Route>
            <Route path="courses/:slug" element={<SingleCourse />}></Route>
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="about" element={<About />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
