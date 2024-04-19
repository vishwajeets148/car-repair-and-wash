import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
 
    const authToken = sessionStorage.getItem("token")


  return  authToken ?  <Outlet/>:<Navigate to="/admin-login" />

}

export default PrivateRoute