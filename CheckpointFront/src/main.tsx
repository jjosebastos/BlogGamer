import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Banner from './Components/Banner/index.tsx'
import Footer from './Components/Footer/index.tsx'
import Header from './Components/Header/index.tsx'
import './index.css'

const _router =

  createRoot(document.getElementById('root')!).render(

    <StrictMode>

      <Header />
      <Banner />
      <footer>
        <Footer />
      </footer>

    </StrictMode>,
  )
