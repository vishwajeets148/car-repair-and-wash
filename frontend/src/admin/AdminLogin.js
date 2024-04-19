import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function AdminLogin() {

    const navigate= useNavigate()
  const  a= {email:"", password:""}

  const[state,setState] = useState(a)

  const baseurl = process.env.REACT_APP_BASEURL;

    const handler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const submitData= async (e)=>{
        e.preventDefault()
       const{email,password}=state
       if( email && password){
    let result = await fetch(`${baseurl}/admin-login`, {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

          result = await result.json()

        //   console.log(result)
         if(result.token){
            sessionStorage.setItem("email",result.userEmail.email )
            sessionStorage.setItem("profile",result.userEmail.profile)
            sessionStorage.setItem("token",result.token )
            navigate("/fetch")
         }
         else{
             alert("Your email and password incorrect")
         }



            // .then((response) => response.json())
            // .then((json) => {
            //     console.log(json)
            //     alert(json.message)
            //     navigate("/fetch")
            // }).catch(()=>console.log("API Call Error"))
       }
       else{
         alert("All field is Required")
       }

        // console.log(state)
    }


  return (
    <>
  
     {/* <!-- Page Header Start --> */}
     <div className="container-fluid page-header mb-5 p-0" style={{backgroundimage: "url(img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Login</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Login</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Contact Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">// Login //</h6>
                <h1 className="mb-5">Login Here</h1>
            </div>
            <div className="row g-4">
                <div className="col-12">
                    <div className="row gy-4">
                        <div className="col-md-4">
                            <div className="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">// Booking //</h5>
                                <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">// General //</h5>
                                <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">// Technical //</h5>
                                <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="col-md-12">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <p className="mb-4">Admin Login Here <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form>
                            <div className="row g-3">
                              
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name="email" value={state.email}  onChange={handler} placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                             
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="password" name="password" value={state.password} onChange={handler} placeholder="Password"/>
                                        <label for="password">Your Password</label>
                                    </div>
                                </div>
                              
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" onClick={submitData} type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
    
    </>
  )
}

export default AdminLogin