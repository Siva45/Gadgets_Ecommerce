import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function Product() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
       await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            console.log( "api data",res.data);
            setData(res.data);
          });
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(Data);
  }, []);

  // const cards = [
  //   {
  //     id: 1,
  //     image: "prod1.webp",
  //     description: "Headphone Supersonic Pew Adi -25",
  //     price: "$283.00",
  //     status: "Hot",
  //   },
  //   {
  //     id: 2,
  //     image: "prod2.webp",
  //     description: "Bluetooth Speaker New Without Cable",
  //     price: "$160.00",
  //     status: "Sold Out",
  //   },
  //   {
  //     id: 3,
  //     image: "prod3.webp",
  //     description: "Headphone Supersonic Pew Adi -25",
  //     price: "$180.00",
  //     status: "New",
  //   },
  //   {
  //     id: 4,
  //     image: "prod4.webp",
  //     description: "Bluetooth Speaker New Without Cable",
  //     price: "$160.00",
  //     status: "Sold Out",
  //   },
  //   {
  //     id: 5,
  //     image: "prod5.webp",
  //     description: "Android Tablet 8.1 Mini Old - 256Gj",
  //     price: "$200.00",
  //     status: "New",
  //   },
  //   {
  //     id: 6,
  //     image: "prod6.webp",
  //     description: "Game Triger Finger New Insulated PH-X",
  //     price: "$160.00",
  //     status: "Hot",
  //   },
  //   {
  //     id: 7,
  //     image: "prod7.webp",
  //     description: "Android Television Super New DGT -256",
  //     price: "$150.00",
  //     status: "New",
  //   },
  // ];
  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "badge-new";
      case "Sold Out":
        return "badge-sold-out";
      case "Hot":
        return "badge-hot";
      default:
        return "";
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // slidesToSlide: , // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="">
        <p className="text-2xl font-bold pt-12 ml-3 text-center sm:text-left">
          New Top Sales!
        </p>
        <div className="flex gap-4 sm:justify-end justify-center mr-5 ml-5 font-bold border-b-2 pb-2">
          <a href="">Audio&Video</a>
          <a href="">Gaming</a>
          <a href="">Headphone</a>
        </div>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .2"
        transitionDuration={200}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Data.map((item, index) => (
          <section className=" overflow-hidden  bg-no-repeat ">
            <div
              className="relative mt-5 p-5   transition duration-300 ease-in-out hover:scale-110 "
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className=" h-64 w-64 shadow-lg  justify-self-center"
              />
              <div className="card-content text-center pb-5  shadow-lg">
                <a
                  href={`/product/${item.id}`}
                  className="p-6 pb-2 hover:text-red-500 font-serif"
                >
                  {item.title}
                </a>
                <p className="pb-2 text-lg text-red-500">{item.price}</p>
                <i className="fa-solid fa-star text-amber-500"></i>
                <i className="fa-solid fa-star text-amber-500"></i>
                <i className="fa-solid fa-star text-amber-500"></i>
                <i className="fa-solid fa-star text-amber-500"></i>
                <i className="fa-solid fa-star text-amber-500"></i>
              </div>
              <div className="absolute top-8 left-10">
                <p className={`badge ${getStatusClass(item.status)}`}>
                  {item.status}
                </p>
              </div>
              <div className="absolute right-10 top-6">
                <i className="fa-regular fa-heart bg-slate-300 rounded-full p-2 hover:bg-red-500 hover:text-white"></i>
              </div>
            </div>
          </section>
        ))}
      </Carousel>
    </>
  );
}

// import Carousel from "react-multi-carousel";
// export default function Product() {

//     const cards = [
//         {
//             image: "prod1.webp",
//             description: "Headphone Supersonic Pew Adi -25",
//             price: "$283.00"
//         },
//         {
//             image: "prod2.webp",
//             description: "Bluetooth Speaker New Without Cable",
//             price: "$160.00"
//         },
//         {
//             image: "prod3.webp",
//             description: "Headphone Supersonic Pew Adi -25",
//             price: "$180.00"
//         },
//         {
//             image: "prod4.webp",
//             description: "Bluetooth Speaker New Without Cable",
//             price: "160.00"
//         },
//         {
//             image: "prod5.webp",
//             description: "Android Tablet 8.1 Mini Old - 256Gj",
//             price: "$200.00"
//         },
//         {
//             image: "prod6.webp",
//             description: "Game Triger Finger New Insulated PH-X",
//             price: "$160.00"
//         },
//         {
//             image: "prod7.webp",
//             description: "Android Television Super New DGT -256",
//             price: "$150.00"
//         }]
//         const responsive = {
//             desktop: {
//                 breakpoint: { max: 3000, min: 1024 },
//                 items: 3,
//                 slidesToSlide: 3 // optional, default to 1.
//             },
//             tablet: {
//                 breakpoint: { max: 1024, min: 464 },
//                 items: 2,
//                 slidesToSlide: 2 // optional, default to 1.
//             },
//             mobile: {
//                 breakpoint: { max: 464, min: 0 },
//                 items: 1,
//                 slidesToSlide: 1 // optional, default to 1.
//             }
//         };
//     return (
//         <>
//                <Carousel
//                 swipeable={false}
//                 draggable={false}
//                 showDots={true}
//                 responsive={responsive}
//                 ssr={true} // means to render carousel on server-side.
//                 infinite={true}
//                 autoPlay={this.props.deviceType !== "mobile" ? true : false}
//                 autoPlaySpeed={1000}
//                 keyBoardControl={true}
//                 customTransition="all .5"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//                 deviceType={this.props.deviceType}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//             >

//             <div><section className="mt-8 flex gap-10 ml-3">
//                 {cards.map((item, index) => (
//                     <div className="relative">
//                         <img src={item.image} alt="" className="w-full " />
//                         <div className="card-content text-center pb-5">
//                             <a href="#" className="p-6 pb-2 hover:text-red-500 font-serif">{item.description}</a>
//                             <p className="pb-2 text-lg text-red-500">{item.price}</p>
//                             <i className="fa-solid fa-star text-amber-500"></i>
//                             <i className="fa-solid fa-star text-amber-500"></i>
//                             <i className="fa-solid fa-star text-amber-500"></i>
//                             <i className="fa-solid fa-star text-amber-500"></i>
//                             <i className="fa-solid fa-star text-amber-500"></i>
//                         </div>
//                         <div className="absolute top-2 left-2">
//                             <p className="bg-amber-500 rounded-full pl-3 pr-3 text-white text-xs">HOT</p>
//                         </div>
//                         <div className="absolute right-5 top-2  ">
//                             <i className="fa-regular fa-heart bg-slate-300 rounded-full p-2 hover:bg-red-500 "></i>
//                         </div>
//                     </div>
//                 ))}

//             </section></div>

//             </Carousel>
//         </>
//     )
// }
