export default function Sale() {
    
    return (
        <>
            <section className="  lg:flex block gap-5 items-center justify-center ml-3 mr-3">
                <div className="first relative pt-6 ">
                    <img src="slider4-bg1.webp" alt="" className="sm:h-96" />
                    <div className="first-content sm:flex block items-center absolute sm:bottom-36 sm:left-14 bottom-20 text-center justify-center ">
                        <div className="animate-slideUp">
                            <h1 className="md:text-3xl text-xl text-white font-bold pb-5">Bang & Olufsen <br />  Smart Speaker</h1>
                            <p className="text-white font-bold pb-7">Wireless Connection With  Computer, Laptop & TV</p>
                            <a href="" className="bg-white p-3 hover:bg-red-500">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="first-img">
                            <img src="galleryimg1.webp" alt="" className="pl-11 pt-7 animate-slideLeft"/>
                        </div>
                    </div>
                </div>
                <div className="figure sm:flex lg:flex-col-reverse pt-4 gap-6 items-center  ">
                    <div className="second relative  overflow-hidden  bg-no-repeat   ">
                        <img src="galleryimg2.webp" alt="" className=" transition duration-300 ease-in-out hover:scale-110" />
                        <div className="absolute bottom-20  left-10 transition duration-300 ease-in-out hover:scale-110">
                            <p className="text-white animate-slidein">Sparing Sales Coming</p>
                            <p className="text-white lg:text-3xl text-base font-bold sm:pb-3 animate-slidein">Smart Phone <br />
                                With Touch</p>
                            <a href="#" className="text-white text-base text-xs animate-slidein">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="third relative overflow-hidden bg-cover bg-no-repeat sm:pt-0 pt-4">
                        <img src="galleryimg3.webp" alt="" className="transition duration-300 ease-in-out hover:scale-110" />
                        <div className="absolute bottom-20 left-10  transition duration-300 ease-in-out hover:scale-110">
                            <p className="text-white sm:pb-2 animate-slidein">Sparing Sales Coming</p>
                            <p className="text-white lg:text-3xl font-bold text-base sm:pb-3 animate-slidein">Smart 4K Tv <br />
                                Watch Now</p>
                            <a href="#" className="text-white text-base text-xs animate-slidein">SHOP NOW <i class="fa-solid fa-arrow-right"></i></a>
                        </div>

                    </div>
                </div>


            </section>
        </>
    )
}