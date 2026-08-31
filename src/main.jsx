import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (import.meta.env.DEV) {
  const legacyStyle = document.getElementById('lgx-style-v8')
  if (legacyStyle) {
    const url = new URL(legacyStyle.href)
    url.searchParams.set('t', Date.now())
    legacyStyle.href = url.toString()
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
