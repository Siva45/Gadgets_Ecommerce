import Info from "./info";
import Socialmedia from "./socialmedia";
import Account from "./account"; 
import Store from "./store";
import Contactus from "./contactus";
export default function Footermain(){
    return(
        <>
        <section className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 sm:justify-items-center p-10 bg-black text-white ">
            
        <Socialmedia/>
        <Info/>
        <Account/>
        <Store/>
        <Contactus/>
        </section>
        </>
    )
}