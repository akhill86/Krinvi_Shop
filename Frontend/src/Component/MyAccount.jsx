import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Account = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center px-4 md:px-0">
      <div className="bg-white p-6 sm:p-8 md:p-14 shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[98%] h-auto md:h-[90%] mt-10 mb-8 rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">My Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Account;
