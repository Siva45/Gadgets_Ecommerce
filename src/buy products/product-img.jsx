// import React, { useState } from 'react';

// const ProductGallery = () => {
//   const images = [
//     'prod1.webp',  // Replace with your actual image URLs
//     'prod2.webp',
//     'prod2.webp'
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => 
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div>
//       <div className="main-image">
//         <img src={images[activeIndex]} alt="Product" />
//       </div>
//       <div className="thumbnails">
//         {images.map((img, index) => (
//           <img 
//             key={index} 
//             src={img} 
//             alt={`Thumbnail ${index}`} 
//             onClick={() => setActiveIndex(index)}
//             style={{ border: activeIndex === index ? '2px solid red' : 'none' }}
//           />
//         ))}
//       </div>
//       <div className="controls">
//         <button onClick={handlePrev}>Prev</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;


import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleThumbnails = 4;

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  const scrollThumbnails = (direction) => {
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
    }
  };

  const startThumbnailIndex = Math.max(0, currentIndex - Math.floor(visibleThumbnails / 2));
  const endThumbnailIndex = Math.min(images.length, startThumbnailIndex + visibleThumbnails);

  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src={images[currentIndex]}
        alt="Main Image"
        className="w-full h-auto mb-4 rounded-lg shadow-md"
      />

      <div className="relative">
        <div className="flex space-x-2 overflow-hidden pb-2 justify-center">
          {images.slice(startThumbnailIndex, endThumbnailIndex).map((img, index) => (
            <img
              key={index}
              src={`${img}`}
              alt={`Thumbnail ${startThumbnailIndex + index + 1}`}
              onClick={() => changeImage(startThumbnailIndex + index)}
              className={`w-16 h-16 object-cover rounded cursor-pointer hover:opacity-75 transition ${
                startThumbnailIndex + index === currentIndex ? 'border-2 border-blue-500' : ''
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollThumbnails(-1)}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow hover:bg-opacity-75 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === 0}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <button
          onClick={() => scrollThumbnails(1)}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow hover:bg-opacity-75 ${
            currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === images.length - 1}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
