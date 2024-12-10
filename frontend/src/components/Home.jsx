import React, { useEffect, useState } from 'react'
import Login from '../pages/Login'

const Home = () => {

  const [work,setWork]=useState('');
  const [time,setTime]=useState('');
  const [task,setTask]=useState([]);


  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  const addTask=()=>{
    if(work && time){
      let newTask={work, time};
      setTask([...task,newTask]);
      setTime('');
      setWork('');
    }
    else{
      alert("please enter task and time")
    }
  }

 

  return (
    <div className='p-10'>
      <div className='p-10 '>
        <h1 className='flex justify-center items-center'>Make Your <span className='gap-2 font-bold text-2xl underline b'> TODO</span></h1>
      </div>
      <div>
        <label></label>
        <input className='border border-black rounded-lg  gap-3 text-xl ' type="text" value={work} onChange={(e)=>setWork(e.target.value)}  placeholder='enter your task'/>
        <input className='ml-3 border shadow-md ' type="time" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='decide the time' />
        <button className='bg-black text-white ml-12 ' onClick={addTask} >done</button>
      </div>
      <div>
        {task.length>0 ?(
          <ul>
            {task.map((t,index)=>( 
              <li key={index}>
                {t.work} at 
                {t.time}
              </li>
            ))}
          </ul>
        ):(
          <p>no task added yet</p>
        )}
      </div>
    </div>
    
  )
}


export default Home