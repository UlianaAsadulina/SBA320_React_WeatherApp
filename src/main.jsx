import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { KeyProvider } from './components/KeyContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <KeyProvider>
        <App />
      </KeyProvider>      
    </BrowserRouter>
  </StrictMode>,
)
