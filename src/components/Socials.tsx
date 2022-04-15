import React from 'react'
import '../styles/Socials.css'

import devToLogo from '../assets/BxlDevTo.svg'
import github from '../assets/BxlGithub.svg'
import linkedin from '../assets/BxlLinkedin.svg'

function Socials() {
  return (
    <nav className='socials x-center'>
      <img src={devToLogo} alt="Dev.To Logo" />
      <img src={github} alt="Dev.To Logo" />
      <img src={linkedin} alt="Dev.To Logo" />
    </nav>
  )
}

export default Socials
