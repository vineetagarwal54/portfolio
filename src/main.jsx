import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/theme.css'   // <— tokens
import App from './App.jsx'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init("mQ9OON6EqrVaaw_T0");

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
