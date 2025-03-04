
import Drawers from "./drawer";


export default function Header(){
 
    return(
        <>
        <section className="grid md:grid-cols-6 grid-cols-3 md:gap-4 col-span-1 pt-3 items-center sticky top-0 z-40 bg-white pb-3 ">
        <div className="p-3 ">
        <img src="/logo.webp" alt="" />
        </div>
        <div className="flex md:col-span-4 justify-center col-span-1 ">
       <input type="text" className="w-60 h-12 shadow hidden md:block "  placeholder="Search products" />
       <select name="all categories" id="" className="shadow h-12 hidden md:block">
        
        <option value="">All Categories</option>
        <option value="">Head Phone</option>
        <option value="">Video Game</option>
        <option value="">Digital Camera</option>
        <option value="">Portable speakers</option>
       </select>
       <button className="md:bg-black h-12 w-10 hidden md:block"><i className="fa-solid fa-magnifying-glass text-black md:text-white"></i></button>
      
       </div>
        <div className="flex col-span-1 justify-evenly items-center">
        <a href="/login" className="lg:border-r-2 lg:pr-2 hidden lg:block">Login / SignIn</a>
        <i className="fa-solid fa-magnifying-glass md:hidden"></i>
        <a href="/login"><i className="fa-regular fa-user  lg:hidden"></i></a>
        <a href=""><i className="fa-regular fa-heart md:text-xl "></i></a>
        <a href=""><i className="fa-solid fa-bag-shopping md:pl-2 md:text-xl"></i></a>
        <div className="">
      <Drawers/>
      
        </div>
    </div>
        </section>

        </>
    )
}