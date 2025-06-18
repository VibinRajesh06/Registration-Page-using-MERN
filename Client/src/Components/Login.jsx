import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:3000/auth/login",{
        email,
        password
      });
      const name = response.data.user.name;
      toast.success(`Welcome,${name}`);
    }catch(error){
      toast.error(error.response?.data?.message || 'Login failed. Try again.');
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#33ccff] to-[#ff99cc]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold uppercase text-center text-gray-700 mb-8">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email ID:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
        <div className='text-center mt-5'>
            New! Create an Account: <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
