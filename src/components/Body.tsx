import '../styles/Body.css'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import AboutMe from './AboutMe'
import Blog from './Blog'
import Footer from './Footer'
import Header from './Header'
import HeaderSocials from './HeaderSocials'
import MySkills from './MySkills'
import Portfolio from './Portfolio'

const queryClient = new QueryClient()

function Body() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='body x-center'>
        <Header />
        <HeaderSocials />
        <AboutMe />
        <MySkills />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default Body
