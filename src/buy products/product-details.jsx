import { useState } from "react"
// import { Component } from "./addcart";
import { useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Details() {
    const {id}=useParams();
    const [details,Setdetails]=useState([]);
      useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
          console.log(res.data)
          Setdetails(res.data)
        
        })
    },[])
    const [input, setInput] = useState(0);
    const add = () => setInput(input + 1);
    const decrement = () => setInput(input - 1);
    return (

        <>
        <section className="md:flex md:justify-center md:gap-10   mt-10 m-5">

     
        <div>
            <img src={details.image} alt="" className=" object-cover w-40 h-40 md:w-48 md:h-64  lg:w-80 lg:h-80 justify-self-center md:justify-self-start" />
        </div>
            <div className="content md:p-5">
                <div className="">
                    <p className="font-bold text-4xl pb-5 max-w-md">{details.title} <br /> </p>
                    <p className="text-2xl pb-4"><span className="text-red-500 font-bold">{details.price}</span>-
                        <del className="text-xl">$260.00</del> </p>
                    <i class="fa-solid fa-star  text-amber-500"></i>
                    <i class="fa-solid fa-star text-amber-500"></i>
                    <i class="fa-solid fa-star text-amber-500"></i>
                    <i class="fa-solid fa-star text-amber-500"></i>
                    <i class="fa-solid fa-star text-amber-500"></i>
                    <p className="pt-4 pb-4 max-w-md">
                        {details.description}
                    </p>
                </div>
                <div className="flex gap-5 pb-4">
                    <div className="flex gap-2 border-2 rounded-full p-2">
                        <button onClick={decrement}>-</button>
                        <p>{input}</p>
                        <button onClick={add}>+</button>
                    </div>
                    <p className="border-2 rounded-full p-3 hover:bg-red-500 hover:text-white cursor-pointer">Add to Cart</p>
                    
                </div>
                <div className="flex justify-items-start gap-3 pb-5">
                    <div className="flex gap-3 items-center">
                    <i class="fa-solid fa-arrows-turn-right"></i>
                    <a href=""><p>compare</p></a>
                    </div>
                    <div className="flex gap-3 items-center">
                    <i class="fa-regular fa-heart"></i>
                    <a href=""><p>Add to Wishlist</p></a>
                    </div>
                </div>
                <div className="flex gap-5 pb-5">
                    <div className="flex  gap-2 items-center  border-2 md:p-3 p-1">
                        <img src="message-svgrepo-com.svg  " alt="" className="md:w-10 w-5 text-red-500"/>
                        <a href=""><p className="text-xs  md:text-md">24/7 Support</p></a>
                    </div>
                    <div className="flex gap-2 items-center border-2 md:p-3 p-1">
                        <img src="credit-card-payment-svgrepo-com.svg " alt="" className="md:w-12 w-5 text-red-500"/>
                        <a href=""><p className="text-xs md:text-md">Card Payment</p></a>
                    </div>
                    <div className="flex gap-2 md:justify-start justify-center items-center border-2 md:p-3 p-3">
                        <img src="shipping-fast-solid-svgrepo-com.svg " alt="" className="md:w-10 w-5 text-red-500"/>
                        <a href=""><p className="text-xs md:text-md ">Shipping</p></a>
                    </div>
                     
                    
                </div>
                <div className="div">
                        <p>{details.title}</p>
                        <p>Categories: {details.category}</p>
                        {/* <p>Tag Electronic</p>                          */}
                    </div>
            </div>
            </section>
        </>
    )
}