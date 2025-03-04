import React from 'react';
import Slider from 'react-slick';
const products = [
  {
    name: "Android Smart Watch New DGT -256",
    price: "$256.00",
    rating: 5,
    image: "d1.webp"
  },
  {
    name: "Headphone Supersonic Pew Adi -25",
    price: "$150.00",
    rating: 4,
    image: "d2.webp"
  },
  // Add more products as needed
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
   
    <div className=" border-2 border-red-500  rounded-lg ">
      <h2 className="text-xl font-bold mb-4 bg-red-500 p-4 text-white">Daily Deals!</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4 bg-white border rounded-md shadow">
            <div className="text-center overflow-hidden  bg-no-repeat">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-4  transition duration-300 ease-in-out hover:scale-110" />
              <div className="text-red-500 text-3xl font-bold">0</div>
              <div className="flex justify-center space-x-2 mb-4">
                <span>HRS</span>
                <span>MIN</span>
                <span>SEC</span>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-red-500">{product.price}</p>
              <p>{'⭐'.repeat(product.rating)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;

