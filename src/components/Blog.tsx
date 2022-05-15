import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Blog() {
  const [myArticles, setMyArticles] = useState([])

  useEffect(() => {
    const username = 'samp_reston'
    fetch(`https://dev.to/api/articles?username=${username}`)
      .then((res) => res.json())
      .then((json) => setMyArticles(json))
  }, [])

  const renderArticles = () => {
    if (!myArticles) return <></>
    const latestArticles = myArticles.slice(0, 4)
    return latestArticles.map((article) => {
      const { url, social_image, title } = article
      return (
        <a className='blog-thumbnail' key={uuidv4()} href={url}>
          <img src={social_image} width={'48%'} height={'auto'} alt={title} />
          <h4>{title}</h4>
        </a>
      )
    })
  }

  return (
    <div id="blog" className='content left-content'>
      <h2>Blog</h2>
      <section>
        {renderArticles()}
      </section>
    </div>
  )
}

export default Blog
