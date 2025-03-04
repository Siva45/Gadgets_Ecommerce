export default function Newproducts() {
    const Newlaunch = [
        {
            image: "w1.webp",
            title: "Android Phone New XP",
            price: "$256.00"
        },
        {
            image: "w2.webp",
            title: "Digital Camera HYU-259Xl",
            price: "$356.00"
        },
        {
            image: "w3.webp",
            title: "New Headphone Adi-25",
            price: "$156.00"
        }
    ]
    return (
        <>
            <section className="border bg-neutral-50 rounded-xl ">
                <div className="div">
                    <p className="p-5 text-xl font-bold border-b border-red-600">New products</p>
                </div>
                {Newlaunch.map((item, index) =>
                    <div className=" pt-3 pb-3">
                        <div className="flex gap-3 items-center p-2  ">
                            <div className="">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="border-b">
                                <a href=""><p className="max-w-40">{item.title}</p></a>
                                <p className="text-red-600 font-bold">{item.price}</p>
                            </div>
                        </div>

                    </div>
                )}
            </section>
        </>
    )
}