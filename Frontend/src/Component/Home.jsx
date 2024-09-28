import React from "react";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import Carousel from './Carousel'
import Carousel2 from './Carousel2'

export default function Home() {
  return (
    <>
    <Carousel/>
    <h1 className="text-3xl font-sans font-semibold text-center mb-8 text-gray-700 mt-6">COLLECTION</h1>
     <Carousel2/>
      <img src="banner1shivji.webp" alt="" className="my-20" />

      <div className="flex flex-wrap justify-evenly items-center">
        <div className="mt-6 flex flex-col justify-center items-center">
          <a href="/product"><img src="b1im2.png" className="border w-72  rounded-xl shadow-2xl h-[60vh] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#BFEDFA]" /></a>
          <h1 className="text-lg font-semibold text-gray-700 mt-6   w-[60%]">
            om namah shivay Printed Regular UNISEX T-Shirts
          </h1>
          <h1 className="text-lg font-semibold text-center my-2 ">
            <del className="text-[#C8A8A7]">899</del> 497
          </h1>
          <div className="flex justify-center items-center mb-4  ">
            <button className=" bg-[#18D9E4] font-semibold px-5 py-2 border border-black hover:text-white hover:bg-black">
              <ShoppingCartIcon /> ADD TO CART{" "}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
          <img src="b1im3.png" className="border w-72  px-6 pt-6 rounded-xl shadow-2xl h-[60vh] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#BFEDFA]" />
          <h1 className="text-lg font-semibold text-gray-700 mt-6   w-[60%]">
          Shiv ji Printed Regular UNISEX T-Shirts
          </h1>
          <h1 className="text-lg font-semibold text-center my-2 ">
            <del className="text-[#C8A8A7]">899</del> 497
          </h1>
          <div className="flex justify-center items-center mb-4  ">
            <button className=" bg-[#18D9E4] font-semibold px-5 py-2 border border-black hover:text-white hover:bg-black">
              <ShoppingCartIcon /> ADD TO CART{" "}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
          <img src="b1im1.png" className="border w-72  rounded-xl shadow-2xl h-[60vh] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#BFEDFA]" />
          <h1 className="text-lg font-semibold text-gray-700 mt-6   w-[60%]">
          SHRI RAM Printed regular UNISEX T-Shirts
          </h1>
          <h1 className="text-lg font-semibold text-center my-2 ">
            <del className="text-[#C8A8A7]">899</del> 497
          </h1>
          <div className="flex justify-center items-center mb-4  ">
            <button className=" bg-[#18D9E4] font-semibold px-5 py-2 border border-black hover:text-white hover:bg-black">
              <ShoppingCartIcon /> ADD TO CART{" "}
            </button>
          </div>
        </div>
      </div>

      <img src="animeb.webp" alt="" className="object-cover my-20" />
      
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="mt-6 flex flex-col justify-center items-center">
          <img src="b2im2.png" className="border w-72  rounded-xl shadow-2xl h-[60vh] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#BFEDFA]" />
          <h1 className="text-lg font-semibold text-gray-700 mt-6   w-[60%]">
            om namah shivay Printed Regular UNISEX T-Shirts
          </h1>
          <h1 className="text-lg font-semibold text-center my-2 ">
            <del className="text-[#C8A8A7]">899</del> 497
          </h1>
          <div className="flex justify-center items-center mb-4  ">
            <button className=" bg-[#18D9E4] font-semibold px-5 py-2 border border-black hover:text-white hover:bg-black">
              <ShoppingCartIcon /> ADD TO CART{" "}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
          <img src="b2im1.png" className="border w-72  px-6 pt-6 rounded-xl shadow-2xl h-[60vh] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#BFEDFA]" />
          <h1 className="text-lg font-semibold text-gray-700 mt-6   w-[60%]">
          Shiv ji Printed Regular UNISEX T-Shirts
          </h1>
          <h1 className="text-lg font-semibold text-center my-2 ">
            <del className="text-[#C8A8A7]">899</del> 497
          </h1>
          <div className="flex justify-center items-center mb-4  ">
            <button className=" bg-[#18D9E4] font-semibold px-5 py-2 border border-black hover:text-white hover:bg-black">
              <ShoppingCartIcon /> ADD TO CART{" "}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
          <img src="b2im3.png" className="border w-72  rounded-xl shadow-2xl h-[60vh] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#BFEDFA]" />
          <h1 className="text-lg font-semibold text-gray-700 mt-6   w-[60%]">
          SHRI RAM Printed regular UNISEX T-Shirts
          </h1>
          <h1 className="text-lg font-semibold text-center my-2 ">
            <del className="text-[#C8A8A7]">899</del> 497
          </h1>
          <div className="flex justify-center items-center mb-4  ">
            <button className=" bg-[#18D9E4] font-semibold px-5 py-2 border border-black hover:text-white hover:bg-black">
              <ShoppingCartIcon /> ADD TO CART{" "}
            </button>
          </div>
        </div>
      </div>


      <div className="flex justify-center  items-center mt-20  bg-[#B3E5F2] h-[150px]">
        <img src="Group1.webp" alt="" className="object-contain   w-3/5 " />
      </div>
    </>
  );
}
