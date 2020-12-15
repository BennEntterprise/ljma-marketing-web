import React from 'react'
import logo from './logo.svg'
import './App.scss'
import MyComponent from './MyComp'
import Awesome from './Awesome'
import Navbar from './components/Navbar'

// ********************
// Import The Pagelets
// ********************
import Welcome from './pagelets/1Welcome/Welcome'
import AboutUs from './pagelets/2AboutUs/AboutUs'
import Courses from './pagelets/3Courses/Courses'
import ArtistDevelopmentProgram from './pagelets/4ArtistDevelopmentProgram/ArtistDevelopmentProgram'
import Exams from './pagelets/5Exams/Exams'
import MeetTheTeachers from './pagelets/6MeetTheTeachers/MeetTheTeachers'
import BookLessons from './pagelets/7BookLessons/BookLessons'

const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <AboutUs />
      <Courses />
      <ArtistDevelopmentProgram />
      <Exams />
      <MeetTheTeachers />
      <BookLessons />
    </>
  )
}

export default App
