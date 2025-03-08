import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Offerseller from "./offerdata";
export default function Offerimg(){
    useEffect(() => {
                    AOS.init({
                      duration: 1000, // Animation duration in milliseconds
                      once: false, // Animation occurs only once
                    });
                  }, []);
    const offer=[{
        image:"16.webp",
        discription:"50% offer",
        title:"SMART TELEVISION WITH PEN",
        cart:"SHOP NOW ->"
    },
    {
        image:"17.webp",
        discription:"50% offer",
        title:"SMART PHONE WITH PEN",
        cart:"SHOP NOW ->"
    },  
    
];
    return(
        <>
         <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 grid grid-cols-1 p-5 gap-5 rounded-"data-aos="fade-right">
            {offer.map((item,index) =>(
         
         <Offerseller key={index} images={item.image} description={item.discription} title={item.title} shoping={item.cart}/>
        ))}
         </div>


        
        </>
    )
}