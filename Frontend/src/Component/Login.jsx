import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/auth/authAction';

const Login = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { isLoading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest(credentials));
    };

    return (
        // <form onSubmit={handleSubmit}>
        //   <input
        //     type="text"
        //     placeholder="Username"
        //     value={credentials.username}
        //     onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        //   />
        //   <input
        //     type="password"
        //     placeholder="Password"
        //     value={credentials.password}
        //     onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        //   />
        //   <button type="submit" disabled={isLoading}>Login</button>
        //   {error && <p>{error}</p>}
        // </form>
        <>
            <div>
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <form className="py-6" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col items-center md:items-start">
                        <label className="block text-md font-medium mb-1 w-full md:w-[90%]" htmlFor="username">
                            Username or email address <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full md:w-[90%] border border-gray-300 p-2" type="text" name="email" id="username" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                    </div>
                    <div className="mb-4 flex flex-col items-center md:items-start relative">
                        <label className="block text-md font-medium mb-1 w-full md:w-[90%]" htmlFor="password">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full md:w-[90%] border border-gray-300 p-2" type="password" name="password" id="password" required value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                        <i className="fas fa-eye absolute right-4 top-[58%] text-gray-500"></i>
                    </div>
                    <div className="mb-4 flex items-center mx-6 md:mx-0 gap-2">
                        <input className="form-checkbox" type="checkbox" id="remember" />
                        <label className="text-md font-semibold" htmlFor="remember">Remember me</label>
                    </div>
                    <div className="flex flex-col items-center md:items-start mx-6 md:mx-0">
                        <button className="bg-cyan-400 text-white p-2 hover:bg-black w-28 mb-4" type="submit" disabled={isLoading}>LOG IN</button>
                        {error && <p>{error}</p>}
                        <a href="#" className="text-lg text-black font-semibold inline-block">Lost your password?</a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
