import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>


     </Routes>
    </>
  )
}

export default App
