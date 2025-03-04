

export default function UpSales() {
    const coming = [{
        image: "pr1.webp",
        description: "Sparing Sales Coming",
        topic: "Smart Watch Android",
        link: "Shop Now",
    },
    {
        image: "pr2.webp",
        description: "Sparing Sales Coming",
        topic: "New Smart Phone With Touch",
        link: "Shop Now",
    },
        {
        image: "pr3.webp",
        description: "Sparing Sales Coming",
        topic: "Smart Phone With Pen",
        link: "Shop Now",
    }];
    return (
        <>
            
            <section className=" pt-12 gap-7 m-5 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 ">
            {coming.map((item, index) => (
                  <div className="relative overflow-hidden  bg-no-repeat  ">
                    <img src={item.image} alt="" className="transition duration-700 ease-in-out hover:scale-110"/>
                    <div className="absolute lg:top-10 md:top-5 xl:top-12 top-4 left-3 text-center">
                        <p className="text-white animate-slidein">{item.description}</p>
                        <h1 className="text-white text-2xl max-w-52 text-wrap font-bold  ">{item.topic}</h1>
                        <a href="#" className="text-white ">{item.link}<i className="fa-solid fa-arrow-right pl-2"></i></a>
                    </div>
                </div>
                     ))}
                <div className="div">

                </div>
                <div className="div">

                </div>
               
            </section>
        
        </>
    )
}