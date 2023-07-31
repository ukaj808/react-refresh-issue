import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

export const createRoot = (id: string) => {
  ReactDOM.createRoot(document.getElementById(id)!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
};
