import React from 'react'
import '../styles/Menu.css'
import { Divide as Hamburger } from 'hamburger-react'

import Navigation from './Navigation'
import Socials from './Socials'

function Menu() {
  return (
    <div className="menu">
      <Hamburger
        size={20}
        color='#004762'
        rounded
      />
      <Navigation />
      <Socials />
    </div>
  )
}

export default Menu
