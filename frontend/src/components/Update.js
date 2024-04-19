import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {

     const params =useParams()
    //  console.log(params.id)

    const baseurl = process.env.REACT_APP_BASEURL;

     const a= {name:"",email:"",mobile:"",address:"", password:"",conpassword:"",subject:"", message:""}

    const [state,setState]= useState(a)

const  handler=(e)=>{
            setState({...state,[e.target.name]:e.target.value})
    }

     useEffect(()=>{
        fetch(`${baseurl}/singleidfetch/${params.id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.message)
            setState(json.message)
        })
     },[])



const  submitData=(e)=>{
    e.preventDefault()
    const{name,email,mobile,address,subject,message,password,conpassword}=state
    // console.log(state)
    if(name==="" || email==="" || mobile==="" || address===""   ){
        alert ("ALL Field is Required")
    }
    else{
    if(password===conpassword){
    fetch(`${baseurl}/update/${params.id}`, {
  method: 'PUT',
  body: JSON.stringify({name,email,mobile,address,subject,message,password,conpassword}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json.message)
    setState(a)
    alert(json.message)
}).catch(()=>console.log("API CALL ERROR"))

    }
    else{
        alert("Your password and conpassword not match ")
    }
}
}
    
  return (
    <>
     {/* <!-- Page Header Start --> */}
     <div className="container-fluid page-header mb-5 p-0" style={{backgroundimage: "url(img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Update</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Update</li>
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
                <h6 className="text-primary text-uppercase">// Update //</h6>
                <h1 className="mb-5">Update User Detail</h1>
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
                        
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name" value={state.name} onChange={handler}  placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name="email" value={state.email}  onChange={handler} placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="mobile" name='mobile' value={state.mobile} onChange={handler} placeholder="Your Mobile"/>
                                        <label for="email">Your Mobile no</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="address" name='address'  value={state.address} onChange={handler} placeholder="Your Address"/>
                                        <label for="address">Your Address</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" name="subject" value={state.subject}  onChange={handler}  placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" name='message' value={state.message} onChange={handler}  style={{height: "100px"}}></textarea>
                                        <label for="message">Message</label>
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
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" onClick={submitData} type="submit">Update Detail</button>
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

export default Update