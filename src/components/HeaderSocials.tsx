import React from 'react'

import devToLogo from '../assets/BxlDevTo.svg'
import github from '../assets/BxlGithub.svg'
import linkedin from '../assets/BxlLinkedin.svg'
import email from '../assets/IcBaselineAlternateEmail.svg'

function HeaderSocials() {
  return (
    <nav className='x-center header-socials'>
      <a href="https://dev.to/samp_reston" target="_blank" rel="noreferrer"><img src={devToLogo} alt="Dev.To Logo" /></a>
      <a href="https://github.com/samp-reston" target="_blank" rel="noreferrer"><img src={github} alt="Github Logo" /></a>
      <a href="https://www.linkedin.com/in/samp-reston/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Logo" /></a>
      <a href="mailto:samp.reston@outlook.com" target="_blank" rel="noreferrer"><img src={email} alt="samp.reston@outlook.com" /></a>
    </nav>
  )
}

export default HeaderSocials
