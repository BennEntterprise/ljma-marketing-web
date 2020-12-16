import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Audit Hoops/Other Utilities
import AuditHoop from './utilities/AuditHoop/AuditHoop'
import isDev from './utilities/isDev'
import Typefaces from './constants/Typefaces'

// ********************
// Import Main App Components and Pagelets
// ********************
import Navbar from './components/Navbar'
import Welcome from './pagelets/1Welcome/Welcome'
import AboutUs from './pagelets/2AboutUs/AboutUs'
import Courses from './pagelets/3Courses/Courses'
import ArtistDevelopmentProgram from './pagelets/4ArtistDevelopmentProgram/ArtistDevelopmentProgram'
import Exams from './pagelets/5Exams/Exams'
import MeetTheTeachers from './pagelets/6MeetTheTeachers/MeetTheTeachers'
import BookLessons from './pagelets/7BookLessons/BookLessons'

const App = () => {
  console.info('Is Dev Mode:', isDev())
  return (
    <>
      <Router>
        <Route exact path='/'>
          <AuditHoop variant='complete'>
            <Navbar />
          </AuditHoop>
          <AuditHoop variant='pending-approval'>
            <Welcome />
          </AuditHoop>
          <AuditHoop variant='wip'>
            <AboutUs />
          </AuditHoop>
          <Courses />
          <ArtistDevelopmentProgram />
          <Exams />
          <MeetTheTeachers />
          <BookLessons />
          {isDev() && <Typefaces />}
        </Route>
      </Router>
    </>
  )
}

export default App
