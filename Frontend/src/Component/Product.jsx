import React, { useState } from 'react';

import img1 from '../images/1.png';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import img4 from '../images/4.webp';


export default function Image() {
  const [selectImage, setselectImage] = useState(img1);
  const [allImg, setallImg] = useState([img2, img3, img4]);

  return (
    <>
      
       <div className="body mx-auto mt-12 px-4 md:px-8 bg-white max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
          {/* Left carousel */}
           <div>
            <div className="flex justify-center items-center">
              <img
                src={selectImage}
                className="w-[80%] h-auto md:w-[60%]"
                alt="Selected"
              />
            </div>

            <div className="flex my-1 justify-center items-center space-x-2">
              {allImg.map((img) => (
                <img
                  key={img}
                  onClick={() => {
                    setselectImage(img);
                  }}
                  src={img}
                  className="cursor-pointer w-16 h-16 object-cover md:w-20 md:h-20"
                  alt="Thumbnail"
                />
              ))}
            </div>
          </div>

          {/* Right Product Details */}
           <div className="p-4 md:p-8">
            <div className="text-gray-600 text-sm mb-2">Mens, Sawan Special, Womans</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Om Namah Shivay Printed Unisex T-Shirts
            </h1>
            <div className="text-lg mb-4">
              <span className="line-through text-gray-400">₹899.00</span>
              <span className="text-red-500 ml-2">₹497.00</span>
            </div>
            <div className="flex space-x-2 mb-4">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-4 py-2 text-sm md:text-base"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex space-x-2 mb-4">
              {['White', 'Green', 'Brown-Basil'].map((color) => (
                <button
                  key={color}
                  className="border border-gray-300 px-4 py-2 text-sm md:text-base"
                >
                  {color}
                </button>
              ))}
            </div>
            <div className="text-gray-500 mb-4">CLEAR</div>
            <div className="flex items-center mb-4">
              <input
                type="number"
                defaultValue="1"
                className="border border-gray-300 px-4 py-2 w-16 mr-4 text-center"
              />
              <button className="bg-blue-200 text-blue-700 px-6 py-2 text-sm md:text-base">
                ADD TO CART
              </button>
            </div>
            <div className="text-gray-600 text-sm">
              <span>SKU: N/A</span>
              <span className="ml-4">Categories: Mens, Sawan Special, Womans</span>
            </div>
            <div className="text-gray-600 text-sm mt-2">
              <span>Tags: har har mahadev, om namah shivay, om namah shivay printed t-shirts, sawan, sawan special, sawan t-shirts</span>
            </div>
          </div>
        </div> 

        {/* Product Description Section */}
         <div className="p-4 md:p-8 shadow-2xl mt-4">
          <div className="flex space-x-4 border-b border-gray-300 pb-2 mb-4">
            <button className="font-medium text-gray-900">Description</button>
            <button className="font-medium text-gray-500">Additional information</button>
            <button className="font-medium text-gray-500">Reviews (0)</button>
          </div>
          <div className="text-gray-700 text-sm md:text-base">
            <p className="mb-4">
              Introducing our Om Namah Shivay Printed T-Shirt, a perfect blend of spirituality and style. Designed to inspire and uplift, this t-shirt showcases the powerful mantra “Om Namah Shivay” prominently printed on the front, making it an ideal choice for those seeking a meaningful fashion statement.
            </p>
            <p>
              Crafted with utmost care, this t-shirt is made from premium quality, breathable fabric that ensures exceptional comfort throughout the day. The soft and lightweight material feels gentle against the skin, allowing you to wear it effortlessly for any occasion. Whether you’re going for a casual outing, a yoga session, or simply expressing your devotion, this t-shirt will be your go-to choice.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
}
