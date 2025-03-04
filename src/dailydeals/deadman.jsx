
import DealTab from "./dealstab";
import ProductCarousel from "./deals";
 
export default function DealMain(){
    return(
        <>
        <section className=" flex md:justify-evenly lg:flex-row flex-col items-center m-4 sm:pt-12"  >
            <div className="  max-w-md  w-5/6 ">
            <ProductCarousel/>
            </div>
            <div className=" ">

            <DealTab/>

            </div>
      
        
        </section>
        </>
        
    )
}