import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

export default function Footer() {
  return (
    <>
<div className="bg-white flex flex-col lg:flex-row justify-evenly mt-16 py-8">
    <div className="flex flex-col lg:flex-row w-full lg:w-1/3 justify-around items-center mb-8 lg:mb-0">
      <div className="flex flex-col items-center lg:items-start">
        <ParaglidingIcon sx={{ color: "#DDD1C1", fontSize: "40px" }} />
        <h1 className='font-medium mt-4 text-xl text-center lg:text-left'>7 DAYS RETURN POLICY</h1>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <LocalShippingIcon sx={{ color: "#DDD1C1", fontSize: "40px" }} />
        <h1 className='font-medium mt-4 text-xl text-center lg:text-left'>FREE SHOPPING</h1>
      </div>
    </div>

    <div className="lg:border-r-2 lg:border-[#DDD1C1] hidden lg:block"></div>

    <div className="flex flex-col items-center lg:items-start">
      <h1 className='text-2xl font-medium mb-6 mt-2 text-center lg:text-left'>Newsletter Sign Up</h1>
      <div className="flex flex-col sm:flex-row">
        <input type="text" placeholder='Your email please' className='py-2 w-64 outline-none border border-red-700 pl-2 mb-4 sm:mb-0 sm:mr-4' />
        <button className='font-Inter bg-[#18D9E4] px-10 py-2 font-medium border border-black hover:bg-black hover:text-white'>SUBSCRIBE</button>
      </div>
    </div>
  </div>
    
    <div className="bg-black h-auto lg:h-[60vh] mt-14">
  <div className="flex flex-col items-center lg:flex-row lg:justify-evenly gap-6 text-white pt-10">
    <div className="flex flex-col mb-8 lg:mb-0">
      <h1 className='mb-6 lg:mb-10 text-2xl lg:text-3xl font-Inter font-medium'>Information</h1>
      <a href=""><h3 className='text-md lg:text-lg font-Inter font-medium mb-1'>About Us</h3></a>
      <a href=""><h3 className='text-md lg:text-lg font-Inter font-medium mb-1'>Contact Us</h3></a>
      <a href="/faq"><h3 className='text-md lg:text-lg font-Inter font-medium mb-1'>FAQ</h3></a>
    </div>
    <div className="flex flex-col mb-8 lg:mb-0">
      <h1 className='mb-6 lg:mb-10 text-2xl lg:text-3xl font-Inter font-medium'>Customer Service</h1>
      <a href="/return-and-refund"><h3 className='text-md lg:text-lg font-Inter font-medium mb-1'>Return & Refund Policy</h3></a>
      <a href="/privacy-policy"><h3 className='text-md lg:text-lg font-Inter font-medium mb-1'>Privacy Policy</h3></a>
      <a href="/term-and-condition"><h3 className='text-md lg:text-lg font-Inter font-medium mb-1'>Terms & Conditions</h3></a>
    </div>
    <div className="flex flex-col mb-8 lg:mb-0">
      <h1 className='mb-6 lg:mb-10 text-2xl lg:text-3xl font-Inter font-medium'>Contact Us</h1>
      <div className="flex flex-col space-y-2">
        <label className='flex items-center'>
          <LocationOnIcon sx={{fontSize:'25px'}}/> 
          <span className='ml-2'>New Delhi-110092</span>
        </label>
        <label className='flex items-center'>
          <CallIcon className='py-1 rounded text-black bg-white' sx={{fontSize:'25px'}}/> 
          <span className='ml-2'>+91-9354795744</span>
        </label>
        <label className='flex items-center'>
          <MailOutlinedIcon sx={{fontSize:'25px'}}/> 
          <span className='ml-2'>info@krinvi.com</span>
        </label>
      </div>
    </div>
    <div className="flex flex-col mb-8 lg:mb-0">
      <h1 className='mb-6 lg:mb-10 text-2xl lg:text-3xl font-Inter font-medium'>Follow Us</h1>
      <div className="flex gap-4">
        <FacebookIcon sx={{backgroundColor:"#355089",fontSize:"30px"}} className='py-1 rounded'/>
        <InstagramIcon sx={{backgroundColor:"#BD3535",fontSize:"30px"}} className='py-1 rounded'/>
      </div>
    </div>
  </div>

  <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
    <label className='text-lg lg:text-xl flex items-center'>
      <KeyboardReturnOutlinedIcon sx={{fontSize:"35px"}}/> 
      <span className='ml-2'>7 Day Return Policy</span>
    </label>
    <label className='text-lg lg:text-xl flex items-center'>
      <PriceChangeIcon sx={{fontSize:"35px"}}/> 
      <span className='ml-2'>Cash on Delivery Available</span>
    </label>
    <label className='text-lg lg:text-xl flex items-center'>
      <ShoppingCartIcon sx={{fontSize:"35px"}}/> 
      <span className='ml-2'>Free Shipping all over India</span>
    </label>
  </div>
</div>

    </>
  )
}
