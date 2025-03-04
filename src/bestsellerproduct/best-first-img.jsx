import Sellerdata from "./best-first-data"

export default function Bestfirst(){
 
    const BestItem=[{
        image:"b8.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
         status:"Sold Out"
    },
    {
        image:"b9.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"Hot" 
    },
    {
        image:"b11.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"New"   
    },
    {
        image:"b12.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"Sold Out"   
    },  
    {
        image:"b13.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"Hot"   
    },
    {
        image:"b14.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"New" 
    },
    {
        image:"b15.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"Sold Out" 
    },
    {
        image:"b7.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00",
        status:"Hot" 
    },
    
]
    return(
      <>
     
      <section className="grid grid-cols-1 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4  divide-x divide-y m-5">
      {BestItem.map((item,index) =>(
       <div className=" ">
            <Sellerdata key={index} image={item.image} title={item.description} price={item.price} status={item.status}/>
       </div>
         ))}
         </section>
      </>
    )
}