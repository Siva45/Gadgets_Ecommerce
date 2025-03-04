export default function Socialmedia(){
    return(
        <>
        <section className="">
            <p className="pb-3 text-lg font-bold">DOWNLOAD NOW</p>
            <p className="pb-3">Elehaus App is now available on App Store
            & Google Play. Get it now.</p>
            <div className="  pb-3">
                <img src="store-apple.webp" alt="" className="pb-3" />
                <img src="store-android.webp" alt="" />
            </div>
            <div className="flex gap-2 rounded-3 pb-3">
            <i className="fa-brands fa-facebook bg-sky-700 text-white p-2 rounded-md "></i>
            <i className="fa-brands fa-twitter bg-sky-400 text-white p-2 rounded-md"></i>
            <i className="fa-brands fa-instagram bg-pink-700 text-white p-2 rounded-md"></i>
            <i className="fa-brands fa-linkedin bg-sky-500 text-white p-2 rounded-md"></i>
            <i className="fa-brands fa-youtube bg-rose-600 text-white p-2 rounded-md "></i>
            </div>
        </section>
        </>
    )
} 