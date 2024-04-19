import React, { useState } from 'react'

function Contact() {
    const a= {name:"", email:"", subject:"", message:""}

   const [state,setState] =useState(a)

   const handler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
   }

   const baseurl = process.env.REACT_APP_BASEURL;

   const submitData=(e)=>{
    const{name,email,message, subject}=state
    e.preventDefault()
    if(name && email && message && subject){

    fetch(`${baseurl}/contact`, {
        method: 'POST',
        body: JSON.stringify({ name,email,subject,message  }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            alert(json.message)
          setState(a)
        
        })
    }
    else{
        alert ("All Field is Required")
    }

    // console.log(state)

   }



  return (
    <>
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundimage: "url(img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
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
                <h6 className="text-primary text-uppercase">// Contact Us //</h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
                <div className="col-12">
                    <div className="row gy-4">
                        <div className="col-md-4">
                            <div className="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">// Booking //</h5>
                                <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>book@globalautorepair.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">// General //</h5>
                                <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>info@globalautorepair.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">// Technical //</h5>
                                <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>globalautorepair.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style={{minheight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                <div className="col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <p className="mb-4"><b>Interested in discussing.</b> </p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name" value={state.name} onChange={handler} placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name="email" value={state.email} onChange={handler} placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" name="subject" value={state.subject} onChange={handler} placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" value={state.message} onChange={handler} style={{height: "100px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitData} >Send Message</button>
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

export default Contact