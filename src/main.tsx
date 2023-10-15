import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Loader from './components/Loader/loader.tsx'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.Suspense fallback={<Loader />}>
        <App />
    </React.Suspense>
  </BrowserRouter>
)
