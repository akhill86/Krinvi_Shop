import React from "react";
import Login from "./Login";
import Signup from "./Signup";


const Account = () => {
  return (
   <>
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center px-4 md:px-0">
     <div className="bg-white p-14 md:p-14 shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[92%] h-auto md:h-[90%] mt-26 md:mt-8 mb-8">
        <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">My account</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Login/>
            <Signup/>
        </div>
     </div>
   </div>
   </>
  );
};

export default Account;
