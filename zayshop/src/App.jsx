import { lazy, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import Register from './Register';

function App() {

  
  return (
   <>
   <BrowserRouter>
  
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
   </Routes>
   <Footer></Footer>

   </BrowserRouter>

   </>
  )
}

export default App
