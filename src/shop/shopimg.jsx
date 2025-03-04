export default function Shopimg() {
    const shops = [
      {
        image: "prod1.webp",
        description: "Headphone Supersonic Pew Adi -25",
        price: "$283.00",
      },
      {
        image: "prod2.webp",
        description: "Bluetooth Speaker New Without Cable",
        price: "$160.00",
      },
      {
        image: "prod3.webp",
        description: "Headphone Supersonic Pew Adi -25",
        price: "$180.00",
      },
      {
        image: "prod4.webp",
        description: "Bluetooth Speaker New Without Cable",
        price: "$160.00",
      },
      {
        image: "prod5.webp",
        description: "Android Tablet 8.1 Mini Old - 256Gj",
        price: "$200.00",
      },
      {
        image: "prod6.webp",
        description: "Game Triger Finger New Insulated PH-X",
        price: "$160.00",
      },
      {
        image: "prod1.webp",
        description: "Headphone Supersonic Pew Adi -25",
        price: "$283.00",
      },
      {
        image: "prod4.webp",
        description: "Bluetooth Speaker New Without Cable",
        price: "$160.00",
      },
      {
        image: "prod2.webp",
        description: "Bluetooth Speaker New Without Cable",
        price: "$160.00",
      },
      {
        image: "prod6.webp",
        description: "Game Triger Finger New Insulated PH-X",
        price: "$160.00",
      },
      {
        image: "prod1.webp",
        description: "Headphone Supersonic Pew Adi -25",
        price: "$283.00",
      },
      {
        image: "prod5.webp",
        description: "Android Tablet 8.1 Mini Old - 256Gj",
        price: "$200.00",
      },
      {
        image: "prod3.webp",
        description: "Headphone Supersonic Pew Adi -25",
        price: "$180.00",
      },
    ];
    return(
        <>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 grid grid-cols-1 justify-items-center ">
         {shops.map((item, index) => (
          <section className="   bg-no-repeat w-72 ">  
          <div className="relative mt-5 p-5   " key={index}>
            <img src={item.image} alt={item.description} className=" w-full  shadow-lg "  />
            <div className="card-content text-center pb-5  shadow-lg">
              <a href="/product" className="p-6 pb-2 hover:text-red-500 font-serif">
                {item.description}
              </a>
              <p className="pb-2 text-lg text-red-500">{item.price}</p>
              <i className="fa-solid fa-star text-amber-500"></i>
              <i className="fa-solid fa-star text-amber-500"></i>
              <i className="fa-solid fa-star text-amber-500"></i>
              <i className="fa-solid fa-star text-amber-500"></i>
              <i className="fa-solid fa-star text-amber-500"></i>
            </div>
            <div className="absolute top-8 left-10">
              <p className="bg-amber-500 rounded-full pl-3 pr-3 text-white text-xs">
                HOT
              </p>
            </div>
            <div className="absolute right-10 top-6">
              <i className="fa-regular fa-heart bg-slate-300 rounded-full p-2 hover:bg-red-500 hover:text-white"></i>
        
            </div>
          </div>
          </section>
        ))}
        </div>
        </>
    )

}