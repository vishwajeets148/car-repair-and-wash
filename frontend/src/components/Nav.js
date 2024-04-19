import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
    const authToken = sessionStorage.getItem("token")
    const navigate= useNavigate()
    const emailId= sessionStorage.getItem("email")

     
    const logoutUser =()=>{
        sessionStorage.clear()
        navigate("/admin-login")
    }
  return (
    <>


    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Gale no-4, Shakarpur, Laxmi Nagar, New Delhi</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+ 08800124571</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <Link className="btn btn-sm-square bg-white text-primary me-1" to=""><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-sm-square bg-white text-primary me-1" to=""><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-sm-square bg-white text-primary me-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="btn btn-sm-square bg-white text-primary me-0" to=""><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}
    {
      authToken ? 
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Global Auto Repair</h2>
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/appointementfetch" className=" nav-item nav-link">Appointement </Link>  
          <Link to="/contactfetch" className=" nav-item nav-link">Contact </Link>
              <Link to="/fetch" className=" nav-item nav-link"> Register  </Link>
              
          </div>
          <Link to="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" onClick={logoutUser} >Logout | Welcome {emailId}<i className="fa fa-arrow-right ms-3"></i></Link>
          {/* <Link to="/fetch" className="nav-item nav-link" onClick={logoutUser}  >Logout | Welcome {emailId} </Link> */}
      </div>
  </nav>
    
   
    // {/* <!-- Navbar Start --> */}
  
    // {/* <!-- Navbar End --> */}
    :

    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Global Auto Repair</h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu fade-up m-0">
                        <Link to="/booking" className="dropdown-item">Booking</Link>
                        <Link to="/team" className="dropdown-item">Technicians</Link>
                       
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                <Link to="/register" className="nav-item nav-link">Register</Link>
             
               
            </div>
            <Link to="/register" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>
 }
    </>
  )
}

export default Nav