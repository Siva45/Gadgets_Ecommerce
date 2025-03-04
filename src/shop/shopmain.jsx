
import Dept from "../Navbar/components/departments";
import Header from "../sidebar/components/HeroSection";
import Newproducts from "./newproducts";
import ProductFilter from "./productfilter";
import ShopCategory from "./shopcategory";
import Shopimg from "./shopimg";
import Sparingsales from "./sparingsales";
import Footermain from "../footer/footermain";





export default function Shopmain() {
    return (
        <> 
        <Header/>
        <Dept/>
        <div className="">
        <div className="flex justify-around login-bg ">
                <div className="ml-2">
                    <p className="sm:text-4xl font-bold">Products</p>
                    <p className="font-bold">Home // <span className="text-red-500">Single Product</span></p>
                </div>
                <div className="div">
                    <img src="/login-img.webp" alt="" className="  w-full md:h-40 h-24" />
                </div>
           </div>
        </div>
            <div className="md:flex  justify-around shop mt-5">
                <div className="">
                    <div className="div">
                        <ShopCategory />   
                    </div>
                    <div className="pt-10">
                        <ProductFilter />
                    </div>
                    <div className="pt-10">
                        <Newproducts />
                    </div>
                    <div className="pt-10">
                        <Sparingsales/>
                    </div>
                    
                </div>
                <Shopimg />
            </div>
            <Footermain/>
        </>
    )
}