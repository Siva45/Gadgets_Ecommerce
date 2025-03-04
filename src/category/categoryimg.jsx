import CategoryData from "./categorydata";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CategoryImg(){
    const categoryItem=[
        {
        image:"1.webp",
        title:"Audio & Video",
    },
{
    image:"2.webp",
    title:"Gaming"
},
{
    image:"3.webp",
    title:"Headphone"
},                                            
{
    image:"4.webp",
    title:"Digital Camera"                     
},
{
    image:'5.webp',
    title:"Mobile Phones"
}] ;
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
return(
    <>

    <div className=" bg-[url('bg2.webp')] h-80 ">
    <div className="  ">
      <p className="text-center pt-12 sm:text-3xl text-xl font-bold   sans-serif">Top Categories</p>
    </div>
   
    <div  className="   md:ml-10 md:mr-10  p-10 " > 
    <Carousel 
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={200}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      > 
        {categoryItem.map((category,index) => (
            <CategoryData  key={index} image={category.image} categorytitle={category.title}/>
        ))}
        </Carousel>
    </div>
    
      </div>
     
    </>                               
)
}