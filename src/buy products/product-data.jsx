import { useParams } from "react-router-dom";
import Footermain from "../footer/footermain";
import Dept from "../Navbar/components/departments";
import Header from "../sidebar/components/HeroSection";
import BasicTabs from "./prod-speci";
import Details from "./product-details";
import Carousel from "./product-img";


function Buy() {

  const images = [
    '/p1.webp',
    '/pd2 (1).webp',
    '/pd2 (2).webp'
  ];

  
  return (
    <>  
        <Header/>
        <Dept/>
        <div className="div">
        <div className="flex justify-around login-bg ">
                <div className="ml-2">
                    <p className="sm:text-4xl font-bold">Products</p>
                    <p className="font-bold">Home // <span className="text-red-500">Single Product</span></p>
                </div>
                <div className="div">
                    <img src="/login-img.webp" alt="" className="  w-full md:h-40 h-24" />
                </div>
           </div>
        </div>
    <div className=" ">
    \
      <Details/>
      
    </div>
    <div className="mt-5 m-1 ">
    <BasicTabs/>
    </div>
    <Footermain/>
    </>
);
}

export default Buy;