import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='w-[100] h-screen bg-gradient-to-br from-[#33ccff] to-[#ff99cc]'>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
