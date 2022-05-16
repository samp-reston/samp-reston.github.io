import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { fetchDevToArticles } from '../api/devToAPI'

function Blog() {
  const [myArticles, setMyArticles] = useState([])

  const Articles = () => {
    const queryClient = useQueryClient()

    const { data, status } = useQuery('devToArticles', fetchDevToArticles)

    if (status === 'loading') {
      return <p>Loading...</p>
    }

    if (status === 'error') {
      return <p>Error!</p>
    }

    const latestArticles: [] = data.slice(0, 4)
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
        {Articles()}
      </section>
    </div>
  )
}

export default Blog
