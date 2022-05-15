import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { fetchSection } from '../api/contentAPI'

function AboutMe() {
  const section = fetchSection("About Me")
  const { sectionName, content } = section

  const renderContent = () => {
    return content.map((paragraph: string) => <p key={uuidv4()}>{paragraph}</p>)
  }

  return (
    <div id="aboutme" className='content'>
      <h2>{sectionName}</h2>
      {renderContent()}
    </div>
  )
}

export default AboutMe
