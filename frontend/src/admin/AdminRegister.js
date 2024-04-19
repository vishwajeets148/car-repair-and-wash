import React, { useState } from 'react'

function AdminRegister() {
     const a= {name:"",email:"", password:"",conpassword:"",profile:""}

    const [state,setState]= useState(a)

const  handler=(e)=>{
            setState({...state,[e.target.name]:e.target.value})
    }

const fileHandler=(e)=>{
//    console.log(e.target.files[0].name)
setState({...state,profile:e.target.files[0]})
}

const baseurl = process.env.REACT_APP_BASEURL;

const  submitData=(e)=>{
    e.preventDefault()
    const{name,email,password,conpassword,profile}=state
    const formData = new FormData()
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("conpassword", conpassword);
    formData.append("profile", profile);
    console.log(state)
    if(password===conpassword){
    fetch(`${baseurl}/admin-register`, {
  method: 'POST',
  body: formData
})
  .then((response) => response.json())
  .then((json) => {
    // console.log(json.message)
    setState(a)
    document.getElementById('profile').value=""
    alert(json.message)
}).catch(()=>console.log("API CALL ERROR"))

    }
    else{
        alert("Your password and conpassword not match ")
    }
    

}
    
  return (
    <>
     {/* <!-- Page Header Start --> */}
     <div className="container-fluid page-header mb-5 p-0" style={{backgroundimage: "url(img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Admin Register</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Admin Register</li>
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
                <h6 className="text-primary text-uppercase">// Admin Register //</h6>
                <h1 className="mb-5"> Admin Register Here</h1>
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
                        <p className="mb-4">Admin Register Here <a href="#">Download Now</a>.</p>
                        <form encType="multipart/form-data" >
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name" value={state.name} onChange={handler}  placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name="email" value={state.email}  onChange={handler} placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="file" className="form-control" id="profile" name="profile"   onChange={fileHandler} placeholder="Profile Image"/>
                                        <label for="profile"> Profile </label>
                                    </div>
                                </div>
                               
                            
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="password" name="password" value={state.password} onChange={handler} placeholder="Password"/>
                                        <label for="password">Your Password</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="conpassword"  name='conpassword' value={state.conpassword} onChange={handler} placeholder="Your Conpassword"/>
                                        <label for="conpassword">Your Conpassword</label>
                                    </div>
                                </div>
                                <div className="col-3 d-grid mx-auto  ">
                                    <button className="btn btn-primary w-100 py-3 rounded-3" onClick={submitData} type="submit">Admin Register</button>
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

export default AdminRegister