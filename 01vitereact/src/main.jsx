import { StrictMode } from 'react'                 // Helps highlight potential problems
import { createRoot } from 'react-dom/client'     // React 18+ root rendering
import App from './App.jsx'                        // Importing your main component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
