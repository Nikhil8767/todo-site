import React, { useState } from 'react'
import Login from '../pages/Login'

const Home = () => {

  const [work,setWork]=useState('');
  const [time,setTime]=useState('');

  const oneClick=()=>{
    <div>
    <h2>{work}</h2>
    <h3>{time}</h3>
    </div>
  }

  return (
    <div className=''>
      <div className=''>
        <h1 className='flex justify-center items-center'>Make Your <span className='gap-2 font-bold text-2xl underline b'> TODO</span></h1>
      </div>
      <div>
        <label></label>
        <input type="text" onChange={(e)=>setWork(e.target.value)}  placeholder='enter your task'/>
        <input type="time" onChange={(e)=>setTime(e.target.value)} placeholder='decide the time' />
        <button className='bg-black text-white ml-12 ' onClick={oneClick} >done</button>
      </div>
      <oneClick/>
    </div>
    
  )
}


export default Home