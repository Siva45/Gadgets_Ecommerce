import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login page/login.jsx';
import Buy from './buy products/product-data.jsx';
import Shopmain from './shop/shopmain.jsx';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/product/:id",
      element:<Buy/>
    },
    {
      path:"/shop",
      element:<Shopmain/>
    },
    
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
