import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import courses from './data/courses'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]

  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)

  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setsortedCourses] = useState(
    sortCourses(courses, sortKey)
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey(undefined)
      setsortedCourses([...courses])
    }
  }, [sortKey, navigate])
  return (
    <>
      <h1>{sortKey ? `Course sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
