// Import StrictMode (helps find problems in your app)
import { StrictMode } from 'react'

// Import function to create and display your React app
import { createRoot } from 'react-dom/client'

// Import BrowserRouter (enables page routing using URLs)
import { BrowserRouter } from "react-router-dom";

// Import the main App component
import App from './App.jsx'

// Find the "root" element in index.html and render the app there
createRoot(document.getElementById('root')).render(
  
  // StrictMode checks for possible errors (only for development)
  <StrictMode>

    {/* BrowserRouter allows the app to use different URLs (pages) */}
    <BrowserRouter>

      {/* This is the main app */}
      <App />

    </BrowserRouter>
  </StrictMode>
)
