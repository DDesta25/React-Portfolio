import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/erorr.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Portfolio from './pages/portfolio.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);