export default function Contactus(){
    return(
        <>
        <section>
            <p className="pb-3 text-lg font-bold">CONTACT US</p>
            <p className="pb-2">If you have any question. please
            contact us demo@example.com</p>
            <div className="flex gap-2 pb-2 items-center">
            <i class="fa-solid fa-location-dot text-2xl text-red-500"></i>
            <p>Your address goes here.
            123, Address.</p>
            </div>
            <div className="flex gap-2 items-center">
            <i class="fa-solid fa-mobile-screen text-2xl text-red-500"></i>
            <p>9876543212</p>
            </div>
        </section>
        </>
    )
}   