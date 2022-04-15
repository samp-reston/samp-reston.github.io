import React from 'react'
import '../styles/Body.css'

import AboutMe from './AboutMe'
import Blog from './Blog'
import Footer from './Footer'
import Header from './Header'
import MySkills from './MySkills'
import Portfolio from './Portfolio'

function Body() {
  return (
    <div className='body x-center'>
      <Header />
      <AboutMe />
      <MySkills />
      <Portfolio />
      <Blog />
      <div className='filler' />
      <Footer />
    </div>
  )
}

export default Body
