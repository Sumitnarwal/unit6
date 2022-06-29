import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { SaveDataProvider } from './context/saveData'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SaveDataProvider>
        <App />
      </SaveDataProvider>
    </BrowserRouter>
  </React.StrictMode>
)
