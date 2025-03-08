import './App.css'
// import Home from './sidebar/home'
// import Menu from './Navbar/menu'
// import HeroGallery from './Imagegallery/herogallery'
// import Spec from './specifications/spec'
// import Product from './card/product'
// import UpSales from './upcoming/usages'
// import DealMain from './dailydeals/deadman'
// import CategoryMain from './category/catagorymain.jsx'
// import Bestmain from './bestsellerproduct/bestmain.jsx'
// import Offermain from './offersection/offermain.jsx'
// import Footermain from './footer/footermain.jsx'
// import HoverDropdown from './usestat.jsx'
// import StateVariable from './usestat.jsx'
// import { MyForm } from './forms/reactForms.jsx'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import Homemain from './Homemain/Homemain';
import Login from './pages/login';
import Buy from './pages/product-data';
import Shopmain from './pages/shopmain';
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Homemain />} />
    <Route path="/login" element={<Login />} />
    <Route path="/products/:id" element={<Buy/>}/>
    <Route path="/shop" element={<Shopmain/>}/>
    </Routes>
     
   
   
    </>
  )
}

export default App
