export default function Service() {
    return (
        <>
            <section className="flex xl:gap-20 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4  justify-items-center  xl:justify-evenly bg-slate-200 pt-12 pb-12 mt-5 ml-3 mr-3">
                <div className="flex items-center gap-6  pb-5 pt-5">
                    <i className="fa-regular fa-message text-4xl text-red-500"></i>
                    <div className="">
                        <p className="text-lg  font-bold">SUPPORT 24/7</p>
                        <p className=" text-slate-500">Delicated 24/7 Support</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 pb-5 pt-5">
                    <i className="fa-solid fa-person-walking-arrow-loop-left text-4xl text-red-500"></i>
                    <div className="">
                        <p className="text-lg  font-bold ">EASY RETURNS</p>
                        <p className=" text-slate-500">Shop With Confidence</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 pb-5 pt-5">
                    <i className="fa-regular fa-credit-card text-4xl text-red-500"></i>
                    <div className="">
                        <p className="text-lg  font-bold ">CARD PAYMENT</p>
                        <p className=" text-slate-500">12 Months Installments</p>
                    </div>
                </div>

                <div className="flex items-center gap-6  pb-5 pt-5">
                    <i className="fa-solid fa-truck-fast text-4xl text-red-500 "></i>
                    <div className="">
                        <p className="text-lg  font-bold">FREE SHIPPING</p>
                        <p className=" text-slate-500">Capped at $50 per order</p>
                    </div>
                </div>
            </section>
        </>
    )
}