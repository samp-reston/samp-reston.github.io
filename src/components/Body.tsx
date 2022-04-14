import React from 'react'
import '../styles/Body.css'

import AboutMe from './AboutMe'
import Footer from './Footer'
import Header from './Header'
import MySkills from './MySkills'

function Body() {
  return (
    <div className='body x-center'>
      <Header />
      <AboutMe />
      <MySkills />
      <Footer />
    </div>
  )
}

export default Body
