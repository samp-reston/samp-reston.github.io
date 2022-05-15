import React from 'react'

import aboutMeIcon from '../assets/BxBxsUserAccount.svg'
import projectsIcon from '../assets/BxBxsKeyboard.svg'
import blogIcon from '../assets/BxPencil.svg'
import contactIcon from '../assets/BxsPhone.svg'

function Navigation() {
  return (
    <nav>
      <a href="#aboutme"><img src={aboutMeIcon} alt="About Me Icon" className='icons' /></a>
      <h3><a href="#aboutme">About Me</a></h3>
      <a href="#projects"><img src={projectsIcon} alt="About Me Icon" className='icons' /></a>
      <h3><a href="#projects">Portfolio</a></h3>
      <a href="#blog"><img src={blogIcon} alt="About Me Icon" className='icons' /></a>
      <h3><a href="#blog">Blog</a></h3>
      <img src={contactIcon} alt="About Me Icon" className='icons' />
      <h3>Contact</h3>
    </nav>
  )
}

export default Navigation
