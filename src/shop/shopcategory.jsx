export default function ShopCategory() {
    return (
        <>
            <section className="border bg-neutral-50 rounded-xl">
                <div className="p-8">
                <div className="pb-5 border-b border-red-600">
                    <p className="text-xl font-bold ">Category</p>
                </div>
                <div className="pb-3  ">
                    <div className="pb-5 pt-3  flex gap-3 items-center  border-b ">
                    <i class="fa-solid fa-gamepad text-gray-400"></i>
                       <a href=""><p>Video Game (12)</p></a> 
                    </div>
                    <div className="pb-5 pt-3 flex gap-3 items-center  border-b">
                    <i class="fa-solid fa-headphones text-gray-400"></i>
                        <a href=""><p>Portable Speakers (19)</p></a>
                    </div>
                    <div className="pb-5 pt-3 flex gap-3 items-center  border-b">
                    <i class="fa-solid fa-camera text-gray-400"></i>
                        <a href=""><p>Digital Camera (25)</p></a>
                    </div>
                    <div className="pb-5 pt-3 flex gap-3 items-center  border-b">
                    <i class="fa-regular fa-hand text-gray-400"></i>
                        <a href=""><p>Gadgets (15)</p></a>
                    </div>
                    <div className="pb-5 pt-3 flex gap-3 items-center  border-b">
                    <i class="fa-solid fa-house-user text-gray-400"></i>
                        <a href=""><p>Home Appliances (45)</p></a>
                    </div>
                    <div className="pb-5 pt-3 flex gap-3 items-center  border-b">
                    <i class="fa-solid fa-headset text-gray-400"></i>
                        <a href=""><p>Audio Record (25)</p></a>
                    </div>
                    <div className="pb-5 pt-3 flex gap-3 items-center  border-b">
                    <i class="fa-solid fa-laptop text-gray-400"></i>
                        <a href=""><p>Computer/Laptop (08)</p></a>
                    </div>
                </div>
                
                </div>
            </section>
        </>
    )
}