import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { fetchSection } from '../api/contentAPI'

function Portfolio() {
  const section = fetchSection("Portfolio")
  const { sectionName, content } = section

  const renderContent = () => {
    type Project = {
      title: string;
      summary: string;
      description: string[]
    }
    return content.map((project: Project) => (
      <div key={uuidv4()}>
        <h4>
          {project.title}
        </h4>
        <section>
          <div className='left-half'>
            <p>{project.summary}</p>
          </div>
          <div className='right-half'>
            <h4>
              Skills and Tools Used:
            </h4>
            {project.description.map((description: string) => <li key={uuidv4()}>{description}</li>)}
          </div>
        </section>
      </div>
    ))
  }

  return (
    <div id="projects" className='content'>
      <h2>{sectionName}</h2>
      {renderContent()}
    </div>
  )
}

export default Portfolio
