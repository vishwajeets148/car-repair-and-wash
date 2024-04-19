import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Booking from './components/Booking'
import Team from './components/Team'
import ErrorPage from './components/ErrorPage'
import Register from './components/Register'
import Fetch from './components/Fetch'
import Update from './components/Update'
import AdminLogin from './admin/AdminLogin'
import AdminRegister from './admin/AdminRegister'
import PrivateRoute from './admin/PrivateRoute'
import ContactFetch from './components/ContactFetch'
import AppointementFetch from './components/AppointementFetch'



function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/fetch" element={<Fetch/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>

        </Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/contactfetch" element={<ContactFetch/>}></Route>
      <Route path="/appointementfetch" element={<AppointementFetch/>}></Route>
      
    
      
      <Route path="/admin-login" element={<AdminLogin/>}></Route>
      <Route path="/admin-register" element={<AdminRegister/>}></Route>


    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App