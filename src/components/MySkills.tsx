import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { fetchSection } from '../api/contentAPI'

function MySkills() {
  const section = fetchSection("My Skills")
  const { sectionName, content } = section

  const renderContent = () => {
    return content.map((paragraph: string) => <p key={uuidv4()}>&#8226; {paragraph}</p>)
  }

  return (
    <div id="myskills" className='content'>
      <h2>{sectionName}</h2>
      {renderContent()}
    </div>
  )
}

export default MySkills
