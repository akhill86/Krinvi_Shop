import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../redux/auth/authSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRequest({ email, password }));
  };

  return (
    <div className="max-w-md mx-auto p-6 md:p-8 bg-white  rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-md font-medium mb-1">Email<span className="text-red-500">*</span></label>
          <input 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label className="block text-md font-medium mb-1">Password<span className="text-red-500">*</span></label>
          <input 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <p className="text-sm mb-4 text-center">A link to set a new password will be sent to your email address.</p>
        <p className="text-sm mb-6 text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        <button 
          className="w-full bg-cyan-400 hover:bg-black text-white p-2 rounded-md transition-all duration-300" 
          type="submit" 
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Register;
