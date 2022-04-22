import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import Body from './components/Body';
import Menu from './components/Menu';
import './styles/App.css'

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div
        style={{
          position: 'fixed',
          zIndex: '2'
        }}
      >
        <Hamburger
          size={20}
          color='#004762'
          rounded
          toggled={isOpen} toggle={setOpen}
        />
      </div>
      <div id='menu' className={`${isOpen}`}>
        <Menu />
      </div>
      <Body />
    </>
  );
}

export default App;
