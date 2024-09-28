import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Home from './Component/Home'
import Product from "./Component/Product";
import ReturnAndRefund from "./Component/ReturnAndRefund"
import PrivacyPolicy from "./Component/PrivacyPolicy";
import Term from "./Component/Term";
import FAQ from "./Component/FAQ";
import MyAccount from "./Component/MyAccount"

const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/return-and-refund" element={<ReturnAndRefund/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/term-and-condition" element={<Term/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/MyAccount" element={<MyAccount/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App



