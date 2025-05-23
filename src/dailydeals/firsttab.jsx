import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
export default function FirstTab(){
     useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in milliseconds
              once: false, // Animation occurs only once
            });
          }, []);
    const Tabs=[{
        image:"mobile.webp",
        name:"D-Phone Android Latest UI New XP",
        description:"$256.00",
    },{
        image:"speaker.webp",
        name:"Bluetooth Speaker Without Cable",
        description:"$256.00",
    },
{
    image:"eye.webp",
    name:"Vivi Movi Box Black HK With Eye Protect",
    description:"$156.00",
},
{
    image:"headphone.webp",
    name:"Headphone Supersonic New Adi-25",
    description:"$156.00"
},
{
    image:"camera.webp",
    name:"Digital Lens Camera HYU-259Xl",
    description:"$156.00"
},

{
    image:"triger.webp",
    name:"Game Triger Finger New Insulated PH-Xl",
    description:"$156.00",

}]
return(
    <>
   {Tabs.map((item, index) => (  
    <section className="pb-10 overflow-hidden  bg-no-repeat">
    
        <div className="flex gap-3 items-center relative ">
            <img src={item.image} alt="" className="transition duration-400 ease-in-out hover:scale-110" data-aos="fade-right" />
            <div className=""data-aos="fade-left">
                <h1 className="">{item.name}</h1>
                <p className="pb-2 text-red-500">{item.description}</p>
                <i class="fa-solid fa-star text-amber-500"></i>
                <i class="fa-solid fa-star text-amber-500"></i>
                <i class="fa-solid fa-star text-amber-500"></i>
                <i class="fa-solid fa-star text-amber-500"></i>
                <i class="fa-solid fa-star text-amber-500"></i>
            </div>
            <div className="absolute xl:right-32 lg:right-1 md:right-10 right-8 bottom-3">
            <a href="">
            <i className="fa-solid fa-bag-shopping text-xl border-2 hover:bg-slate-100 bg-white pl-3 pr-3 rounded-full hover:text-red-500"></i>
            </a>
            </div>
        </div>
    </section>
   ))}
    </>
)}
    
