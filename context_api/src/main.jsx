import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './route/Home.jsx'
import Contact from './route/Contact.jsx'

// 2. Criando Provider
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// 5. Contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    }, {
      path: "/contact",
      element: <Contact />
    }
  ]
}])

// 2. Criando Provider
import { CounterContextProvider } from './context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
