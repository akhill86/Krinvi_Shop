import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/auth/authSlice';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error , success} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (success) {
      navigate('/Home')
    }
  }, [navigate, success])

  return (
    <div className="max-w-md mx-auto p-6 md:p-8 bg-white rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-md font-medium mb-1">Email<span className="text-red-500">*</span></label>
          <input 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-md font-medium mb-1">Password<span className="text-red-500">*</span></label>
          <input 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <i className="fas fa-eye absolute right-4 top-10 text-gray-500 cursor-pointer"></i>
        </div>
        <div className="flex items-center mb-4">
          <input 
            className="form-checkbox h-4 w-4 text-cyan-400 border-gray-300 rounded" 
            type="checkbox" 
            id="remember" 
          />
          <label 
            className="ml-2 block text-md font-semibold text-gray-700" 
            htmlFor="remember"
          >
            Remember me
          </label>
        </div>
        <div className="mb-4 text-center">
          <a href="#" className="text-lg text-black font-semibold hover:underline">Lost your password?</a>
        </div>
        <button 
          className="w-full bg-cyan-400 hover:bg-black text-white p-2 rounded-md transition-all duration-300" 
          type="submit" 
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
