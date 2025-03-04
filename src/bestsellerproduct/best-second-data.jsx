import { ShoppingBag } from "lucide-react"
export default function Sellersdata(props){
 const {image,title,price}=props   
 return(
    <>
   <section>
    <div className=" p-9 relative ">
        <img src={image} alt className="" />
        <p className="pb-2">{title}</p>
        <p className="pb-2 text-xl text-red-500">{price}</p>
        <i class="fa-solid fa-star text-amber-500"></i>
        <i class="fa-solid fa-star text-amber-500"></i>
        <i class="fa-solid fa-star text-amber-500"></i>
        <i class="fa-solid fa-star text-amber-500"></i>
        <i class="fa-solid fa-star text-amber-500"></i>
        <div className="absolute right-4 bottom-10">
            <a href="#"><ShoppingBag size={40} className="  border-2 hover:bg-slate-100 bg-white pl-2 pr-2 rounded-lg hover:text-red-500"/></a>
        
        </div>
    </div>
   </section>
    </>
 )
}