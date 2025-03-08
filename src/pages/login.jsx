import Footermain from "../footer/footermain"
import Dept from "../Navbar/departments"
import Header from "../sidebar/HeroSection"
import Loginuser from "../Login page/loginuser"
import Register from "../Login page/register"
export default function Login(){
    return(
        <>
         <Header/>  
         <Dept/> 
         <section className="sm:pt-5 ">
           <div className="flex justify-around login-bg ">
                <div className="ml-2">
                    <p className="sm:text-4xl font-bold">Login / Register</p>
                    <p className="font-bold">Home // <span className="text-red-500">Login-Register</span></p>
                </div>
                <div className="">
                    <img src="login-img.webp" alt="" className="  w-full md:h-40 h-24" />
                </div>
           </div>
           <div className="md:grid md:grid-cols-2 grid grid-cols-1 lg:m-10 m-4 pt-5 text-center md:text-left">
           <Loginuser/>
           <Register/>
           
           </div>
           <Footermain/>
         </section>
        </>
    )
}