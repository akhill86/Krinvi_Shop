// src/components/Signup.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../redux/auth/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ password: '', email: '' });
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupRequest(credentials));
  };

  return (
      <>
     {/* <!-- Register Section -->  */}
             <div>
                <h2 className="text-xl font-semibold mb-4">Register</h2>
                <form className="w-full py-6 gap-2"  onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-md font-medium mb-1" htmlFor="email">Email address <span className="text-red-500">*</span></label>
                        <input className="w-full border border-gray-300 p-2" type="email" name="email" id="email" required value={credentials.email} onChange={(e)=> setCredentials({ ...credentials, email: e.target.value })}/>
                    </div>
                    <div className="mb-4 flex flex-col items-center md:items-start relative">
                        <label className="block text-md font-medium mb-1 w-full md:w-[90%]" htmlFor="password">
                          Password <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full md:w-[90%] border border-gray-300 p-2" type="password" name="password" id="password1" required value={credentials.password} onChange={(e)=> setCredentials({ ...credentials, password: e.target.value })}/>
                    </div>
                    <p className="text-md mb-4">A link to set a new password will be sent to your email address.</p>
                    <p className="text-md mb-4 text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button className="w-28 bg-cyan-400 hover:bg-black text-white p-2 rounded" type="submit" disabled={isLoading}>REGISTER</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
    </>
  );
};

export default Signup;
