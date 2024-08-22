import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Banner from './Components/Banner/index.tsx'
import Footer from './Components/Footer/index.tsx'
import Header from './Components/Header/index.tsx'
import About from './Components/About/index.tsx'
import UserRatings from './Components/UserRatings/index.tsx'
import './index.css'



  createRoot(document.getElementById('root')!).render(

    <StrictMode>

      <Header />
      <Banner />
      <About />
      <UserRatings />
      <footer>
        <Footer />
      </footer>

    </StrictMode>,
  )
