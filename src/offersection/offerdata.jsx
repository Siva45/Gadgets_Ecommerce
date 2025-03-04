
export default function Offerseller(props){
 const{description,title,shoping,images}=props
 return(
    <>

    <section className="">
    <div className="relative overflow-hidden  bg-no-repeat ">
        <img src={images} alt="" className="transition duration-700 ease-in-out hover:scale-110"/>
        <div className="absolute lg:top-8 lg:right-40 md:top-10 md:left-40 top-3 right-20 text-center">
    
        <p className="text-white animate-slidein">{description}</p>
            <p className="sm:text-3xl text-sm text-white font-bold max-w-80 text-wrap pb-2 animate-slidein">{title}</p>
            <a href="#" className="bg-red-600 hover:bg-white hover:text-black pl-3 pr-3 p-1 font-bold  text-xs text-white">{shoping}</a>
      
           
        </div>
    </div>
    </section>
    </>
 )
}