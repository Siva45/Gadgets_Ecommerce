import './App.css'
import Home from './sidebar/home'
import Menu from './Navbar/menu'
import HeroGallery from './Imagegallery/herogallery'
import Spec from './specifications/spec'
import Product from './card/product'
import UpSales from './upcoming/usages'
import DealMain from './dailydeals/deadman'
import CategoryMain from './category/catagorymain.jsx'
import Bestmain from './bestsellerproduct/bestmain.jsx'
import Offermain from './offersection/offermain.jsx'
import Footermain from './footer/footermain.jsx'
import HoverDropdown from './usestat.jsx'
import StateVariable from './usestat.jsx'
import { MyForm } from './forms/reactForms.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
//   const [value,setValue]=useState([])
//  useEffect(()=>{
//   axios.get('https://fakestoreapi.com/products/1')
//   .then(res=>setValue(res.data))
//   .catch(err=>console.log(err)
//   )
//  },[]) 
//  console.log(value);
 

  return (
    <>
  
     <Home/>
     <Menu/>
     <HeroGallery/>
     <Spec/>
     <Product/>
     <UpSales/>
    <DealMain/>
    <CategoryMain/>
    <Bestmain/>
    <Offermain/>
    <Footermain/> 
   
    {/* <MyForm/>
    <StateVariable/>
    
    
  
   
    {/* <StateVariable/> */}
    </>
  )
}

export default App
