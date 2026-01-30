import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import './css/login.css'
import Index from './index'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </StrictMode>,
)
