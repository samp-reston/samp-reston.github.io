import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <h4 style={{
        fontWeight: 'lighter'
      }}>
        Created and Designed by Samuel Preston
      </h4>
      <h4 style={{
        fontWeight: 'normal'
      }}>
        <a href="#"><i>Back to Top</i></a>
      </h4>
      <h4 style={{
        fontWeight: 'normal'
      }}>
        <a href="#aboutme">About Me</a>
      </h4>
      {/* <h4 style={{
        fontWeight: 'normal'
      }}>
        <a href="#myskills">My Skills</a>
      </h4> */}
      <h4 style={{
        fontWeight: 'normal'
      }}>
        <a href="#projects">Portfolio</a>
      </h4>
      <h4 style={{
        fontWeight: 'normal'
      }}>
        <a href="#blog">Blog</a>
      </h4>
      {/* <h4 style={{
        fontWeight: 'normal'
      }}>
        Contact
      </h4> */}
    </div>
  )
}

export default Footer
