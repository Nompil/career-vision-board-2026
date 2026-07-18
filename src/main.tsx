import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import initScrollReveal from './utils/scrollReveal'
import initScrollSpy from './utils/scrollSpy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// init reveals and the scroll-spy after the initial paint to avoid timing issues
requestAnimationFrame(() => {
  initScrollReveal()
  initScrollSpy()
})
