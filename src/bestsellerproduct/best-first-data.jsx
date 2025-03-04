import { ShoppingBag } from "lucide-react"
import axios from 'axios'
import { useEffect } from "react";
export default function Sellerdata(props){
//  useEffect(()=>{
//  axios.get('https://fakestoreapi.com/products')
//  .then(res=>res.json())
//  .then(json=>console.log(json))
//  },[])
    const getStatusClass = (status) => {
        switch (status) {
          case "New":
            return "badge-new";
          case "Sold Out":
            return "badge-sold-out";
          case "Hot":
            return "badge-hot";
          default:
            return "";
        }
      };
 const {image,title,price,status}=props   
 return(
    <>
   <section>
    <div className=" p-9 relative ">
        <img src={image} alt className="" />
        <p className={`badge ${getStatusClass(status)} w-14 text-center absolute top-3`}>
              {status}
              </p>
        <p className="pb-2">{title}</p>
        <p className="pb-2 text-xl text-red-500">{price}</p>
        <i className="fa-solid fa-star text-amber-500"></i>
        <i className="fa-solid fa-star text-amber-500"></i>
        <i className="fa-solid fa-star text-amber-500"></i>
        <i className="fa-solid fa-star text-amber-500"></i>
        <i className="fa-solid fa-star text-amber-500"></i>
        <div className="absolute right-4 bottom-10">
            <a href="#"><ShoppingBag size={40} className="  border-2 hover:bg-slate-100 bg-white pl-2 pr-2 rounded-lg hover:text-red-500"/></a>
        
        </div>
        
    </div>
   </section>
    </>
 )
}