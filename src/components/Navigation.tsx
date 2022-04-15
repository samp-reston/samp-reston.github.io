import React from 'react'

import aboutMeIcon from '../assets/BxBxsUserAccount.svg'
import projectsIcon from '../assets/BxBxsKeyboard.svg'
import blogIcon from '../assets/BxPencil.svg'
import contactIcon from '../assets/BxBxsContact.svg'

function Navigation() {
  return (
    <nav>
      <img src={aboutMeIcon} alt="About Me Icon" className='icons'/>
      <h3>About Me</h3>
      <img src={projectsIcon} alt="About Me Icon" className='icons'/>
      <h3>Projects</h3>
      <img src={blogIcon} alt="About Me Icon" className='icons'/>
      <h3>Blog</h3>
      <img src={contactIcon} alt="About Me Icon" className='icons'/>
      <h3>Contact</h3>
    </nav>
  )
}

export default Navigation
