import React, { useState } from 'react'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!email || !password){
            toast.error("fill the details")
        }
        // else{
        //     navigate("/home")
        // }
        // console.log(userName,password);
        const loginData = {
            email,
            
            password,
          };

        try {
            
            const response=await fetch('http://localhost:4000/api/auth/',{
                method:'post',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            const data=await response.json();
            if(response.ok){
                navigate('/home')
            }
            else{
              toast.error (data.message || 'login failed')
            }
        } catch (error) {
            console.error('Error during login:', error);
      toast.error('An error occurred. Please try again.');
        }
    }

  return (<>

   <div className='flex items-center justify-center h-screen bg-gradient-to-r from-black to-gray-400'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-80'>
            <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Login</h2>
            <div className='space-y-4 '>
                <input className='w-full px-4 py-2  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your name' />
                <input className='w-full px-4 py-2  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' />
                <button className='w-full bg-blue-500 rounded-lg text-white font-semibold py-2 hover:bg-blue-600' onClick={handleSubmit}>Submit</button>
            </div>
            <div className='mt-4 text-center'>
                <p className='text-gray-600'>Don't have an account?
                    <a href="/signup" className='text-blue-500 hover:underline font-medium cursor-pointer'>signup</a>
                </p>
            </div>
        </div>
   </div>
  
   
   </>
  )
}

export default Login