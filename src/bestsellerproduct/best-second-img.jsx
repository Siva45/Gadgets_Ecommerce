import Sellersdata from "./best-second-data"
export default function Bestsecond(){
    const BestItem=[
        {
            image:"b9.webp",
            description:"Game Triger Finger New Insulated PH-X",
            price:"$287.00"  
        },{
        image:"b8.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00"
    },
    {
        image:"b12.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00"   
    },
    {
        image:"b11.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00"   
    },
    {
        image:"b14.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00" 
    },
    {
        image:"b13.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00"   
    },
    {
        image:"b7.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00" 
    },
    {
        image:"b15.webp",
        description:"Game Triger Finger New Insulated PH-X",
        price:"$287.00" 
    },
    
    
]
    return(
      <>
      <section className="grid grid-cols-1 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4  divide-x divide-y m-5">
      {BestItem.map((item,index) =>(
       <div className=" ">
            <Sellersdata key={index} image={item.image} title={item.description} price={item.price}/>
       </div>
         ))}
         </section>
      </>
    )
}