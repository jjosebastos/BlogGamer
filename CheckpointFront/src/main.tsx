import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/index.tsx'
import Footer from './Components/Footer/index.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>

    <Header />
    <footer>
      <Footer />
    </footer>
    
  </StrictMode>,
)
