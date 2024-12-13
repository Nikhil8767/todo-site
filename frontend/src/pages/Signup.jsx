    import React, { useState } from 'react'
    import Login from './Login'
    import { Navigate, useNavigate } from 'react-router-dom'



        
    

    const Signup = () => {

        const [userName,setUserName]=useState('');
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const Navigate=useNavigate();

        const handleSubmit=async(e)=>{
            e.preventDefault();
            // console.log(userName,email,password);
            if(!userName || !email || !password){
                alert("please fill the form")
            }

            const signupData = {
                userName,
                email,
                password,
              };

            try {
                // Sending a POST request to the backend to create a new user
                const response = await fetch('http://localhost:4000/api/auth/signup', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json', // Ensures the request body is in JSON format
                  },
                  body: JSON.stringify(signupData), // Sending the data as JSON
                });
          
                const data = await response.json();
          
                // Check if the signup was successful
                if (response.ok) {
                  // If successful, navigate to the login page
                  Navigate('/');
                } else {
                  // If there's an error, display the message
                  setErrorMessage(data.message || 'Signup failed. Please try again.');
                }
              } catch (error) {
                console.error('Error during signup:', error);
                setErrorMessage('An error occurred. Please try again.');
              }
            
        


        }


    


    return (<>
    
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600'>
            
            <div className=' bg-white p-8 rounded-lg shadow-lg w-80 h-80'>
                <h1 className='text-2xl font-bold mb-6 text-center text-gray-800 '>signup</h1>
            
            <div className='space-y-5'>
                <input className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='enter your name' required />
                <input className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" value={email} onChange={(e=>setEmail(e.target.value))} placeholder='enter your email' required />
                <input className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' required />
                <button className='w-full bg-indigo-600 rounded-lg text-white font-semibold py-2 hover:bg-blue-600' type='submit' onClick={handleSubmit} >Submit</button>
            </div>
            </div>
        </div>
        </>
    )
    }

    export default Signup