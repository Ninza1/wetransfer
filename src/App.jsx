import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from './components/common/Navbar.jsx'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      {/* <Navbar/> */}
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/signup" element={<Signup/>}/>
     </Routes>
     {/* <Home/> */}
     {/* <Login/> */}
     {/* <Signup/> */}
    </>
  )
}

export default App
