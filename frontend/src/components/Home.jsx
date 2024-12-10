import React, { useEffect, useState } from 'react'
import Login from '../pages/Login'

const Home = () => {

  const [work,setWork]=useState('');
  const [time,setTime]=useState('');
  const [task,setTask]=useState([]);
  const [editIndex,setEditIndex]=useState(null);
  const [currentDate,setCurrentDate]=useState('');
  useEffect(()=>{
    const updateDateTime=()=>{ 
    const date=new Date();

    const formattedDate=date.toLocaleDateString('en-US',{
      weekday:'long',
      year:'numeric',
      month:'long',
      day:'numeric',

    });

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // Use 12-hour clock with AM/PM
    });



    setCurrentDate({date:formattedDate,time:formattedTime});
  
  }
    updateDateTime();
    const intervalId=setInterval(updateDateTime,1000);
  },[])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  const addOrUpdateTask = () => {
    if (!work || !time) {
      alert("Please enter task and time");
      return;
    }

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = [...task];
      updatedTasks[editIndex] = { work, time };
      setTask(updatedTasks);
      setEditIndex(null); // Reset edit index
    } else {
      // Add new task
      const newTask = { work, time };
      setTask([...task, newTask]);
    }

    // Clear input fields
    setWork("");
    setTime("");
  };


  const editTask=(index)=>{
    setWork(task[index].work);
    setTime(task[index].time);
    setEditIndex(index);
  }

  const deleteTask=(indexToDelete)=>{
    const updatedTask=task.filter((_,index)=>index !==indexToDelete);
    setTask(updatedTask);
  };

 

  return (
    <div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
      <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl p-6 mb-6 '>
        <h1 className='text-3xl font-bold text-center text-indigo-600'>Make Your {" "} <span className='font-bold  underline '> TODO</span></h1>
        <div className='flex justify-between items-center mt-4 text-gray-600'>
          <h3 className='text-lg font-semibold '>{currentDate.date}</h3>
          <h3 className='text-lg font-semibold'>{currentDate.time}</h3>
        </div>
      </div>

      <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl p-6'>
        <div className='flex space-x-4 mb-4'>
        <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600' type="text" value={work} onChange={(e)=>setWork(e.target.value)}  placeholder='enter your task'/>
        <input className='w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' type="time" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='set time' />
        <button className='px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ' onClick={addOrUpdateTask} >done</button>
      </div>
      </div>
      
      <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl p-6 mt-6'>
        {task.length>0 ?(
          <ul className='space-y-4'>
            {task.map((t,index)=>( 
              <li className='flex justify-between items-center border-b border-gray-300 py-2' key={index}>
               <span className='text-lg font-semibold text-gray-800'>{t.work} at {t.time}</span> 

               <div className='space-x-4 '>
                <button className='px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600' onClick={()=>editTask(index)}>Edit</button>
                <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600' onClick={()=>{deleteTask(index)}}>delete</button>
                </div>
              </li>
              
            ))}
          </ul>
        ):(
          <p className='text-lg text-center text-gray-600 '>no task added yet</p>
        )}
      </div>
    </div>
    
  )
}


export default Home