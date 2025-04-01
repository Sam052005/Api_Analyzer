import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AlertProvider } from './contexts/AlertContext'
import './assets/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>
)