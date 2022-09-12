// Liberaries Import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// Custom Imports
import App from './App'
import Header from './components/header-footer/header.jsx'
import Footer from './components/header-footer/footer.jsx'

// Application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)