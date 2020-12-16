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
import IndependentContactPagelet from './components/IndependentContactPagelet'
import ComingSoon from './pagelets/0ComingSoon/ComingSoon'
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
        <Navbar />
        <Route exact path='/'>
          <ComingSoon />
        </Route>

        {/* <AuditHoop variant='complete'>
        </AuditHoop>
        <AuditHoop variant='pending-approval'>
          <Navbar />
        </AuditHoop>
        <AuditHoop variant='wip'>
          <Welcome />
        </AuditHoop>
        <AboutUs />
        <Courses />
        <ArtistDevelopmentProgram />
        <Exams />
        <MeetTheTeachers />
        <BookLessons />
        {isDev() && <Typefaces />}
        <AuditHoop variant='complete'></AuditHoop>
        <Route exact path='/contact'>
          <IndependentContactPagelet />
        </Route> */}
      </Router>
    </>
  )
}

export default App
